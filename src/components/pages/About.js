import React from 'react'

const About = () => {
    return (
        <section className="about-page__section">
            <div className="about-page__body">
                <div className="container">
                    <div className='about-page__header-block'>
                        <h1 className='about-page__title'>О компании</h1>
                        <span className='about-page__subTitle'>Тысячи благодарных клиентов за 15 лет работы!</span>
                    </div>
                </div>
                <div className='about-page__info-wrap'>
                    <div className="container">
                        <div className='about-page__info-block'>
                            <div className='about-page__info-img__block'>
                                <img src="./assets/images/aboutPageImg.png" alt="image"/>
                            </div>
                            <div className='about-page__info-list__block'>
                                <h1 className='about-page__info-list__title'>Жилищно-строительная компания "Лидер"</h1>
                                <span className="about-page__info-list__text">
                                    Cпециализируется на работах по строительству, ремонту и обслуживанию жилых домов, в том числе частных коттеджей и многоквартирных домов.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About