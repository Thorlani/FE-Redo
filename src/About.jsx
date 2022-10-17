import React, { useEffect } from "react";
import download from "./assets/download.svg";
import ReactGA from "react-ga";
import AdSense from "react-adsense";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <div className="w-full h-fit px-[8%]">
        <AdSense.Google
          client="ca-pub-9515848627350834"
          slot="9754373653"
          style={{ width: "100%", height: 300 }}
          format=""
        />
        <div className="w-full h-fit md:h-[500px] flex flex-col sm:flex-row mt-[50px] mb-[50px]">
          <div className="w-[100%] sm:w-[65%] h-full relative">
            <img
              src={download}
              alt="about me"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-[100%] px-[2%]  sm:w-[35%] h-full flex justify-center items-center">
            <div>
              <h1 className="font-extrabold text-2xl mt-[20px] md:mt-0">
                About Us
              </h1>
              <p className="mb-6">
                This is an Educational site for giving out credible information
                and resources which can help Nigerian law undergraduates.
              </p>
              <p>
                We are using this platform to make our own contribution through
                teachings and giving out valuable information to better the
                lives of Nigerian law undergraduates.
              </p>
            </div>
          </div>
        </div>
        <AdSense.Google
          client="ca-pub-9515848627350834"
          slot="9754373653"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />
        <div className="w-full h-fit px-[12%] mt-3 mb-[50px]">
          <h2 className="font-bold text-xl mb-[20px]">About Tolani Popoola</h2>
          <ul className=" list-disc">
            <li>He is a law student in the University of Lagos.</li>
            <li>He is also a Frontend web developer</li>
          </ul>
          <p className="mt-[40px]">
            You can contact me by sending a mail to: davidthorlani@gmail.com
          </p>
        </div>
      </div>
      <AdSense.Google
        client="ca-pub-9515848627350834"
        slot="9754373653"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </>
  );
};

export default About;
