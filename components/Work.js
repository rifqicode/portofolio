import WorkData from '../assets/data/Work';

export default function Work() {
    return (
        <>
            <div className="grid grid-flow-row">
              <div className="relative mx-auto mt-5 flex w-full flex-col lg">
                <div className="mt-8 mb-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md justify-center">
                    {WorkData.map((value, key) => {
                      return (
                      <div key={key} className="grid grid-flow-row auto-rows-max md:pl-16 ml-20">
                        <div className="m-5 flex">
                          <i className="fas fa-arrow-right text-primary md:block mt-1"></i>
                          <div className="md:pl-10">
                            <span className="block font-body font-bold text-grey-40 text-xl">{value.title} {value.companyName ? `at ${value.companyName}` : ''}</span>
                            <span className="block pt-2 font-header font-bold text-primary">{value.date}</span>
                            <div className="pt-2">
                              <span className="block font-body text-black">
                                <ul className="list-disc">
                                  {value.workDetails.map((workDetail, keyDetail) => {
                                    return (
                                      <li key={keyDetail}> {workDetail.description} </li>
                                    )
                                  })}
                                </ul>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
