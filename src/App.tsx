import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

library.add(fas);

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  position: absolute;
  top: 100px;
  grid-template-columns: repeat(2, 1fr);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: { duration: 0.5 },
  },
  leaving: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5 },
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 56, 238), rgb(0, 151, 238))",
      "linear-gradient(135deg, rgb(0, 238, 91), rgb(172, 231, 209))",
    ]
  );
  return (
    <Wrapper style={{ background: gradient }}>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            drag="x"
            dragSnapToOrigin
            style={{ x, rotateZ }}
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>Click</button>
    </Wrapper>
  );
}

export default App;
