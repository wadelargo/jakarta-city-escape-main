import MonasHero from "../../public/assets/monas.jpg";
import KotuHero from "../../public/assets/kotu-hero.jpg";
import TMIIHero from "../../public/assets/tmii.png";
import BundHI from "../../public/assets/BundHI.jpg";
import musMac from "../../public/assets/museumMacan.jpg";
import bundar from "../../public/assets/tesBundh.webp";
import Hutan from "../../public/assets/HutanKotaSCBD.jpeg";

export default function Carousel() {
  return (
    <div
      id="default-carousel"
      className="relative h-full w-full"
      data-carousel="slide"
    >
      <div className="relative h-full object-cover object-center overflow-hidden">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={MonasHero}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={KotuHero}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={TMIIHero}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={BundHI}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={musMac}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={bundar}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={Hutan}
            className="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
      </div>
    </div>
  );
}
