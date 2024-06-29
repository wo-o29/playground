import { motion } from "framer-motion";
import styles from "./style.module.css";

interface CircleProps {
  x?: number;
  bgColor: string;
}

function Circle({ bgColor, x }: CircleProps) {
  return (
    <motion.div
      animate={{ x: x }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: 0, right: 100 }}
      style={{ backgroundColor: bgColor }}
      className={styles.circle}
    />
  );
}

export default Circle;
