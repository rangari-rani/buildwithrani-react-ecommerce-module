import { AnimatePresence, motion } from "framer-motion";
import { useRotatingQuote } from "./hooks/useRotatingQuote";

const RotatingQuote = ({ interval = 4000 }: { interval?: number }) => {
  const { currentQuote, pause, resume, index } = useRotatingQuote(interval);

  return (
    <div onMouseEnter={pause} onMouseLeave={resume}>
      {/* Desktop / tablet view */}
      <div className="hidden sm:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm italic flex items-center gap-2 font-semibold text-gray-500"
          >
            <span>{currentQuote.icon}</span>
            <span>{currentQuote.text}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Mobile view (2–3 static words) */}
      <div className="block sm:hidden">
        <span className="text-sm italic font-semibold text-gray-500 flex items-center gap-2">
          🌿 <span>Grow. Glow. Go.</span>
        </span>
      </div>
    </div>
  );
};

export default RotatingQuote;
