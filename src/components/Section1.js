import React from 'react'

const Section1 = () => {
    return (
        <section className='first-section'>
                <div className='first-section__body'>
                    <div className="container">
                        <div className='first-section__header'>
                            <p className='first-section__title'>
                                Строим, ремонтируем и обслуживаем <span>жилые многоквартирные дома</span>
                            </p>
                            <button className='sec1-btn btn-filled'>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div className='first-section__main-content'>
                        <div className='first-section__hidden-block'>
                            <h1 className='first-section__hidden-title'>Строим, ремонтируем и обслуживаем жилые многоквартирные дома</h1>
                            <div className='first-section__second-btn__block'>
                                <div className='f-section__second-btn-group'>
                                    <p>Оставить заявку</p>
                                    <img className='left-arr' src="./assets/images/left-arr.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Section1