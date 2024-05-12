import { useState, useEffect } from 'react';

import SkillData from '../assets/data/Skill';

export default function Skill() {
    const skillCategory = [];
    SkillData.forEach((value) => {
        if (!skillCategory.find((v) => v === value.category)) {
            skillCategory.push(value.category);
        }
    });

    let defaultCategory = skillCategory[0];
    const [activeCategory, setActiveCategory] = useState(defaultCategory);
    const [data, setData] = useState(getCurrentData(defaultCategory));

    useEffect(() => {
        setData(getCurrentData(activeCategory))
    }, [activeCategory])

    function getCurrentData(category) {
        return SkillData.filter(value => value.category == category);
    }

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {skillCategory.map((value, key) => {
                    return (
                        <p key={key} onClick={() => setActiveCategory(value)} className={"mx-2 font-light text-md border-b-2 p-3 hover:bg-blue-200 hover:mt-5 cursor-pointer " + (activeCategory == value.name ? 'border-blue-500' : 'border-gray-800')}> 
                            {value} 
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
