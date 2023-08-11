import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../.../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About() {
  return (
    <div className=" flex items-center flex-wrap relative">

      <div className="containerCustom gap overflow-hidden">

        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-24">
            <Fade up cascade>
              <h3>Hello! I Am Faizul Hassan Rhine.</h3>{" "}
              <p className="text-sm ">
                A passionate and dedicated Front-end Web Developer based in (Dhaka,Bangladesh). I hold a B.Sc. in Engineering (Computer Science and Engineering) from Bangladesh University of Business and Technology, reflecting my commitment to education and technical expertise. With a recent completion of a comprehensive Web Development course, I've honed my skills and achieved proficiency in various aspects of front-end development.
                <br></br>
                My journey into the world of technology began with a strong foundation in HTML5, CSS3, and JavaScript. As I embarked on my educational journey, I further expanded my skill set to include technologies like React.js,Next.js,Redux,TailwindCSS,Node.js etc. This blend of technologies enables me to craft interactive and visually appealing web experiences that engage users and enhance their online interactions.
              </p>
              <div className="mt-5 text-sm">
                <Fade up>
                  <Info name="email" details="faizulhassan.rien@gmail.com" />
                  <Info name="phone" details="+8801845845789" />
                  <Info name="address" details="Dhaka, Bangladesh" />
                  <Info name="status" details="Not Available" />
                </Fade>
              </div>
            </Fade>
          </div>
          {/* <Zoom>
            <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <img src={picture} alt="" className="w-full" />
            </div>
          </Zoom> */}
        </div>
      </div>
    </div >
  );
}
