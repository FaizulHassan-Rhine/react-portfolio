import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import Icon from "../../../assets/images/work.webp";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import CertificateModal from "./certificateModal";

export default function WorkExperience({ work }) {
  const {
    description,
    endDate,
    startDate,
    workTitle,
    position,
    location,
    certificates,
  } = work || {};
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const [contents, setContent] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    setContent(certificates);
  };

  return (
    <>
      <div className="p-6 flex items-center">
        <div className=" mr-6 hidden lg:block overflow-hidden">
          <Zoom>
            <img src={Icon} alt="work_ico" className="w-64" />
          </Zoom>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <div className="overflow-hidden w-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h2 className="font-medium text-lg ">
                    <Fade left>{workTitle}</Fade>
                  </h2>
                  <div className="text-gray-500 dark:text-gray-200 text-sm">
                    <Fade left delay={150}>
                      <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="bx bxs-briefcase-alt-2"></i> {position}
                        </span>
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="fa-solid fa-location-dot text-xs"></i>{" "}
                          {location}
                        </span>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="text-gray-500 dark:text-gray-200 text-xs mt-1 md:mt-0">
                  <Fade
                    left={width < 768 ? true : false}
                    right={width > 768 ? true : false}
                    duration={1300}
                  >
                    <div className=" flex items-center ">
                      <div className="mr-1">
                        <i className="fa-regular fa-calendar-days text-xs"></i>
                      </div>
                      <div>{startDate}</div>
                      <div className="mx-1"> - </div>
                      <div>{endDate}</div>
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
            <Fade left delay={150}>
              <p className="mt-3 text-base">
                Job Responsibility
              </p>
            </Fade>
            <Fade up delay={150}>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                <ul>
                  <li><i class="fa-solid mr-2 fa-arrows-to-dot"></i>Maintain and improve website</li>
                  <li><i class="fa-solid mr-2 fa-arrows-to-dot"></i>Transform Web designs into front-end code with HTML, CSS, and
                    JavaScript</li>
                  <li><i class="fa-solid mr-2 fa-arrows-to-dot"></i>Write high-quality, scalable, and reusable code</li>
                  <li><i class="fa-solid mr-2 fa-arrows-to-dot"></i>Design mobile-based features</li>
                  <li><i class="fa-solid mr-2 fa-arrows-to-dot"></i>Collaborate with back-end developers and web designers to improve
                    usability</li>
                  <li> <i class="fa-solid mr-2 fa-arrows-to-dot"></i>Debug errors, troubleshoot issues, and perform routine performance
                    optimizations</li>
                </ul>
              </div>

            </Fade>

          </div>
        </div>
      </div>

      <CertificateModal
        contents={contents}
        open={isOpen}
        setOpen={setOpen}
        handleOpen={handleOpen}
      />
    </>
  );
}
