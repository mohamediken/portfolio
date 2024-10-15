import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Work = () => {
  const projects = [
    {
      title: "Final Year Project: Mask Detection",
      designation: "Deep Learning",
      description:
        "• Deep Learning with CNN.\n• Data preprocessing and exploration.\n• Implementation of binary classification (no mask or mask).",
      link: "https://github.com/mohamediken/Gestion-de-laboratoire-de-recherche",
    },
    {
      title: "Research Lab Management",
      designation: "Web Application",
      description: "• Spring Boot.\n• CSS, HTML, MySQL, and UML.",
      link: "https://github.com/mohamediken/Gestion-de-laboratoire-de-recherche",
    },
    {
      title: "SMS Spam Detection",
      designation: "Machine Learning",
      description:
        "• Machine Learning: Random Forest, Decision Tree, and SVM.\n• Preparation, validation, and splitting the dataset for the prediction task.\n• Implementation of binary classification (spam or ham).\n• Use of the Python Streamlit framework.",
      link: "https://github.com/mohamediken/D-tection-de-spam-SMS-en-utilisant-des-techniques-d-apprentissage-automatique",
    },
    {
      title: "Intrusion Detection Systems",
      designation: "Security System",
      description:
        "• Machine Learning: SVM, KNN, and Decision Tree.\n• Implementation of binary classification (Normal or Attack).\n• Use of Flask, HTML, and CSS framework.",
      link: "https://github.com/mohamediken/D-tection-de-spam-SMS-en-utilisant-des-techniques-d-apprentissage-automatique",
    },
    {
      title: "Speaker Recognition Using Deep Learning Algorithms",
      designation: "Audio Processing",
      description:
        "• Libraries: TensorFlow and Keras.\n• Audio preprocessing: normalization, FFT, and windowing.\n• Training CNNs for voice recognition.",
      link: "https://github.com/mohamediken/Speaker-Recognition-Using-Deep-Learning",
    },
    {
      title: "ETL with SSIS for a Recommendation System",
      designation: "Data Engineering",
      description:
        "• Design and implementation of complete ETL flows using SSIS.\n• Data extraction from relational databases and CSV files.\n• Data transformation for cleaning, normalizing, and enriching it for analysis.\n• Loading processed data into a data warehouse tailored for a recommendation system.",
      link: "https://github.com/mohamediken/ETL-with-SSIS",
    },
  ];

  return (
    <div id="projects" className="bg-green-200 py-10">
      <div className="container m-auto">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5 text-center">
          <h3 className="text-4xl font-extrabold text-gray-800">My Projects</h3>
          <p className="text-gray-600 font-medium mt-3">Here are some of my projects..</p>
        </div>
        {/* card */}
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-xs w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden m-4"
            >
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-gray-800">{project.title}</h1>
                  <span className="text-sm text-gray-500 ml-4">{project.designation}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-center py-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-white px-4 py-2 rounded-b-lg transition duration-300 hover:bg-yellow-500"
                >
                  <AiOutlineGithub className="inline-block mr-2" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
