import FormalWearSlideshow from "../../components/FormalWearSlideshow";
import ropa1 from "../../assets/ropas/food1.jpg";
import ropa2 from "../../assets/ropas/food2.jpg";
import ropa3 from "../../assets/ropas/food3.jpg";
import ropa4 from "../../assets/ropas/food4.jpg";
import "./ropa.scss";

export default function Ropa() {
    const formalWear = [
        {
            image: ropa1,
            title: "Classic Business Suit",
            description: "A tailored suit with a button-down shirt, belt, and polished dress shoes. This is the safest choice for a professional business party.",
            colors: "Navy, charcoal, black, white, light blue, and soft gray.",
        },
        {
            image: ropa2,
            title: "Formal Cocktail Dress",
            description: "A knee-length or midi dress with clean lines and elegant fabric. Keep the fit comfortable and party-ready without feeling too casual.",
            colors: "Black, burgundy, emerald, navy, champagne, and deep plum.",
        },
        {
            image: ropa3,
            title: "Dress Shirt and Slacks",
            description: "A crisp dress shirt paired with pressed slacks or chinos, finished with dress shoes. Add a blazer to make it feel more formal.",
            colors: "White, cream, pale blue, tan, charcoal, navy, and dark brown.",
        },
        {
            image: ropa4,
            title: "Blazer with Dress Pants",
            description: "A structured blazer with dress pants, a blouse or collared shirt, and simple accessories. It looks polished while still being easy to move in.",
            colors: "Black, ivory, forest green, camel, navy, and silver accents.",
        },
    ];

    return (
        <div className="clothing-page">
            <div className="clothing-hero">
                <h1>Ropa</h1>
            </div>

            <FormalWearSlideshow items={formalWear} />

            <div className="clothing-content">
                <p>¡Bienvenido a nuestra sección de ropa! Aquí encontrarás una variedad de prendas elegantes y cómodas para complementar tus eventos. Desde vestidos de gala hasta trajes formales, nuestra colección está diseñada para hacerte lucir espectacular en cualquier ocasión. Explora nuestras opciones y encuentra el atuendo perfecto para tu próximo evento.</p>
            </div>
        </div>
    );
}
