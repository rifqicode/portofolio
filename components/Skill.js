import { useState, useEffect } from 'react';

import Image from 'next/image';
import SkillData from '../assets/data/Skill';
import SkillCategory from '../assets/data/SkillCategory';

export default function Skill() {
    let defaultCategory = SkillCategory[0];

    const [activeCategory, setActiveCategory] = useState(defaultCategory.name);
    const [data, setData] = useState(getCurrentData(defaultCategory.name));

    useEffect(() => {
        setData(getCurrentData(activeCategory))
    }, [activeCategory])

    function getCurrentData(category) {
        return SkillData.filter(value => value.category == category);
    }

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {SkillCategory.map((value, key) => {
                    return (
                        <p key={key} onClick={() => setActiveCategory(value.name)} className={"mx-2 font-light text-md border-b-2 p-3 hover:bg-blue-200 hover:mt-5 cursor-pointer " + (activeCategory == value.name ? 'border-blue-500' : 'border-gray-800')}> 
                            {value.name} 
                        </p>
                    )
                })}
            </div>

            <div className="container mx-auto my-1">
                <div className="flex flex-wrap justify-center items-center">
                    {data.map((value, key) => {
                        return (
                            <div className="mx-5 text-center w-40 my-2" key={key}>
                                <i className={value.image} style={{
                                    fontSize: '6rem'
                                }}></i>
                                <p className="font-semibold text-lg"> {value.name} </p>
                            </div>
                        )
                    })}
                </div>   
            </div>
        </>
    )
}
