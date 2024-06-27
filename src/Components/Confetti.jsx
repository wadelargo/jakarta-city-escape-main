import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import useSound from "use-sound";
import confettiSfx from "/sound/ConfettiSound.mp3";

function ConfettiButton() {
  let currAppreciation = Number(localStorage.getItem("appreciation")) ?? 0;
  const [play] = useSound(confettiSfx);
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleButtonClick = () => {
    play();
    setConfettiActive(true);
    localStorage.setItem("appreciation", (currAppreciation += 1));
    currAppreciation = localStorage.getItem("appreciation");
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000);
  };

  useEffect(() => {
    document.querySelector("#count").innerHTML = currAppreciation;
  }, [currAppreciation]);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-6 mt-10">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:ring-2 ring-black"
          onClick={handleButtonClick}
        >
          Appreciation
        </button>

        <div className="flex flex-row items-center gap-2">
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
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <p id="count"></p>
        </div>
      </div>
      <Confetti active={isConfettiActive} config={config} />
    </div>
  );
}

export default ConfettiButton;
