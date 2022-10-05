import React, { useEffect } from "react";
import axios from "axios";
import avatar from "../assets/avatar.jpeg";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import ReactGA from "react-ga";

const Contract = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const { data } = useQuery(
    "contract-content",
    () => axios.get("https://be-law-pq.vercel.app/api/getContract"),
    {
      staleTime: Infinity,
    }
  );

  const postContent = data?.data;

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...Read More";
    } else {
      return str;
    }
  };

  const content = postContent?.map((item) => {
    return (
      <div key={item._id} className="w-full h-fit p-5 shadow-xl">
        <Link to={`/contract/read/${item._id}`}>
          <div className="cursor-pointer">
            <h1 className="font-bold text-2xl md:text-4xl mb-[20px]">
              {item.question}
            </h1>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{
                __html: truncateString(item.answer, 205),
              }}
            />
            <div className="flex items-center justify-between max-w-[250px] cursor-text">
              <img
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-[40%]"
              />
              <div className="flex flex-col text-xs md:text-sm">
                <span>Author</span>
                <span className="font-bold text-sm md:text-base">Thorlani</span>
              </div>
              <div className="flex flex-col text-xs md:text-sm">
                <span>Date</span>
                <span className="font-bold text-sm md:text-base">
                  {item.date.slice(0, 10)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="w-full h-fit px-[8%] py-[4%] grid gap-8">
        <div className="w-full h-fit">
          <h1 className="mt-[30px] font-medium md:font-bold lg:font-extrabold text-6xl md:text-7xl text-left">
            Checkout free answered Contract Questions
          </h1>
          <p className="mt-[30px] font-normal leading-[3.25rem] text-xl md:text-3xl md:leading-[4.25rem] mb-[50px]">
            Are you a Law student? This is the right place for you to learn how
            to answer law questions and the appropriate standard to follow when
            answering your <span>Contract Exam Questions</span>
          </p>
        </div>
        {content}
      </div>
    </>
  );
};

export default Contract;
