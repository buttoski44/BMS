import { Carasoul } from "../../components/carasoul/carasoul.component";
import { Features } from "../../components/features/features.component";
import { Moto } from "../../components/moto/moto.component";
import { HomeEvents } from "../../components/home-events/home-events.component";
import { Footer } from "../../components/footer/footer.component";
import Cheveron from "../../assets/chevron.png";
import { useEffect, useState } from "react";

export const Home = ({ ok }) => {
  const [scrol, setScrol] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrol === false && window.pageYOffset > 350) {
        setScrol(true);
      } else if (scrol === true && window.pageYOffset < 350) {
        setScrol(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handlOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Carasoul />
      {!ok && (
        <>
          <Features />
          <Moto onScroll={() => setScrol(!scrol)} />
          <HomeEvents />
          <Footer />
          {scrol && (
            <img
              src={Cheveron}
              onClick={handlOnClick}
              className="w-10 h-10 p-3 fixed bottom-20 bg-white right-14 shadow-xl rounded-[50%] cheveron hover:cursor-pointer"
            />
          )}
        </>
      )}
    </>
  );
};
