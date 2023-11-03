import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "components/card";


const cardShadow = {
  color:
  "0px 3px 2px 0px rgba(0, 0, 0, 0.12), 2px 3px 4px 0px rgba(0, 0, 0, 0.12)"
};

const CourseCard = ({ title, intro, level, image, extra }) => {
  const [heart, setHeart] = useState(true);
  return (
    <div style={{boxShadow : cardShadow.color, borderRadius: "10px"}}>
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-sm 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-1 right-3 flex items-center justify-center rounded-full bg-white p-1 text-blue-600 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-[20px] font-[700] text-gray-900 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-[14px] font-[400] text-gray-700 md:mt-2">
              By {intro}{" "}
            </p>
          </div>

         
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-[14px] font-[400] text-blue-600 dark:text-white">
              Level: {level} <span></span>
            </p>
          </div>
          <button
            href=""
            className="linear rounded-xl bg-blue-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Start Course
          </button>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default CourseCard;
