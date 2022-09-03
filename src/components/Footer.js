import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer-body'>
                    <div className='footer-top'>
                        <div className="footer-top__left-text__block">
                            <p className='footer-top__first-left__text'>Жилищно строительная компания <span>ЛИДЕР</span></p>
                            <p className='footer-top__second-left__text'>щемиловский 16 стр 2, офис 37-40</p>
                        </div>
                        <div className='footer-list__block'>
                            <ul className='footer-list'>
                                <li className="footer-list__item" data-m>Главная</li>
                                <li className="footer-list__item" data-m>Услуги</li>
                                <li className="footer-list__item" data-m>О компании</li>
                                <li className="footer-list__item">Контакты</li>
                            </ul>
                        </div>
                        <div className="footer-media__list-block">
                            <div className='footer-media__list'>
                                <img src="./assets/images/telega.png" data-mr lt="" className="footer-media__item"/>
                                <img src="./assets/images/whatsApp.png" data-mr alt="" className="footer-media__item"/>
                                <img src="./assets/images/mail.png" data-mr alt="" className="footer-media__item"/>
                                <img src="./assets/images/viber.png" alt="" className="footer-media__item"/>
                            </div>
                        </div>
                        <div className='footer-timetable'>
                            <div className='footer-timetable__body'>
                                <img src="./assets/images/clock.png" alt=""/>
                                <span className='timetable'>пн-пт 10:00-18:00</span>
                                <span className='timetable-down'>СБ-ВС Выходной</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer