import React from 'react'

const Section8 = () => {
    return (
        <section className='docs-sec'>
            <div className='container'>
                <div className="docs-body">
                    <div className='docs-info__block'>
                        <svg  className='house-svg' width="376" height="470" viewBox="0 0 376 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 167.5V74.2172L187.58 3L373 74.5282V467H3.56018V362" stroke="#9C2E29" stroke-width="5" />
                        </svg>
                        <p className='docs-info__img-text'>Если у вас есть техническое задание, мы можем сразу сделать просчет по стоимости и назвать примерные сроки!</p>
                    </div>
                    <div className="docs-second-info__block">
                        <p className='docs-second-info__text'>ЖСК Лидер воплотит в жизнь ваши задачи. Для вашего удоства вы можете сразу приложить имеющуюся документацию </p>
                        <button className='docs-second-info__btn'>приложить документацию</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section8