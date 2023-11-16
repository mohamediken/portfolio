import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const WorkCard = () => {

  return (
    <>


          <div
            className="flex flex-col justify-center items-center gap-8 max-w-screen-xl mx-auto"
          >

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-4 rounded-lg w-[600px]">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Projet de fin d’étude de licence: détection de masque en utilisant les techniques de l’intelligence artificielle                </h1>
                  <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  • Deep Learning avec CNN.<br></br>
                  • Prétraitement des données et exploration.<br></br>
                  • Réalisation d’une classification binaire (no mask ou mask).
                  </span>

                  <a
                      href="https://github.com/mohamediken/Gestion-de-laboratoire-de-recherche"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                    >
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Code</p>
                </a>
      
              </div>


            <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-4 rounded-lg w-[600px]">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Gestion de laboratoire de recherche</h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                • Spring Boot pour . <br></br>
                • CSS, HTML, MySQL, et UML
                </span>

                <a
                    href="https://github.com/mohamediken/Gestion-de-laboratoire-de-recherche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                 <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                 <p className="text-black">Code</p>
               </a>
      
            </div>
          
          
          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-4 rounded-lg w-[600px]">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Détection de spam SMS</h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                • Machine Learning: Random Forest, Arbre de décision et SVM.<br></br>
                • Préparation, validation et split le dataset pour la tâche de prédiction.<br></br>
                • Réalisation d’une classification binaire (spam ou ham).<br></br>
                • Utilisation du framework Python Streamlit.
                </span>

                <a
                    href="https://github.com/mohamediken/D-tection-de-spam-SMS-en-utilisant-des-techniques-d-apprentissage-automatique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                 <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                 <p className="text-black">Code</p>
               </a>
      
          </div>

          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-4 rounded-lg w-[600px]">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Systèmes de détection d'intrusion</h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                • Machine Learning: SVM, KNN et Arbre de décision. <br></br>
                • Réalisation d’une classification binaire (Normal ou Attack).<br></br>
                • Utilisation framework Flask, HTML, CSS.

                </span>

                <a
                    href="https://github.com/mohamediken/D-tection-de-spam-SMS-en-utilisant-des-techniques-d-apprentissage-automatique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                 <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                 <p className="text-black">Code</p>
               </a>
      
          </div>

          </div>


          

          

    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
