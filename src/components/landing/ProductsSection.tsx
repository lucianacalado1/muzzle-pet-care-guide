import { FaWhatsapp } from "react-icons/fa";
import productHero from "@/assets/product-hero.png";

const products = [
  {
    name: "Embalagem Individual",
    description: "Aprox. 12 gomas • Ideal para experimentar",
    price: "5,90€",
    badge: "Mais popular",
    badgeClass: "bg-accent text-accent-foreground",
    highlight: false,
    image: productHero,
    whatsappUrl:
      "https://wa.me/351917191314?text=Olá!%20Gostaria%20de%20encomendar%20a%20Embalagem%20Individual%20das%20gominhas%20Muzzle.",
  },
  {
    name: "Formato Económico",
    description: "Aprox. 36 gomas • 474g • Novidade!",
    price: "14,20€",
    savings: "Poupa 3,50€ vs 3 embalagens",
    badge: "NOVIDADE",
    badgeClass: "bg-primary text-primary-foreground",
    highlight: true,
    image: "/produto-economico.jpg",
    whatsappUrl:
      "https://wa.me/351917191314?text=Olá!%20Gostaria%20de%20encomendar%20o%20Formato%20Económico%20474g%20das%20gominhas%20Muzzle.",
  },
];

const ProductsSection = () => (
  <section className="py-8 md:py-12 bg-soft-cream">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Os nossos produtos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <div
            key={product.name}
            className={
              product.highlight
                ? "relative bg-card rounded-2xl p-8 border-4 border-primary shadow-xl flex flex-col"
                : "relative bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col"
            }
          >
            <span
              className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold ${product.badgeClass}`}
            >
              {product.badge}
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {product.description}
            </p>

            <div className="mt-auto">
              <p className="text-3xl font-bold text-foreground mb-1">
                {product.price}
              </p>
              {product.savings && (
                <p className="text-sm text-primary font-medium mb-4">
                  {product.savings}
                </p>
              )}

              <a
                href={product.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-center items-center gap-2 bg-green-600 text-white px-6 h-[52px] w-full rounded-2xl text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <FaWhatsapp size={20} />
                Encomendar via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
