import React from 'react'
import {companyServiceData} from "../data/companyServiceData";
import {Link} from "react-router-dom";

const Section3 = () => {
    return (
        <section className='service-section'>
            <div className='container'>
                <div className='service-section__body'>
                    <div className='service-titles__group'>
                        <h1 className='service-title'>Услуги компании</h1>
                        <span className='service-subTitle'>Наши специалисты работают на всех этапах строительства, начиная от разработки проекта и монтажа фундамента, заканчивая наружной и внутренней отделкой загородных домов.</span>
                    </div>
                    <div className='service-list__block'>
                        <div className='service-list'>
                            {
                                companyServiceData.map((service, ind) => (
                                    <Link to={service.to} key={ind}>
                                        <div className='service-item'>
                                            <img src={service.img} alt=""/>
                                            <div className='service-item__title-block'>
                                                <span className='service-item__title'>{service.title}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                            <div className='service-section__info-block'>
                                <div className='service-section-info__group'>
                                    <img src='./assets/images/deco.png' className='service-section__info-deco' />
                                    <p className='service-info__first service-text'>
                                        Внешний вид дома важен так же, как и крепость его стен, и надёжность крыши. Современные строения отличает качественная и эстетичная отделка фасадов.
                                    </p>
                                    <p className='service-info__second service-text'>
                                        Мы предлагаем своим клиентам <Link to='/'>различные виды отделочных материалов</Link> от ведущих производителей, а также профессиональную работу, выполненную в кратчайшие сроки.
                                    </p>
                                </div>
                                <div className='service-info__btn-block'>
                                    <div className='service-info-btn__group'>
                                        <p>Оставить заявку</p>
                                        <img className='left-arr' src="./assets/images/redLeftArr.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3