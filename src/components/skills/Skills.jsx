import React, { useState } from "react";
import ProgressBar from "../../chip/ProgressBar";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiMongodb,
  SiPython,
  SiPhp, SiScikitlearn, SiPandas, SiNumpy, SiOracle, SiMysql, SiLatex, 
} from "react-icons/si";
import { GrCode } from "react-icons/gr";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("web");

  const getBackgroundStyle = () => {
    switch (activeTab) {
      case "web":
        return "bg-gradient-to-r from-green-200 to-green-300";
      case "databases":
        return "bg-gradient-to-r from-green-500 to-teal-500";
      case "data":
        return "bg-gradient-to-r from-purple-700 to-purple-300";
      case "programming":
        return "bg-gradient-to-r from-red-500 to-yellow-500";
      case "analysis":
        return "bg-gradient-to-r from-gray-500 to-blue-800";
      case "other":
        return "bg-gradient-to-r from-orange-500 to-red-600";
      default:
        return "bg-gray-100";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "web":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={60} />
            <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={55} />
            <ProgressBar logo={<SiJavascript />} name={"JavaScript"} value={45} />
          </div>
        );
      case "databases":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={50} />
            <ProgressBar logo={<SiOracle />} name={"Oracle"} value={50} />
            <ProgressBar logo={<SiMysql />} name={"MySQL"} value={50} />
          </div>
        );
      case "data":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<SiNumpy />} name={"NumPy"} value={53} />
            <ProgressBar logo={<SiPandas />} name={"Pandas"} value={52} />
            <ProgressBar logo={<SiScikitlearn />} name={"Scikit-learn"} value={50} />
          </div>
        );
      case "programming":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<SiPython />} name={"Python"} value={60} />
            <ProgressBar logo={<GrCode />} name={"UML"} value={80} />
            <ProgressBar logo={<GrCode />} name={"SQL, PL/SQL"} value={55} />
          </div>
        );
      case "analysis":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<GrCode />} name={"Analyse des Données"} value={60} />
            <ProgressBar logo={<GrCode />} name={"Data Mining"} value={55} />
            <ProgressBar logo={<GrCode />} name={"Big Data"} value={50} />
          </div>
        );
      case "other":
        return (
          <div className="space-y-4">
            <ProgressBar logo={<GrCode />} name={"Business Intelligence"} value={55} />
            <ProgressBar logo={<GrCode />} name={"SSIS"} value={50} />
            <ProgressBar logo={<GrCode />} name={"SSRS"} value={50} />
            <ProgressBar logo={<SiLatex />} name={"LaTeX"} value={90} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="skills" className={`py-16 ${getBackgroundStyle()} transition-all duration-500`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-semibold text-gray-900">
            Mes Compétences
          </h3>
          <p className="text-black-200 mt-2">
            Sélectionnez une catégorie pour voir mes compétences.
          </p>
        </div>

        <div className="tabs flex justify-center space-x-4 mb-8">
          <button
            className={`tab ${activeTab === "web" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("web")}
          >
            Développement Web
          </button>
          <button
            className={`tab ${activeTab === "databases" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("databases")}
          >
            Bases de Données
          </button>
          <button
            className={`tab ${activeTab === "data" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("data")}
          >
            Science des Données
          </button>
          <button
            className={`tab ${activeTab === "programming" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("programming")}
          >
            Langages de Programmation
          </button>
          <button
            className={`tab ${activeTab === "analysis" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("analysis")}
          >
            Analyse de Données
          </button>
          <button
            className={`tab ${activeTab === "other" ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab("other")}
          >
            Autres Compétences
          </button>
        </div>

        <div className="tab-content text-white">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Skills;
