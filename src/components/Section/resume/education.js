import React from "react";
import { Fade, Zoom } from "react-reveal";
import Icon from "../../../assets/images/university.png";
import useWindowDimensions from "../../../hook/getWindowDimensions";

export default function Education({ education }) {
  const {
    description,
    endDate,
    startDate,
    educationTitle,
    position,
    location,
  } = education || {};
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="p-6 flex items-center">
        <div className=" mr-6 hidden lg:block overflow-hidden">
          <Zoom>
            <img src={Icon} alt="work_ico" className="w-64" />
          </Zoom>
        </div>
        <div className="w-full">
          <div className="flex ">
            <div className="overflow-hidden w-full">
              <div className="flex flex-col ">
                <div>
                  <h2 className="font-medium text-lg ">
                    <Fade left>{educationTitle}</Fade>
                  </h2>
                  <div className="text-gray-500 dark:text-gray-200 text-sm">
                    <Fade left delay={150}>
                      <div className="flex items-start flex-col gap-1 ">
                        <span className="inline-flex items-center  capitalize gap-1">
                          <i className="fas fa-graduation-cap text-xs"></i> {position}
                        </span>
                        <span className="inline-flex items-center mt-5 capitalize gap-2">
                          <i className="fa-solid  fa-location-dot text-xs"></i>{" "}
                          {location}
                        </span>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="text-gray-500 dark:text-gray-200 text-xs mt-1 md:mt-0">
                  <Fade left

                  >
                    <div className=" flex items-center ">
                      <div className="mr-2 mt-1">
                        <i className="fa-regular fa-calendar-days text-xs"></i>
                      </div>
                      <div className="pt-1 text-sm">{startDate} - {endDate}</div>

                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Fade up>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
