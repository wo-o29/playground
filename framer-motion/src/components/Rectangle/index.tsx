import { motion } from "framer-motion";
import styles from "./style.module.css";

interface RectangleProps {
  x?: number;
  bgColor: string;
}

function Rectangle({ bgColor, x }: RectangleProps) {
  return <motion.div animate={{ x: x }} style={{ backgroundColor: bgColor }} className={styles.rectangle} />;
}

export default Rectangle;
