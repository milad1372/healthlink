/* Landing page */
import { Link } from "react-router-dom";
import LandingNavBar from "../../components/LandingNavBar"; // nav bar
import HomeImage from "../../img/hllink.png";
import { useState } from "react";
import { FaLungs, FaEye, FaHeart } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const sections = [
  {
    image: FaLungs,
    text: "Breathing",
  },
  {
    image: FaHeart,
    text: "Heart",
  },
  {
    text: "Mental Health",
    image: GiBrain,
  },
  {
    text: "Eye care",
    image: FaEye,
  },
];

const Landing = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <LandingNavBar />
      {selected ? (
        <section className="text-gray-700 body-font font-fontPro max-w-6xl m-auto">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-5xl font-medium text-gray-900">
                Health Link{" "}
              </h1>
              <h1 className="text-5xl mb-8 font-medium text-gray-900">
                Consultation
              </h1>

              <div className="bg-green-400 text-purple-900 text-xs mb-2">
                -------------------------------------------
              </div>
              <p className="leading-relaxed text-3xl pt-2">
                Have consult with Pros{" "}
              </p>
              <p className="leading-relaxed text-3xl mb-16">
                {" "}
                wherever you are, and Confidencial
              </p>
              <div className="flex justify-center">
                <Link
                  className="inline-flex text-white bg-green-400 border-0 py-3 px-9 focus:outline-none hover:bg-purple-900 rounded-full text-xl"
                  to="/register"
                >
                  Get Start
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="object-cover object-center rounded"
                src={HomeImage}
                alt="logo"
              />
            </div>
          </div>
        </section>
      ) : (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div>
            <h1 className="text-2xl font-bold">Select what your issue is</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {sections.map((item) => {
              const Icon = item.image;
              return (
                <a
                  className="flex h-full max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-gray-200 p-4 text-black hover:bg-gray-400 transition-all"
                  // href={`/user/${item.text}`}
                  // href=""
                  // target="_blank"
                  onClick={() => {
                    setSelected(true);
                    localStorage.setItem("section", item.text);
                  }}
                  key={item.text}
                >
                  <Icon size={"50%"} />
                  <h3 className="text-center text-2xl font-bold">
                    {item.text}
                  </h3>
                  {/* <div className="text-lg">
                    Just the basics - Everything you need to know to set up your
                    database and authentication.
                  </div> */}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
