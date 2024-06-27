import Layout from "../Layout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DestinationDetail() {
  let lastSegURL = window.location.href.split("/").pop();
  let key = "AIzaSyCW0LsgRb3ODnNk9M43hosaZWbo9pnqcJM";
  const [destination, setDestination] = useState([]);
  const [featuredGallery, setFeaturedGallery] = useState([]);
  const [mainGalleryImage, setMainGalleryImage] = useState("");
  const [map, setMap] = useState("");

  window.onload = () => {
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layout").classList.add("lg:pb-[30%]");
  };

  useEffect(() => {
    axios
      .get(
        `https://jakarta-city-escape-be.vercel.app/api/getDestination/${lastSegURL}`
      )
      .then((response) => {
        setDestination(response.data.data[0]);
        setFeaturedGallery(response.data.data[0].images);
        setMap(lastSegURL);
      });
  }, []);

  const handleGalleryImage = (index) => {
    let tempImage = mainGalleryImage ? mainGalleryImage : featuredGallery[0];
    setMainGalleryImage(featuredGallery[index]);
    featuredGallery[index] = tempImage;
  };

  const GalleryImages = () => {
    return featuredGallery.map((image, index) => {
      if (index != 0) {
        return (
          <div className="relative" key={index}>
            <img
              onClick={() => handleGalleryImage(index)}
              className="h-full object-cover object-center max-w-full rounded-lg transition-transform ease-in-out duration-500 hover:-translate-y-2 cursor-pointer"
              src={`${image}`}
              alt={`${destination.nama}`}
            />
          </div>
        );
      }
    });
  };

  return (
    <Layout>
      <div
        className="h-screen bg-center bg-cover flex items-center"
        id="hero"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="container text-stone-100 z-[55]">
          <h1 className="text-left hero-title">{destination.nama}</h1>
          <p className="inline-flex mt-4 tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layers-3"
            >
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
              <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
            </svg>
            &nbsp;{destination.kategori}&nbsp;
            <div className="w-[2px] h-auto bg-white"></div>
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            &nbsp;{destination.lokasi}&nbsp;
            <div className="w-[2px] h-auto bg-white"></div>
            &nbsp;
            <a
              href={
                destination.instagram
                  ? `https://instagram.com/${destination.instagram.replace(
                      "@",
                      ""
                    )}`
                  : ""
              }
              className="inline-flex"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              &nbsp;
              {destination.instagram ?? "Informasi tidak tersedia"}
            </a>
          </p>
          <div>
            <p className="inline-flex mt-2 tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              &nbsp;
              {destination.jamOp ?? "Informasi tidak tersedia"}
            </p>
          </div>
        </div>
      </div>
      <div className="dark-layer opacity-25"></div>
      <div className="container mt-16 dark:text-gray-200">
        <p className="tracking-wide text-justify">{destination.deskripsi}</p>
        <div className="grid gap-4 mt-16">
          <div className="object-cover object-center">
            <img
              className="h-full object-cover object-center w-full rounded-lg"
              src={
                mainGalleryImage === ""
                  ? `${featuredGallery[0]}`
                  : `${mainGalleryImage}`
              }
              alt={`${destination.nama}`}
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <GalleryImages />
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-16">Lokasi {destination.nama}</h2>

        <div className="w-full h-[500px]">
          <iframe
            loading="lazy"
            id="map"
            className="border-0 rounded-md mt-6 w-full h-full"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${map}`}
          />
        </div>

        <h2 className="text-4xl font-bold mt-16">
          Gimana sih caranya ke {destination.nama} ?
        </h2>
        <h3 className="text-xl font-semibold mt-3">
          Yuk, biasakan naik transportasi umum!
        </h3>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white transition-colors ease-in-out duration-300 dark:bg-stone-800 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
          className="mt-6"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 px-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Via JakLingko (Transjakarta, MRT, Mikrotrans)</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <img src={`${destination.route_jaklingko}`} />
            </div>
          </div>

          {destination.route_krl != "" ? (
            <div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 px-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>Via KRL/LRT</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 px-3 border-b border-gray-200">
                  <img src={destination.route_krl} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}
