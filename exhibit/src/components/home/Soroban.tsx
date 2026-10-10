"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

// Geometry (SVG units). Each rod holds one heaven bead worth 5 and four earth beads worth 1.
const BEAD_W = 46;
const BEAD_H = 22;
const TOP = 8;
const BEAM_Y = 70;
const BEAM_H = 8;
const EARTH_Y = BEAM_Y + BEAM_H;
const BOTTOM = EARTH_Y + BEAD_H * 5;
const ROD_X = [44, 106, 186, 248]; // hours | minutes
const WIDTH = 292;
const HEAVEN_DROP = BEAM_Y - BEAD_H - TOP; // how far the heaven bead travels to touch the beam
const DRAG_THRESHOLD = 3; // px of movement before a press counts as a drag, not a tap

// A bead is either the rod's heaven bead or earth bead 0–3 (0 sits nearest the beam).
type Bead = "heaven" | number;

// The rod's value after the given bead is moved to sit near svg y.
function valueAt(value: number, bead: Bead, y: number) {
  const fives = value >= 5 ? 5 : 0;
  const ones = value % 5;
  if (bead === "heaven") {
    const midpoint = TOP + BEAD_H / 2 + HEAVEN_DROP / 2;
    return (y > midpoint ? 5 : 0) + ones;
  }
  const midpoint = EARTH_Y + (bead + 1) * BEAD_H;
  // Pushing a bead up carries the beads above it; pulling it down carries the ones below.
  return fives + (y < midpoint ? Math.max(ones, bead + 1) : Math.min(ones, bead));
}

// The rod's value after a tap on the given bead toggles it.
function valueAfterTap(value: number, bead: Bead) {
  const fives = value >= 5 ? 5 : 0;
  const ones = value % 5;
  if (bead === "heaven") return (fives ? 0 : 5) + ones;
  return fives + (bead < ones ? bead : bead + 1);
}
const HEIGHT = BOTTOM + 8;

function waterlooTime() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  return get("hour") + get("minute");
}

// Om's age today, by the calendar in Waterloo. Born September 23, 2004.
function ageInWaterloo() {
  const [year, month, day] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto" })
    .format(new Date())
    .split("-")
    .map(Number);
  return year - 2004 - (month < 9 || (month === 9 && day < 23) ? 1 : 0);
}

// A bare egg is a punchline that stands on its own, so its caption leaves the number out.
type EasterEgg = { label?: string; text: ReactNode; bare?: boolean };

// Numbers the rods can land on, by a reader's hand or by the clock. Keyed by all four rods.
const EASTER_EGGS: Record<string, EasterEgg> = {
  "1729": { text: "the Hardy–Ramanujan number: the smallest sum of two cubes in two ways (1³ + 12³ = 9³ + 10³)." },
  "3000": { text: "I love you 3000.", bare: true },
  "3141": { text: "the first four digits of π." },
  "2718": { text: "the first four digits of e." },
  "1618": { text: "the golden ratio, give or take a decimal point." },
  "2048": { text: "now merge the tiles." },
  "0404": { text: "but the page was found, actually." },
  "0007": { text: "SIUUU!", bare: true },
  "0042": { text: "the answer to life, the universe, and everything." },
  "0047": { text: "Agent 47, good luck.", bare: true },
  "0067": { text: "Six seven. 🤷", bare: true },
  "0069": { text: "Nice.", bare: true },
  "0099": { text: "99 problems, but a b ain’t one.", bare: true },
  "0360": { text: "No scope.", bare: true },
  "0451": { text: "Fahrenheit 451, and every video game’s door code." },
  "2027": {
    text: (
      <>
        as in Class of 2027. <a href="mailto:oogale@uwaterloo.ca">Hiring?</a>
      </>
    ),
  },
  "0021": { text: "as in the 21st UCMAS International Abacus Competition, where I took first place." },
  "0923": { label: "September 23", text: "my birthday." },
  "8008": { text: "I’m a professional, I swear.", bare: true },
  "1111": { text: "make a wish." },
  "1984": { text: "Big Brother is watching.", bare: true },
  "2004": { text: "the year I was born." },
};

function findEgg(rods: string): EasterEgg | undefined {
  return rods === String(ageInWaterloo()).padStart(4, "0") ? { text: "how old I am." } : EASTER_EGGS[rods];
}

function easterEgg(rods: string): ReactNode {
  const egg = findEgg(rods);
  if (!egg) return null;
  if (egg.bare) return egg.text;
  return (
    <>
      {egg.label ?? Number(rods)}, {egg.text}
    </>
  );
}

function twelveHour(digits: string) {
  const h = Number(digits.slice(0, 2));
  const m = digits.slice(2);
  return `${h % 12 || 12}:${m} ${h < 12 ? "am" : "pm"}`;
}

function beadPath(x: number, y: number) {
  // A flattened hexagon, the double-cone profile of a soroban bead.
  const l = x - BEAD_W / 2;
  const r = x + BEAD_W / 2;
  const m = y + BEAD_H / 2;
  const i = 10;
  return `M${l} ${m} L${l + i} ${y + 1} L${r - i} ${y + 1} L${r} ${m} L${r - i} ${y + BEAD_H - 1} L${l + i} ${y + BEAD_H - 1} Z`;
}

