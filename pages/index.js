import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation'
import user from '../public/user.jpg'
import php from '../public/skill/php.jpg'
import js from '../public/skill/js.png'
import python from '../public/skill/python.png'
import java from '../public/skill/java.jpg'
import css from '../public/skill/css.png'

import laravel from '../public/skill/laravel.png'
import symfony from '../public/skill/symfony.png'
import codeigniter from '../public/skill/codeigniter.png'
import express from '../public/skill/express.png'
import nodejs from '../public/skill/nodejs.png'
import reactjs from '../public/skill/reactjs.png'
import jquery from '../public/skill/jquery.png'
import electron from '../public/skill/electron.png'
import mysql from '../public/skill/mysql.png'
import postgres from '../public/skill/postgres.png'
import mongodb from '../public/skill/mongodb.png'
import html from '../public/skill/html5.png'
import bootstrap from '../public/skill/bootstrap.png'
import tailwind from '../public/skill/tailwind.png'

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
                  <p className="text-left text-bold text-lg"> Bahasa Pemograman </p>
                  <div className="grid grid-cols-4 text-center">
                    
                    <a href="https://nextjs.org/docs" className={styles.card}>

                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={php} alt="php" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> PHP: Hypertext Preprocessor </p>
                          <p className="font-semibold text-center"> 90% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={js} alt="js" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> JavaScript </p>
                          <p className="font-semibold text-center"> 90% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={html} alt="html" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Hypertext Markup Language </p>
                          <p className="font-semibold text-center"> 90% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    
                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={css} alt="css" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Cascading Style Sheets </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={bootstrap} alt="bootstrap" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Bootstrap </p>
                          <p className="font-semibold text-center"> 100% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={tailwind} alt="tailwind" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Tailwind </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={python} alt="python" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Python </p>
                          <p className="font-semibold text-center"> 40% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '40%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={java} alt="java" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Java </p>
                          <p className="font-semibold text-center"> 40% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '40%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <p className="text-left text-bold text-lg mt-5"> Framework </p>
                  <div className="grid grid-cols-4 text-center">
                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={laravel} alt="laravel" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Laravel </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={symfony} alt="symfony" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Symfony </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={codeigniter} alt="codeigniter" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Code Igniter </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={express} alt="express" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> Express </p>
                          <p className="font-semibold text-center"> 50% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '50%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={reactjs} alt="reactjs" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> ReactJS </p>
                          <p className="font-semibold text-center"> 50% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '50%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={jquery} alt="jquery" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> JQuery </p>
                          <p className="font-semibold text-center"> 90% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={electron} alt="electron" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> ElectronJS </p>
                          <p className="font-semibold text-center"> 50% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '50%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                  </div>

                  <p className="text-left text-bold text-lg mt-5"> Database </p>
                  <div className="grid grid-cols-4 text-center">
                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={mysql} alt="mysql" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> MySQL </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={postgres} alt="postgres" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> PostgreSQL </p>
                          <p className="font-semibold text-center"> 80% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                      <div className="grid grid-cols-2">
                        <div className="grid-cols-6 text-center">
                          <Image src={mongodb} alt="mongodb" className="rounded-lg" width={100} height={100} />
                        </div>

                        <div className="grid-cols-6">
                          <p className="font-semibold text-center"> MongoDB </p>
                          <p className="font-semibold text-center"> 50% </p>  
                          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-200 absolute"></div>
                              <div className="h-full bg-blue-400 absolute" style={{width: '50%'}}></div>
                          </div>
                        </div>
                      </div>
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
