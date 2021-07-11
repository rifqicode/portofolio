import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation'
import user from '../public/user.jpg'

export default function Home() {
  return (
    <>

      <section className={styles.banner}>
        <div className={styles.container}>
          <div className="">
            <p className="text-black text-4xl font-bold"> Muhammad Rifqi Imam Saputra </p>
            <p className="text-red-500 text-2xl font-bold"> Developer </p>
            <p className="text-md"> 
              I am a Web Developer and Mobile Developer. <br /> Let us work together.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-32">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Profile </p>  
              <p className="text-sm"> Mengenal Secara Singkat </p>  
          </div>

          <div className="grid grid-cols-1 gap-1 text-center">
            <div className="m-2">
              <div className="text-left mx-20">
                <div className="text-center">
                  <Image src={user} alt="alt" height={200} width={200}/>
                </div>
                <p className="text-md text-indent">     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p className="text-md mt-2">     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <section className="bg-gray-100 my-32">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Skill </p>  
              <p className="text-sm"> Kemampuan Bahasa Pemograman </p>  
          </div>

          <div className="grid grid-cols-1 gap-1 text-center">
            <div className="m-2">
              <div className="mx-20">
                  <p className="text-left text-bold text-lg"> Main Language </p>
                  <div className="grid grid-cols-4 text-center">
                    
                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <h2>Documentation &rarr;</h2>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                      <h2>Learn &rarr;</h2>
                      <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>


                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <h2>Documentation &rarr;</h2>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                      <h2>Learn &rarr;</h2>
                      <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>
                  </div>

                  <p className="text-left text-bold text-lg"> Experience </p>
                  <div className="grid grid-cols-4 text-center">
                    
                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <h2>Documentation &rarr;</h2>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                      <h2>Learn &rarr;</h2>
                      <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>


                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <h2>Documentation &rarr;</h2>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                      <h2>Learn &rarr;</h2>
                      <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>
                  </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      
      <section className="my-32">
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


      <section className="my-32 bg-gray-100">
        <div className="mt-2">
          <div className="text-center p-5">
              <p className="text-2xl font-bold"> Portofolio </p>  
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
