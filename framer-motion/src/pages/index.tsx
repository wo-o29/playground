import Rectangle from "../components/Rectangle";
import Circle from "../components/Circle";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }}>
      <Rectangle bgColor="red" />
      <Rectangle bgColor="blue" />
      <Rectangle bgColor="green" />
      <Circle x={50} bgColor="red" />
      <Circle x={100} bgColor="blue" />
      <Circle x={150} bgColor="green" />
    </motion.div>
  );
}
