import Layout from "../Layout.jsx";
import Confetti from "../Components/Confetti.jsx";
import Henry from "/assets/henry.png";
import Jeo from "/assets/jeo.png";
import Ben from "/assets/ben.png";
import Maul from "/assets/maul.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function AboutDevs() {
  window.onload = function () {
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layout").classList.add("lg:pb-[15%]");
  };

  return (
    <Layout>
      <div>
        <div className="flex lg:items-center justify-center min-h-screen">
          <div className="mt-36">
            <div className=" grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-auto rounded-lg max-w-screen-lg">
              <div className="text-5xl font-extralight">
                <h1 className="font-bold">THE MAGIC DEVS</h1>
                <p className="mt-4">YOU&apos;VE BEEN</p>
                <p className="mt-4">SEARCHING FOR</p>
              </div>
              <div className="mt-6 md:mt-0">
                <p>
                  Website ini dikelola oleh tim yang beranggotakan 4 (empat)
                  orang dari Program Studi Informatika, Universitas Multimedia
                  Nusantara &apos;23. Kami harap Website ini dapat membantu Anda
                  merencanakan perjalanan yang tak terlupakan di ibu kota!
                </p>
                <Confetti />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-20 gap-2">
              <div className="relative">
                <img src={Henry} className="w-full h-auto " />

                <div
                  className="w-full md:w-72 absolute h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[180px] md:focus:h-[140px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-40"
                  tabIndex="0"
                >
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 hover:text-blue-600">
                      <h1 className="font-bold">Henry Salim</h1>
                      <p className="font-extralight">00000079925</p>
                    </div>

                    <div className="flex justify-end p-5 gap-4">
                      <a
                        href="http://github.com/sportapora"
                        target="_blank"
                        className=" text-gray-800 hover:text-blue-600"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/henrysalim-0170b4224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        className=" text-gray-800 hover:text-blue-600"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://www.instagram.com/_henryhenn"
                        target="_blank"
                        className=" text-gray-800 hover:text-blue-600"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden flex flex-col items-center transition-all ease-in-out duration-200"
                    tabIndex="0"
                  >
                    <p className="p-6 text-center text-xs">
                      Panggil aja &quot;Henry&quot; nanti juga nengok. Kalo ga
                      nengok berarti Queue nya lagi banyak.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={Ben} className="w-full h-auto " />

                <div
                  className="w-full md:w-72 absolute h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[180px] md:focus:h-[140px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-40"
                  tabIndex="0"
                >
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 hover:text-blue-600">
                      <h1 className="font-bold">Ben Arief M.</h1>
                      <p className="font-extralight">00000081977</p>
                    </div>

                    <div className="flex justify-end p-5 gap-4">
                      <a
                        href="https://github.com/BenArief"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="http://www.linkedin.com/in/ben-arief-14742b28a"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://www.instagram.com/benarief/?hl=en"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden flex flex-col items-center transition-all ease-in-out duration-200"
                    tabIndex="0"
                  >
                    <p className="p-6 text-center text-xs">
                      Panggilnya &quot;Ben&quot; aja jangan ditambah Ten! nanti
                      bisa berubah jadi pahlawan super.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={Jeo} className="w-full h-auto " />

                <div
                  className="w-full md:w-72 absolute h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[180px] md:focus:h-[140px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-40"
                  tabIndex="0"
                >
                  <div className="grid grid-cols-2 hover:text-blue-600">
                    <div className="px-4 py-2">
                      <h1 className="font-bold">Jennifer Jeo</h1>
                      <p className="font-extralight">00000082259</p>
                    </div>

                    <div className="flex justify-end p-5 gap-4">
                      <a
                        href="https://github.com/Lushkasa"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="http://www.linkedin.com/in/jennifer-jeo-71822328a"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://www.instagram.com/jjeo116/"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden flex flex-col items-center transition-all ease-in-out duration-200"
                    tabIndex="0"
                  >
                    <p className="p-6 text-center text-xs">
                      Panggil aja &quot;Jeo&quot; J nya jangan digganti B nanti
                      bisa auto terbang.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={Maul} className="w-full h-auto " />

                <div
                  className="w-full md:w-72 absolute h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[180px] md:focus:h-[140px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-40"
                  tabIndex="0"
                >
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 hover:text-blue-600">
                      <h1 className="font-bold">Maulidya I.</h1>
                      <p className="font-extralight">00000110172</p>
                    </div>

                    <div className="flex justify-end p-5 gap-4">
                      <a
                        href="http://github.com/mauldynan"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://id.linkedin.com/in/maulidyaisnaini28"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://www.instagram.com/futuresus_"
                        target="_blank"
                        className="social-icon text-gray-800 hover:text-blue-600"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden flex flex-col items-center transition-all ease-in-out duration-200"
                    tabIndex="0"
                  >
                    <p className="p-6 text-center text-xs">
                      Panggil aja &quot;Maul&quot; jinak kok, ga gigit, ga
                      matok, apalagi berbisa [BIG NOOO].{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 p-4 gap-8 "></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
