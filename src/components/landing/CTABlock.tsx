import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

interface CTABlockProps {
  title?: string;
  text?: string;
  size?: "small" | "medium";
}

const CTABlock = ({ title, text, size = "small" }: CTABlockProps) => (
  <div className={size === "small" ? "py-6 md:py-8" : "py-8 md:py-12"}>
    <div className="container">
      <div
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-3"
      >
        {title && (
          <h3 className={`font-semibold ${size === "medium" ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}>
            {title}
          </h3>
        )}
        {text && !title && (
          <p className="text-muted-foreground text-sm md:text-base">{text}</p>
        )}
        {text && title && (
          <p className="text-muted-foreground text-sm md:text-base -mt-1">{text}</p>
        )}
        <Link
          to="/quiz"
          className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 h-[48px] md:h-[52px] w-full md:w-auto rounded-2xl text-base md:text-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
        >
          <PawPrint className="w-5 h-5" />
          Descobrir a dose ideal
        </Link>
      </div>
    </div>
  </div>
);

export default CTABlock;
