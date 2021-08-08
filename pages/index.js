import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Project from "../components/Project";

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
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
                    Depok, Jawa Barat, Indonesia
                  </div>
                  <div className="mb-2 text-gray-700 mt-5">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Web Developer & Android Developer - Freelance 
                  </div>
                  <div className="mb-2 text-gray-700 mt-2">
                    <i className="fas fa-envelope mr-2 text-lg text-gray-400"></i>
                    muhammadrifqi.tb@gmail.com 
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-graduation-cap mr-2 text-lg text-gray-400"></i>
                    SMK TARUNA BHAKTI
                  </div>

                  <div className="flex flex-wrap justify-center mt-5">
                    <div className="bg-blue-500 text-white mx-2 rounded-lg">
                      <label className="font-light text-sm p-2"> Teamwork </label>
                    </div>
                    
                    <div className="bg-blue-500 text-white mx-2 rounded-lg">
                      <label className="font-light text-sm p-2"> Creative Work </label>
                    </div>

                    <div className="bg-blue-500 text-white mx-2 rounded-lg">
                      <label className="font-light text-sm p-2"> Motivated </label>
                    </div>
                    
                    <div className="bg-blue-500 text-white mx-2 rounded-lg">
                      <label className="font-light text-sm p-2"> Fast learning </label>
                    </div>
                  </div>
                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800 text-center" style={{textIndent: '50px'}}>
                        I am an experienced programmer with 3 year working experience as web developer and 1 year experience in develop mobile app.
                        I am currently working as freelance and currently looking for a job, if u interest you can contact me via 
                        <a href="https://wa.me/?phone=082123073107" className="text-purple-600"> Whatsapp </a> or 
                        <a href="mailto:muhammadrifqi.tb@gmail.com" className="text-purple-600"> Email </a>
                        Thanks ..
                      </p>
                    </div>
                  </div>
                </div>

                
                <div className="flex flex-wrap justify-center bg-gray-100 text-center">
                  <div className="p-5">
                    <p className="text-lg font-semibold"> 3 year </p>
                    <p className="text-lg font-light"> Experience </p>
                  </div>
                </div>

                <div className="text-center mt-1 bg-gray-100 border-t border-gray-300">
                  <Skill />
                </div>

                <div className="text-center bg-gray-100 border-t border-gray-300">
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
