import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactGA from "react-ga";
import AdSense from "react-adsense";

const ConsRead = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://be-law-pq.vercel.app/api/getConstitutional/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full h-fit px-[8%] py-[4%] grid gap-8">
        <div className="w-full h-fit p-5 shadow-xl">
          <h1 className="px-[2%] mt-[30px] font-bold  lg:font-extrabold text-4xl md:text-7xl text-left">
            {data.question}
          </h1>
          <div className="px-[2%] flex items-center mt-[15px]">
            <div className="flex flex-row items-center text-xs md:text-sm">
              <span>Author: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                Thorlani
              </span>
            </div>
            <div className="ml-12 flex flex-row items-center text-xs md:text-sm">
              <span>Date: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                2020-08-26
              </span>
            </div>
          </div>
          <AdSense.Google
            client="ca-pub-9515848627350834"
            slot="9754373653"
            style={{ display: "block" }}
            layout="in-article"
            format="fluid"
          />
          <div
            className="px-[2%] mt-[50px] md:mt-[70px] lg:mt-[100px]"
            dangerouslySetInnerHTML={{ __html: data.answer }}
          ></div>
          <p className="px-[2%] my-[20px] font-thin text-sm">
            <i>
              <span className="underline">Note: </span>This answer should only
              be taken as a guide to prepare for your exams or to learn.
            </i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsRead;
