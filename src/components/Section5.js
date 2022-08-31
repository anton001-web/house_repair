import React from 'react'

const Section5 = () => {
    return (
        <section className='static-info__section'>
            <div className='container'>
                <div className='static-info__section-block'>
                    <div className='static-info__img-block'>
                        <img src="./assets/images/staticInf-house.png" alt="img-house" className='static-inf__img'/>
                    </div>
                    <div className='static-info__text-block'>
                        <h2 className='static-info__title'>Забота о вашем доме</h2>
                        <div className='static-info__text-group'>
                            <p className='static-info__text m-bott'>
                                Мы с заботой подходим к вашим задачам. Более чем 10 лет мы занимаемся строительством, ремонтом и обслуживанием многоквартирных домов.
                            </p>
                            <p className='static-info__text'>
                                Наши менеджеры помогут подобрать подходящее решение под ваши любые запросы. Это может быть и задача по локальному ремонту, а можем - и строительство здания.
                            </p>
                        </div>
                        <button className='static-info__btn'>Оставить заявку</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5