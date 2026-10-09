import { useEffect, useRef, useState } from "react";
import home from "@/components/home/home.module.css";
import styles from "./blog.module.css";

// A rod tops out at 9 (the 5-bead plus all four 1-beads), so that's each reader's limit. The backend enforces it too.
const MAX_LIKES_PER_READER = 9;

// One soroban rod, scaled down: a heaven bead worth 5 above the beam, four earth beads worth 1 below.
const W = 44;
const X = W / 2;
const BEAD_W = 32;
const BEAD_H = 14;
const TOP = 5;
const BEAM_Y = TOP + BEAD_H * 2;
const BEAM_H = 5;
const EARTH_Y = BEAM_Y + BEAM_H;
const BOTTOM = EARTH_Y + BEAD_H * 5;
const H = BOTTOM + 5;

function bead(y: number) {
  const l = X - BEAD_W / 2;
  const r = X + BEAD_W / 2;
  const m = y + BEAD_H / 2;
  return `M${l} ${m} L${l + 7} ${y + 1} L${r - 7} ${y + 1} L${r} ${m} L${r - 7} ${y + BEAD_H - 1} L${l + 7} ${y + BEAD_H - 1} Z`;
}

// Likes for a post, counted on an abacus rod. Each reader can like a post up to 9 times.
// `userLikes` is undefined while this reader's count is still loading: the rod shows straight away, empty,
// and its beads slide into place when the count arrives.
export default function BeadLikes({ uuid, likes = 0, userLikes }: { uuid: string; likes?: number; userLikes?: number }) {
  const [total, setTotal] = useState(Number(likes));
  const [mine, setMine] = useState(Number(userLikes ?? 0));
  const liked = useRef(false);

  // Follow the counts as they load, until the reader starts liking; after that the local state is the truth.
  useEffect(() => {
    if (liked.current) return;
    setTotal(Number(likes));
    setMine(Number(userLikes ?? 0));
  }, [likes, userLikes]);

  const loading = userLikes === undefined;
  const maxed = mine >= MAX_LIKES_PER_READER;

  const like = async () => {
    // Until we know how many times this reader has liked, a like could overshoot the limit on screen.
    if (maxed || loading) return;
    liked.current = true;
    // Move the bead straight away, then settle on what the server says.
    setMine((m) => m + 1);
    setTotal((t) => t + 1);
    try {
      const res = await fetch(`/api/likes/${encodeURIComponent(uuid)}`, { method: "POST" });
      if (res.ok) return;
      setTotal((t) => t - 1);
      // 409: this reader was already at the limit (say, from another tab), so show a full rod.
      // Anything else, 429 (too many likes from this network) included, takes the bead back.
      setMine((m) => (res.status === 409 ? MAX_LIKES_PER_READER : m - 1));
    } catch {
      setMine((m) => m - 1);
      setTotal((t) => t - 1);
    }
  };

  const five = mine >= 5;
  const ones = mine % 5;
  return (
    <div className={styles.likeWidget}>
      <button
        type="button"
        onClick={like}
        aria-disabled={maxed || loading}
        aria-label={maxed ? `You’ve already liked this post ${MAX_LIKES_PER_READER} times` : "Like this post"}
        className={styles.rodButton}
        title={maxed || loading ? undefined : "Like"}
      >
        <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          <rect x="1.5" y="1.5" width={W - 3} height={H - 3} rx="4" className={home.frame} />
          <line x1={X} x2={X} y1={TOP} y2={BOTTOM} className={home.rod} />
          <rect x="4" y={BEAM_Y} width={W - 8} height={BEAM_H} className={home.beam} />
          <path d={bead(TOP)} className={styles.likeBead} style={{ transform: `translateY(${five ? BEAD_H : 0}px)` }} />
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={bead(EARTH_Y + i * BEAD_H)}
              className={styles.likeBead}
              style={{ transform: `translateY(${i < ones ? 0 : BEAD_H}px)` }}
            />
          ))}
        </svg>
      </button>
      <span className={styles.likesTotal} aria-live="polite">
        {total} {total === 1 ? "like" : "likes"}
      </span>
    </div>
  );
}
