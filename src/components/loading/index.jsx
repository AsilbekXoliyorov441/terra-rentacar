import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const totalDots = 12;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalDots);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-40 h-40">
      <div className="pl relative w-full h-full flex items-center justify-center">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`pl__dot absolute w-4 h-4 rounded-full transition-all duration-300 ${
              i === activeIndex ||
              (i + 1) % totalDots === activeIndex ||
              (i + 2) % totalDots === activeIndex
                ? "bg-red-500 scale-125"
                : "bg-red-900 opacity-50"
            }`}
            style={{
              transform: `rotate(${
                (i * 360) / totalDots
              }deg) translateY(-50px)`,
            }}
          />
        ))}
        <div className="pl__text absolute flex items-center justify-center">
          <img
            className="logoLoading w-20"
            src="https://terra-rentacar.netlify.app/assets/logoTerra5-2akSFrzj.png"
            alt="TERRA rent a car"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
