import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skill from "../components/Skill";

import Image from "next/image"
import ProfilePicture from "../assets/img/team-2-800x800.jpg"


export default function Home() {
  return (
    <>
      <Navbar transparent />

      <main className="profile-page">

        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
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
                
                <div className="text-center mt-16">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Muhammad Rifqi Imam Saputra
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
                    Depok, Jawa Barat, Indonesia
                  </div>
                  <div className="mb-2 text-gray-700 mt-5">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Web Developer & Android Developer - Freelance 
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
                    Smk Taruna Bhakti
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                    </div>
                  </div>
                </div>

                
                <div className="flex flex-wrap justify-center bg-gray-100 text-center">
                  <div className="p-5">
                    <p className="text-lg font-semibold"> 3 year </p>
                    <p className="text-lg font-light"> Experience </p>
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-semibold"> 15 </p>
                    <p className="text-lg font-light"> Project </p>
                  </div>
                </div>

                <div className="text-center mt-0 bg-gray-200 border-t border-gray-300">
                  <p className="text-lg font-light mt-2"> SKILL </p>
                  <Skill />
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
