/* Landing page */
import { Link } from "react-router-dom";
import LandingNavBar from "../../components/LandingNavBar"; // nav bar
import HomeImage from "../../img/hllink.png";
const Landing = () => {
  return (
    <div>
      <LandingNavBar />
      <section className="text-gray-700 body-font font-fontPro max-w-6xl m-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-5xl font-medium text-gray-900">Health Link </h1>
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
    </div>
  );
};

export default Landing;
