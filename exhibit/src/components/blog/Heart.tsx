import {
  FaHeart as HeartFilledIcon,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import randomColor from "randomcolor";
import { Box } from "@chakra-ui/react";

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HeartComponent() {
  const [floatingHearts, setFloatingHearts] = useState<JSX.Element[]>([]);
  const clicked = false
  return (

    <Box height={50}>
      <motion.div
      style={{position: "relative", display: "inline-block", padding: "2px", cursor: "pointer", borderRadius: "50%"}}
        onClick={() => {
          setFloatingHearts([
            ...floatingHearts,
            <motion.div
              key={floatingHearts.length}
              style={{  position: "absolute", top: 0, zIndex: 50 }}
              animate={{
                y: -150,
                opacity: 0,
                scale: 1.75,
                x: [0, randomNumber(-150, 150)],
              }}
              transition={{ duration: 2 }}
            >
              <HeartFilledIcon size={25}
                style={{
                  color: randomColor({
                    luminosity: "bright",
                  }),
                }}
              />
            </motion.div>,
          ]);
        }}
      >
        {clicked && <HeartFilledIcon size={25} color="red" />}
        {!clicked && <HeartFilledIcon size={25}/>} 
        {floatingHearts}
      </motion.div>

    </Box>
  );
}

export default HeartComponent;
