import ProjectData from '../assets/data/Project';

export default function Project() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-5 mb-5">

            {ProjectData.map((value, key) => {
                return ( 
                <div key={key} className="border-2 border-black p-5 rounded-lg shadow-lg bg-white mx-2 my-2 hover:bg-blue-200 lg:w-1/3 w-2/3" >
                    <p className="font-bold"> {value.name} </p>
                    <p className="font-light"> {value.description} </p>

                    <div className=""> 
                    <button className={"border-yellow-200 border-1 rounded-lg p-2 mt-5 w-1/3 " +( value.url ? 'bg-yellow-400' : 'bg-gray-100 cursor-not-allowed')} onClick={() => { if(value.url) window.open(value.url, '_blank')}}> 
                        Demo
                        <i className="fas fa-chevron-right ml-2"></i> 
                    </button>
                    </div>
                </div> 
                )
            })}
            </div>
        </>
    )
}
