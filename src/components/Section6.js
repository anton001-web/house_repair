import React from 'react'
import {Link} from "react-router-dom";

const benefits = [
    {
        title: 'Страхование дома',
        text: 'Это возможность получить бесплатные консультации по вопросам страхования и оформить страховой полис на свой дом сроком на 12 месяцев с возможностью дальнейшего продления',
        img: './assets/images/benefit1Img.png'
    },
    {
        title: 'Кредит на дома',
        text: 'Вам больше не нужно обращаться в несколько банков, тратить свое время, пытаясь разобраться в условиях кредитных программ. Специалисты отдела предоставят всю информацию, оптимизируют ее, дадут консультации и помогут сделать правильный выбор.',
        img: './assets/images/benefit2Img.png'
    }
]

const Section6 = () => {
    return (
        <section className='benefits-section'>
            <div className='container'>
                <div className='benefits-body'>
                    <h1 className='benefits-title'>
                        <span>&#171;ЖСК Лидер&#187;</span> экономит ваше время и деньги
                    </h1>
                    <div className='benefits-list__block'>
                        <div className='benefits-list'>
                            {
                                benefits.map((benefit, ind) => (
                                    <div key={ind} className='benefits-item'>
                                        <div className='benefit-text__group'>
                                            <h3 className='benefit-title'>{benefit.title}</h3>
                                            <p className='benefit-text'>
                                                {benefit.text}
                                            </p>
                                        </div>
                                        <Link className='benefit-link' to='/'>подробнее ...</Link>
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

export default Section6