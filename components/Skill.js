import { useState, useEffect } from 'react';

import Image from 'next/image';
import SkillData from '../assets/data/skill';
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
            <div className="flex justify-center">
                {SkillCategory.map((value, key) => {
                    return (
                        <p key={key} onClick={() => setActiveCategory(value.name)} className={"mx-2 font-semibold text-md border-b-2 p-3 hover:bg-blue-200 hover:mt-5 cursor-pointer " + (activeCategory == value.name ? 'border-blue-500' : 'border-gray-800')}> 
                            {value.name} 
                        </p>
                    )
                })}
            </div>

            <div className="container mx-auto my-5">
                <div className="flex justify-center items-center">
                    {data.map((value, key) => {
                        return (
                            <div className="mx-5 text-center w-40" key={key}>
                                <Image src={value.image} height={200} width={200} alt={value.name} className="rounded-lg"/>
                                <p className="font-semibold text-lg"> {value.name} </p>
                            </div>
                        )
                    })}
                </div>   
            </div>
        </>
    )
}
