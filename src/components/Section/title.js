import React from "react";

export default function Title({ title, titleDes, className }) {
  return (
    <>
      <div className={`text-center mb-16 ${className}`}>
        <h1 className={`text-3xl font-bold uppercase `}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400  via-teal-400 to-green-400">
            {title || "Title"}
          </span>
        </h1>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {/* {titleDes || "Lorem ipsum, dolor sit amet consectetur"} */}
        </span>
      </div>
    </>
  );
}
