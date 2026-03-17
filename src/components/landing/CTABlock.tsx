import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface CTABlockProps {
  title?: string;
  text: string;
  compact?: boolean;
}

const CTABlock = ({ title, text, compact = false }: CTABlockProps) => (
  <section className={compact ? "py-10 md:py-14" : "py-14 md:py-20"}>
    <div className="container">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        )}
        <p className="text-muted-foreground mb-6 text-base md:text-lg">
          {text}
        </p>
        <Link
          to="/quiz"
          className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 h-[52px] md:h-14 w-full md:w-auto rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          <PawPrint className="w-5 h-5" />
          Descobrir a dose ideal
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTABlock;
