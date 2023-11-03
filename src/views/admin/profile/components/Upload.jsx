import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import React from "react";

const Upload = () => {
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
          <MdFileUpload className="text-[80px] text-blue-600 dark:text-white" />
          <h4 className="text-[20px] font-[600] text-blue-600 dark:text-white">
          Upload Your CV/Resume
          </h4>
          <p className="mt-2 text-[15px] font-[400] text-gray-600">
          PDF, DOCX and PNG files are allowed
          </p>
        </button>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-center text-[25px] font-[700] leading-9 text-gray-800 dark:text-white">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
        Uploading a CV can get your more opportunities 
        and chances to move to the next level of being 
        employed as an Intern
        </p>
        <button
          href=" "
          className="linear mt-4 flex items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-base font-[400] text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Upload CV Now
        </button>
      </div>
    </Card>
  );
};

export default Upload;
