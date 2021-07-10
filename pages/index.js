import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation'
import userLogo from '../public/user.jpg'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-200 rounded-b-md shadow-sm">
        <div className="text-center p-5">
          <p className="text-2xl"> Saya seorang Fullstack Developer </p>
          <p className="text-lg"> Saya mulai tertarik program sejak umur 15 tahun dan sampai saat ini masih sangat menikmati nya </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1">
          <div className="bg-red-200 rounded-b-md shadow-sm mt-2">
            <div className="text-center p-5">
                <p className="text-lg font-bold"> Profile </p>  
                <p className="text-sm"> Mengenal Secara Singkat </p>  
            </div>

            <div className="grid grid-cols-2 gap-1 text-center">
              <div className="m-2">
                <Image src={userLogo} alt="rifqi" className="" height={300} width={300}/>
              </div> 
              <div className="m-2">
                <p className="text-center font-bold"> Muhammad Rifqi Imam Saputra </p>   
                <p className="text-sm text-left mt-2"> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div> 
            </div>
          </div>

          <div className="bg-blue-200 rounded-b-md shadow-sm mt-2">
            <div className="text-center p-5">
                <p className="text-lg font-bold"> Riwayat Pendidikan </p>  
                <p className="text-sm"> Pendidikan Hingga Saat Ini </p>   
            </div>

            <div className="mt-3 text-center justify-center">
              <ul className="w-full rounded-lg mt-2 mb-3">
                <li className="mb-1">
                  <div className="w-fill flex p-3 pl-3">
                    <img className="flex-none w-20 h-full" src="/user.jpg" alt="image" />
                    <span class="ml-2 truncate m-auto" title="Test with a very really long name (resize the browser to see it truncate)">Test with a very really long name (resize the browser to see it truncate)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
