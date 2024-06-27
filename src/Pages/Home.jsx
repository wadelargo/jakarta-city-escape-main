import Layout from "../Layout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Carousel from "../Components/Carousel.jsx";
import Ancol from "/assets/ancol.jpeg";
import Katedral from "/assets/katedral.png";
import Istiqlal from "/assets/istiqlal.jpg";
import TMII from "/assets/TMII.jpg";
import TMII1 from "/assets/TMII1.jpeg";
import Monas from "/assets/monas.jpg";
import KotaTua from "/assets/kotu-hero.jpg";

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [allDestinations, setAllDestinations] = useState([]);
  const [search, setSearch] = useState("");

  const images = [Ancol, Katedral, Istiqlal, TMII, TMII1, Monas, KotaTua];

  window.onload = function () {
    document.getElementById("hero").classList.remove("opacity-0");
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("layout").classList.remove("lg:pb-[30%]");
    document.getElementById("dark-layer").classList.remove("opacity-0");
    document.getElementById("dark-layer").classList.add("opacity-25");
  };

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToWelcome = (event) => {
    event.preventDefault();
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layout").classList.add("lg:pb-[20%]");
    document.getElementById("welcome").classList.remove("opacity-0", "hidden");
    document.getElementById("bottom-image").classList.remove("hidden");

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#welcome", offsetY: 80 },
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://jakarta-city-escape-be.vercel.app/api/getDestinationsForHomepage"
      )
      .then((response) => {
        setDestinations(response.data.data);
      });
    axios
      .get("https://jakarta-city-escape-be.vercel.app/api/getAllDestinations")
      .then((response) => {
        setAllDestinations(response.data.data.destinations);
      });
  }, []);

  const SearchPopUp = () => {
    let filteredDestinations = allDestinations;

    if (search != "") {
      if (search) {
        filteredDestinations = filteredDestinations.filter((destination) =>
          destination.nama.toLowerCase().includes(search.toLowerCase())
        );
      }

      return (
        <>
          <div
            className="p-4 rounded-b-lg bg-gray-200/75 
          block w-full"
          >
            <ul>
              {filteredDestinations.map((destination) => (
                <li
                  key={destination.id}
                  className="mb-6 p-2 rounded-lg hover:bg-stone-400 transition-colors ease-in-out duration-500"
                >
                  <a
                    href={`/jelajahi/${destination.nama
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="flex flex-row gap-6"
                  >
                    <div className="w-1/3 flex object-cover">
                      <img
                        src={`${destination.image}`}
                        className="w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <h1 className="text-xl font-bold">{destination.nama}</h1>
                      <p className="inline-flex items-center mt-2 text-xs tracking-wide">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-layers-3"
                        >
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                          <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                        </svg>
                        &nbsp;{destination.kategori}&nbsp; | &nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        &nbsp;{destination.lokasi}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }
  };

  return (
    <Layout>
      <div
        className="relative h-screen transition-opacity ease-in-out duration-500"
        id="hero"
      >
        <Carousel />
        <div className="absolute z-[70] w-full top-1/3">
          <div className="container flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-100">
              Hi! Mau ke mana hari ini?
            </h1>
            <form className="w-full lg:w-1/2 mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  onChange={(e) => setSearch(e.target.value)}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Mau pergi ke mana hari ini?"
                />
              </div>
              {<SearchPopUp />}
            </form>
          </div>
        </div>
        <div className="absolute flex justify-center w-1/2 left-1/4 z-[60] bottom-5">
          <a
            href=""
            id="eksplorasi-btn"
            onClick={scrollToWelcome}
            className="bg-transparent text-center text-white font-bold text-2xl bottom-0 p-4 rounded-lg absolute"
          >
            Yuk eksplorasi <span className="font-bold">Jakarta</span>!
            <span className="text-3xl block motion-safe:animate-bounce">
              &darr;
            </span>
          </a>
        </div>
      </div>
      <div className="dark-layer opacity-0" id="dark-layer"></div>

      <div
        className="container hidden mt-16 transition-opacity opacity-0 ease-in-out duration-[1.75s]"
        id="welcome"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Selamat Datang di Jakarta!
        </h1>
        <h2 className="text-2xl font-medium mt-6 tracking-wide text-center italic">
          {" "}
          Scroll to see the excitement story!
        </h2>

        {destinations.length > 0 ? (
          destinations.map((destination, index) => {
            if (index == 1) {
              return (
                <div
                  key={index}
                  className="flex lg:flex-row flex-col-reverse mb-10 order-last lg:order-first"
                >
                  <div className="w-full lg:w-1/2">
                    <a
                      href={`/jelajahi/${destination.nama
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <h3 className="text-3xl font-bold text-left hover:translate-x-4 transition-transform ease-in-out duration-300">
                        {destination.nama}
                      </h3>
                    </a>
                    <p className="tracking-wide mt-4 text-justify">
                      {destination.deskripsi}
                    </p>
                    <a
                      href="/jelajahi/kota-tua"
                      className="block mt-8 peer text-lg font-bold "
                    >
                      Read more &rarr;
                    </a>
                    <div className="animated-underscore peer-hover:w-24"></div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-end">
                      <img
                        src={`${destination.image}`}
                        className="w-full lg:w-3/4 text-center hover:shadow mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 rotate-6"
                        alt={destination.nama}
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-16 mb-20"
                >
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={`${destination.image}`}
                      className="w-full lg:w-3/4 text-center hover:shadow mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 -rotate-6"
                      alt="Kota Tua"
                    />
                  </div>
                  <div>
                    <a
                      href={`/jelajahi/${destination.nama
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <h3 className="text-3xl font-bold text-left hover:translate-x-4 transition-transform ease-in-out duration-300">
                        {destination.nama}
                      </h3>
                    </a>
                    <div className="animated-underscore peer-hover:w-12"></div>
                    <p className="tracking-wide mt-4 text-justify">
                      {destination.deskripsi}
                    </p>
                    <a
                      href="/jelajahi/kota-tua"
                      className="block mt-8 peer text-lg font-bold "
                    >
                      Read more &rarr;
                    </a>
                    <div className="animated-underscore peer-hover:w-24"></div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="my-10">
            <h2 className="text-xl font-semibold text-center">
              Terjadi kesalahan dengan server. Harap coba kembali lagi nanti!
            </h2>
          </div>
        )}

        {destinations.length > 0 ? (
          <div className="flex justify-center">
            <div className="text-start">
              <a
                href="/jelajahi"
                className="text-xl peer text-center font-semibold"
              >
                Lihat selengkapnya &rarr;
              </a>
              <div className="animated-underscore peer-hover:w-48"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className="flex flex-nowrap relative overflow-x-scroll space-x-5 mt-12 hidden"
        id="bottom-image"
      >
        {images.map((image, index) => (
          <div className=" flex-shrink-0 rounded-lg w-64 h-44" key={index}>
            <img
              className="rounded-lg object-cover object-center"
              src={`${image}`}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
