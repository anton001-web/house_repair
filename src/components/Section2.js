import React from 'react'
import {advantagesData} from "../data/advantagesData";

const Section2 = () => {
    return (
        <section className='advantages-section sec-top'>
            <div className='container'>
                <div className="advantages-body">
                    <h1 className='advantages-title title'>
                        Все задачи решаются просто, если обратиться в компанию
                        <span>ЖСК Лидер</span>
                    </h1>
                    <div className='advantages-list__block'>
                        <div className='advantages-list'>
                            {
                                advantagesData.map((advant, ind) => (
                                    <div className='advantage' key={ind}>
                                        <img src={advant.img} alt=""/>
                                        <p className='advantage-text'>{advant.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2