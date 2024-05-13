import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Work from "../components/Work";
import Biodata from "../components/Biodata";

import Image from "next/image"
import ProfilePicture from "../assets/img/avatar.jpg"

export default function Home() {
  return (
    <>
      <Navbar transparent />

      <main className="profile-page">

        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <div className="h-auto -m-16 -ml-20 lg:-ml-16">
                        <Image
                          className="shadow-xl rounded-full align-middle border-none absolute"
                          src={ProfilePicture}
                          alt="..." 
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Biodata />

                <div className="text-center mt-1">
                  <Skill />
                </div>

                
                <div className="text-center mt-1 mb-5 bg-gray-100 border-t border-gray-300">
                  <hr></hr>
                  <br></br>
                  <p className="font-bold my-1 text-lg"> My work experience </p>

                  <Work />
                </div>

                <div className="text-center">
                  <p className="font-bold my-1 text-lg"> Personal Project </p>

                  <Project />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
