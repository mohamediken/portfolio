import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiMongodb,
  SiJava,
  SiPython,
  SiPhp, SiScikitlearn, SiPandas, SiNumpy, SiOracle, SiMysql, SiLatex, SiSpringboot,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";

const Skills = ({ darkMode }) => {
  return (
      <div id="skills">
        <div className="container m-auto mt-16">
          <div data-aos="fade-up" className="relative mb-5">
            <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
              Mes Competences
            </h3>
            <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
          </div>
          <div className="flex md:flex-col">
            <div className="left flex-1 w-full">
              <p data-aos="fade-up" className="text-gray-700 font-medium w-[100%]">
                Voici mes compétences :
              </p>
              <div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
                <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                  <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={60} />
                  <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={55} />
                  <ProgressBar logo={<SiJavascript />} name={"JavaScript"} value={45} />
                  <ProgressBar logo={<SiPython />} name={"Python"} value={60} />
                  <ProgressBar logo={<SiJava />} name={"Java"} value={50} />
                  <ProgressBar logo={<GrCode/>} name={"SQL, PL/SQL"} value={55} />
                  <ProgressBar logo={<GrCode />} name={"Langage de modélisation UML"} value={80} />
                  <ProgressBar logo={<SiSpringboot />} name={"Spring Boot"} value={45} />
                  <ProgressBar logo={<SiLatex />} name={"Latex"} value={90} />
                  <ProgressBar logo={<GrCode />} name={"Word,PowerPoint,Excel"} value={90} />


                </div>
              </div>

            </div>

            <div className="left flex-1 w-full">

              <div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
                <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                  <ProgressBar logo={<GrCode />} name={"Analyse des données"} value={60} />
                  <ProgressBar logo={<GrCode />} name={"Data Mining"} value={55} />
                  <ProgressBar logo={<GrCode />} name={"Machine Learning"} value={50} />
                  <ProgressBar logo={<GrCode />} name={"Deep Learning"} value={50} />
                  <ProgressBar logo={<SiScikitlearn />} name={"Scikit Learn "} value={60} />
                  <ProgressBar logo={<SiPandas />} name={"Pandas"} value={52} />
                  <ProgressBar logo={<SiNumpy/>} name={"Numpy"} value={53} />
                  <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={50} />
                  <ProgressBar logo={<SiOracle />} name={"Oracle"} value={50} />
                  <ProgressBar logo={<SiMysql />} name={"MySQL"} value={50} />


                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
  );
};

export default Skills;
