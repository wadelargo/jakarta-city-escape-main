import Slogan from "/assets/Sukses_Jakarta_Untuk_Indonesia.png";

export default function Footer() {
  return (
    <div
      className="w-full hidden mt-24 bg-transparent lg:mt-0 lg:absolute bottom-0 shadow-[0_-1px_4px_rgba(0,0,0,0.3)] py-4 gap-16 text-center lg:text-left"
      id="footer"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-extrabold tracking-wide">
            Jakarta<span className="font-normal">CityEscape</span>
          </h1>
          <div className="flex justify-center lg:justify-start">
            <img
              src={Slogan}
              className="w-24"
              alt="Sukses Jakarta untuk Indonesia"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="mb-3 flex flex-col items-center lg:items-start">
            <a href="/" className="peer">
              Home
            </a>
            <div className="animated-underscore peer-hover:w-12"></div>
          </div>
          <div className="mb-3 flex flex-col items-center lg:items-start">
            <a href="/jelajahi" className="peer">
              Jelajahi Jakarta di Sini!
            </a>
            <div className="animated-underscore peer-hover:w-40"></div>
          </div>
          <div className="mb-3 flex flex-col items-center lg:items-start">
            <a href="/about-devs" className="peer">
              About Devs
            </a>
            <div className="animated-underscore peer-hover:w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
