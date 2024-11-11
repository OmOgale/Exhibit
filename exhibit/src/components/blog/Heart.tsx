import { GiSverdIFjell, GiCrownedHeart as HeartIcon } from "react-icons/gi";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import randomColor from "randomcolor";
import { Stack, Box, Icon } from "@chakra-ui/react";
import { usePostsStore } from "@/utils/postsStore";
import { likesHandler } from "@/utils/methods";


function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Heart({likes, userLikes}: { likes?: number, userLikes?: number}) {
  // console.log(userLikes)
  const [floatingHearts, setFloatingHearts] = useState<JSX.Element[]>([]);
  const [clicked, setClicked] = useState(typeof userLikes != "undefined" ? userLikes > 0 : false);
  const userLikesDefined = useRef(false);
  const [curLikes, setCurLikes] = useState(likes ? likes : 0);
  const [diffLikes, setDiffLikes] = useState(0);
  const currentIP = usePostsStore ((state) => state.currentIP);
  const currentUUID = usePostsStore ((state) => state.currentUUID);
  useEffect(() => {
    if (typeof userLikes != "undefined" && !userLikesDefined.current) {
      setClicked(userLikes > 0)
      setCurLikes(likes ? Number(likes) : Number(userLikes))
      setDiffLikes(7 - Number(userLikes))
      userLikesDefined.current = true;
    }
  }, [userLikes])
  return (
    <Stack flexDirection={"row"} alignContent={"center"}>
      <motion.div
        style={{
          position: "relative",
          display: "inline-block",
          padding: "2px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
        onClick={() => {
          setFloatingHearts([
            ...floatingHearts,
            <motion.div
              key={floatingHearts.length}
              style={{ position: "absolute", top: 0, zIndex: 50 }}
              animate={{
                y: -150,
                opacity: 0,
                scale: 1.75,
                x: [0, randomNumber(-300, 300)],
              }}
              transition={{ duration: 2 }}
            >
              <Icon
                as={HeartIcon}
                fontSize={{ base: 25, md: 35 }}
                color={randomColor({ luminosity: "bright" })}
              />
            </motion.div>,
          ]);
          setClicked(true);
          if (typeof userLikes != "undefined" && userLikes < 7 && diffLikes > 0) {
            likesHandler(currentIP, currentUUID);
            setCurLikes(curLikes + 1);
            setDiffLikes(diffLikes - 1);
          }

        }}
      >
        {clicked && (
          <Icon
            as={HeartIcon}
            fontSize={{ base: 25, md: 35 }}
            color={"red"}
          />
          
        )}
        {!clicked && (
          <Icon
            as={HeartIcon}
            fontSize={{ base: 25, md: 35 }}
            color={"white"}
          />
        )}
        {floatingHearts}
      </motion.div>
      <Box
        fontSize={{ base: "sm", md: "lg", lg: "xl" }}
        alignContent={"center"}
      >
        {curLikes}
      </Box>
    </Stack>
  );
}

export default Heart;
