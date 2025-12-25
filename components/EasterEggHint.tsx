import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const EasterEggHint = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-muted-foreground/50 text-xs md:text-sm"
        >
          <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
          <p className="font-mono tracking-wide">
            Psst... gamers know the code. ↑↑↓↓←→←→BA
          </p>
          <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default EasterEggHint;
