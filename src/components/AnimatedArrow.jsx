import { motion } from "framer-motion";

export default function AnimatedArrow({ isHovered }) {
    return (
        <motion.span
            className="inline-block ml-2 text-inherit"
            initial={false}
            animate={{
                x: isHovered ? [0, 10, 0] : 0,
                opacity: isHovered ? [1, 0.6, 1] : 1,
            }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop",
            }}
        >
            →
        </motion.span>
    );
}
