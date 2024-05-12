import BiodataData from '../assets/data/Biodata';

export default function Biodata() {
    return (
        <>
          <div className="text-center mt-16">
            <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
              {BiodataData.name}
            </h3>

            {BiodataData.biodata.map((value, key) => {
              return (
                <div key={key} className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold">
                  <i className={value.icon + ' mr-2 text-lg text-gray-400'}></i>
                  {value.description}
                </div>
              )
            })}

            {/* --------------- skill section ------------------- */}
            <div className="flex flex-wrap justify-center mt-5">
              {BiodataData.softSkill.map((value, key) => {
                return (
                  <div key={key}>
                    <div className="bg-blue-500 text-white mx-2 rounded-lg">
                      <label key={key} className="font-light text-sm p-2"> {value} </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 py-5 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800 text-center" style={{textIndent: '50px'}}>
                  { BiodataData.aboutMe }
                </p>
                <p className="font-black">
                  Open for any opportunity, Contact me here  
                  <a target="_blank" href="https://wa.me/?phone={BiodataData.whatsapp}" className="text-purple-600"> Whatsapp </a> or 
                  <a href="mailto:{BiodataData.email}" className="text-purple-600"> Email </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center bg-gray-100 text-center">
            <div className="p-5">
              <p className="text-lg font-semibold"> {BiodataData.experience} year </p>
              <p className="text-lg font-light"> Work Experience </p>
            </div>
          </div>
        </>
    )
}
