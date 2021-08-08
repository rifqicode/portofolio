import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import user from '../public/user.jpg'

// component
import Skill from '../components/Skill';

export default function Home() {

  return (
    <>

      <section className={styles.banner}>
        <div className={styles.container}>
          <div className="">
            <p className="text-4xl font-bold"> Muhammad Rifqi Imam Saputra </p>
            {/* <p className="text-2xl font-semibold"> Developer </p> */}
            <p className="text-md"> 
              I am a Web Developer and Mobile Developer. <br /> Let us work together.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="container mx-auto my-32">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Profile </p>  
              <p className="text-sm"> Mengenal Secara Singkat </p>  
          </div>

          <div className="grid grid-cols-2 gap-1">
            
            <div className="m-auto">
              <p className="text-justify text-md text-bold text-lg border-b-2 mb-2">     
                Muhammad Rifqi Imam Saputra
              </p>

              <p className="text-justify text-md">     
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <button className="border-2 rounded-lg p-2 bg-yellow-500 text-white font-bold mt-5"> Download CV </button>  
              <button className="border-2 rounded-lg p-2 bg-blue-500 text-white font-bold mt-5"> Contact Me </button>  
            </div> 

            <div className="m-2">
              <div className="text-left mx-20">
                <div className="text-center">
                  <Image src={user} alt="alt" className="rounded-3xl" height={400} width={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section className="bg-gray-200 my-32">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Skill </p>  
              <p className="text-sm"> Kemampuan Bahasa Pemograman </p>  
          </div>
        </div>

        <Skill />
      </section>

      <section className="my-32">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Portofolio </p>  
              <p className="text-sm"> Project yang pernah dikerjakan </p>  
          </div>

          <div className="grid grid-cols-1 gap-1 text-center">
            <div className="m-2">
              <div className="mx-20">
                <div className="grid grid-cols-3 text-center">
                  <a href="https://nextjs.org/learn" className={styles.portofolio}>
                    <h2> Sertifikat 1 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>

                  <a href="https://nextjs.org/learn" className={styles.portofolio}>
                    <h2> Sertifikat 2 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>

                  <a href="https://nextjs.org/learn" className={styles.portofolio}>
                    <h2> Sertifikat 3 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section className="my-32  bg-gray-100">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Sertifikat </p>  
              <p className="text-sm"> List Sertifikat yang dimiliki </p>  
          </div>

          <div className="grid grid-cols-1 gap-1 text-center">
            <div className="m-2">
              <div className="mx-20">
                <div className="grid grid-cols-1 text-center">
                  <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2> Sertifikat 1 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>

                  <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2> Sertifikat 2 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>

                  <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2> Sertifikat 3 </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>      
    </>
  )
}