// With no props, shows the current Waterloo time. With `value` (four digits), shows that number instead.
export default function Soroban({ value, caption: fixedCaption }: { value?: string; caption?: ReactNode }) {
  const [time, setTime] = useState<string | null>(null);
  const [digits, setDigits] = useState<number[]>([0, 0, 0, 0]);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (value) return;
    // Tick on each minute boundary, rescheduling every time so the clock never drifts.
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      setTime(waterlooTime());
      clearTimeout(id);
      id = setTimeout(tick, 60_000 - (Date.now() % 60_000) + 50);
    };
    // Background tabs throttle timers, so catch up as soon as the page is visible again.
    const onVisible = () => document.visibilityState === "visible" && tick();
    tick();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearTimeout(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [value]);

  useEffect(() => {
    const shown = value ?? time;
    if (shown && !touched) setDigits(shown.split("").map(Number));
  }, [value, time, touched]);

  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ rod: number; bead: Bead; startY: number; moved: boolean } | null>(null);

  const updateRod = (rod: number, next: (value: number) => number) => {
    const value = next(digits[rod]);
    if (value === digits[rod]) return;
    setTouched(true);
    setDigits((d) => d.map((v, i) => (i === rod ? value : v)));
  };

  const toSvgY = (clientY: number) => {
    const ctm = svgRef.current?.getScreenCTM();
    return ctm ? (clientY - ctm.f) / ctm.d : 0;
  };

  const onPointerDown = (rod: number, bead: Bead) => (e: React.PointerEvent<SVGPathElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { rod, bead, startY: e.clientY, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<SVGPathElement>) => {
    const d = drag.current;
    if (!d) return;
    if (!d.moved && Math.abs(e.clientY - d.startY) < DRAG_THRESHOLD) return;
    d.moved = true;
    const y = toSvgY(e.clientY);
    updateRod(d.rod, (value) => valueAt(value, d.bead, y));
  };

  const onPointerUp = () => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved) updateRod(d.rod, (value) => valueAfterTap(value, d.bead));
  };

  const beadHandlers = (rod: number, bead: Bead) => ({
    onPointerDown: onPointerDown(rod, bead),
    onPointerMove,
    onPointerUp,
    onPointerCancel: () => (drag.current = null),
  });

  const rods = digits.join("");
  const clockEgg = time && !value ? easterEgg(time) : null;
  // A page that shows a fixed number keeps its own caption for it, even when the beads are moved back to it.
  const caption =
    touched && rods !== value
      ? easterEgg(rods) || `The beads now read ${rods}.`
      : value
        ? fixedCaption
        : !time
          ? "Waterloo time, shown on an abacus."
          : clockEgg
            ? (
                <>
                  It’s {twelveHour(time)} in Waterloo, shown on an abacus. {findEgg(time)?.bare ? "" : "That’s also "}
                  {clockEgg} Try moving the beads.
                </>
              )
            : `It’s ${twelveHour(time)} in Waterloo, shown on an abacus. Try moving the beads; some numbers have something to say. (Why an abacus? Keep scrolling :D )`;

  return (
    <figure className={styles.soroban}>
      <svg ref={svgRef} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true" className={touched ? styles.settled : undefined}>
        <rect x="2" y="2" width={WIDTH - 4} height={HEIGHT - 4} rx="6" className={styles.frame} />
        <rect x="8" y={TOP} width={WIDTH - 16} height={BOTTOM - TOP} className={styles.well} />
        {ROD_X.map((x) => (
          <line key={x} x1={x} x2={x} y1={TOP} y2={BOTTOM} className={styles.rod} />
        ))}
        <rect x="8" y={BEAM_Y} width={WIDTH - 16} height={BEAM_H} className={styles.beam} />
        {/* Unit-point marks on the beam, as on a real soroban */}
        {[(ROD_X[1] + ROD_X[0]) / 2, (ROD_X[3] + ROD_X[2]) / 2].map((x) => (
          <circle key={x} cx={x} cy={BEAM_Y + BEAM_H / 2} r="1.6" className={styles.dot} />
        ))}

        {ROD_X.map((x, rod) => {
          const value = digits[rod];
          const five = value >= 5;
          const ones = value % 5;
          return (
            <g key={x} style={{ ["--rod" as string]: rod }}>
              <path
                d={beadPath(x, TOP)}
                className={styles.bead}
                style={{ transform: `translateY(${five ? HEAVEN_DROP : 0}px)` }}
                {...beadHandlers(rod, "heaven")}
              />
              {[0, 1, 2, 3].map((i) => {
                const active = i < ones;
                return (
                  <path
                    key={i}
                    d={beadPath(x, EARTH_Y + i * BEAD_H)}
                    className={styles.bead}
                    style={{ transform: `translateY(${active ? 0 : BEAD_H}px)` }}
                    {...beadHandlers(rod, i)}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      <figcaption aria-live="polite">
        {caption}
        {touched && (
          <>
            {" "}
            <button type="button" className={styles.textButton} onClick={() => setTouched(false)}>
              {value ? "Put them back" : "Show the time again"}
            </button>
          </>
        )}
      </figcaption>
    </figure>
  );
}
