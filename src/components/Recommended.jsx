import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "./useAnalytics";
import axios from "axios";
import avatar from "../assets/avatar.jpeg";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const Recommended = () => {
  const gaEventTracker = useAnalyticsEventTracker("Location");
  const location = useLocation();
  const { data: contractData } = useQuery(
    "contract-content",
    () => axios.get("https://be-law-pq.vercel.app/api/getContract"),
    {
      staleTime: Infinity,
    }
  );

  const contractContent = contractData?.data;

  const truncateString1 = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...Read More";
    } else {
      return str;
    }
  };

  const contract = contractContent?.slice(0, 5)?.map((item) => {
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
                __html: truncateString1(item.answer, 205),
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

  const { data: legalData } = useQuery(
    "legal-content",
    () => axios.get("https://be-law-pq.vercel.app/api/getLegal"),
    {
      staleTime: Infinity,
    }
  );

  const legalContent = legalData?.data;

  const truncateString2 = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...Read More";
    } else {
      return str;
    }
  };

  const legal = legalContent?.slice(0, 5)?.map((item) => {
    return (
      <div key={item._id} className="w-full h-fit p-5 shadow-xl">
        <Link to={`/legal/read/${item._id}`}>
          <div className="cursor-pointer">
            <h1 className="font-bold text-2xl md:text-4xl mb-[20px]">
              {item.question}
            </h1>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{
                __html: truncateString2(item.answer, 205),
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

  const { data: constitutionalData } = useQuery(
    "constitutional-content",
    () => axios.get("https://be-law-pq.vercel.app/api/getConstitutional"),
    {
      staleTime: Infinity,
    }
  );

  const constitutionalContent = constitutionalData?.data;
  const truncateString3 = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...Read More";
    } else {
      return str;
    }
  };

  const constitutional = constitutionalContent?.slice(0, 5)?.map((item) => {
    return (
      <div key={item._id} className="w-full h-fit p-5 shadow-xl">
        <Link to={`/constitutional/read/${item._id}`}>
          <div className="cursor-pointer">
            <h1 className="font-bold text-2xl md:text-4xl mb-[20px]">
              {item.question}
            </h1>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{
                __html: truncateString3(item.answer, 205),
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
      <div className="my-[50px] mx-[4%] text-center">
        <h1 className="mb-[10px] font-medium text-2xl lg:hidden">
          Available PQ
        </h1>
        <p className="mb-[30px] font-thin text-sm">
          <i>
            <span className="underline">Note</span> answers to each courses are
            dropped every friday.
          </i>
        </p>
        <ul className="mb-[20px] lg:hidden">
          <li className="mb-[15px] font-medium text-l text-[blue] underline">
            <Link to={"/contract"} onClick={gaEventTracker("Contract")}>
              Law of Contract
            </Link>
          </li>
          <li className="mb-[15px] font-medium text-l text-[blue] underline">
            <Link to={"/legal"} onClick={gaEventTracker("Legal system")}>
              Legal System
            </Link>
          </li>
          <li className="font-medium text-l text-[blue] underline">
            <Link to={"/constitutional"} onClick={gaEventTracker("Cons law")}>
              Constitutional Law
            </Link>
          </li>
        </ul>
      </div>
      {location.pathname === "/" && (
        <>
          <p className="my-[50px] mx-[4%] text-left">Editor's choices</p>
          <div className="my-[20px] mx-[4%] text-left">
            <p className="font-bold text-xl border-b-2 border-black mb-5">
              Contract
            </p>
            {contract}
          </div>
          <div className="my-[50px] mx-[4%] text-left">
            <p className="font-bold text-xl border-b-2 border-black mb-5">
              Legal
            </p>
            {legal}
          </div>
          <div className="my-[50px] mx-[4%] text-left">
            <p className="font-bold text-xl border-b-2 border-black mb-5">
              Constitutional
            </p>
            {constitutional}
          </div>
        </>
      )}
    </>
  );
};

export default Recommended;
