import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";
import useMatchMedia from "use-match-media";
import {useMedia} from "use-media";

const services = [
    {title: 'Наплавляемая кровля', to: '/services/roof', img: './assets/images/headerDescDD1.png'},
    {title: 'Фасадные работы', to: '/services/facade-works', img: './assets/images/headerDescDD2.png'},
    {title: 'Капитальные репорт подьездов', to: '/services/entrance-repair', img: './assets/images/headerDescDD3.png'},
    {title: 'Капитальный ремонт ГВС, ХВС, канализации', to: '/services/overall-overhaul', img: './assets/images/headerDescDD5.png'},
    {title: 'Благоустройство', to: '/services/improvement', img: './assets/images/headerDescDD6.png'},
    {title: 'Услуги промышленных альпинистов', to: '/services/climbers-service', img: './assets/images/headerDescDD7.png'},
    {title: 'Капитальный ремонт электрики', to: '/services/electric-overhaul', img: './assets/images/headerDescDD4.png'},
]

const Header = () => {
    const tablet = useMedia({maxWidth: '620px'})
    const tabletS = useMedia({maxWidth: '767px'})
    const dispatch = useDispatch()
    const burgerMenu = React.createRef()
    const burgerOpen = React.createRef()
    const dropdown = React.createRef()
    const serviceRef = React.createRef()
    const desktopDD = React.createRef()


    const handleBurger = (type) => {
        dispatch(toggleBurger(type))
    }

    const {visibility} = useSelector(state => {
        const {burger} = state
        return burger
    })

    useEffect(() => {
        if(visibility) {
            burgerOpen.current.classList.add('burger-open__active')
            document.documentElement.classList.add('scroll-active')
            burgerMenu.current.classList.add('burger-active')
        } else {
            burgerOpen.current.classList.remove('burger-open__active')
            document.documentElement.classList.remove('scroll-active')
            burgerMenu.current.classList.remove('burger-active')
        }
    }, [visibility])

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    const disableMenu = () => {
        burgerMenu.current.classList.remove('burger-active')
        burgerOpen.current.classList.remove('burger-open__active')
        desktopDD.current.classList.remove('desktop-left-active')
        desktopDD.current.classList.remove('desktop-right-active')
        document.documentElement.classList.remove('scroll-active')
        scrollTop()
    }

    const handleDropDown = () => {
        if(!tablet) {
            return null
        } else {
            dropdown.current.classList.toggle('dropdown-active')
        }
    }

    const deskDD = () => {
        if(!tabletS) {
            desktopDD.current.classList.remove('desktop-left-active')
            desktopDD.current.classList.toggle('desktop-right-active')
        } else {
            desktopDD.current.classList.remove('desktop-right-active')
            desktopDD.current.classList.toggle('desktop-left-active')
        }
    }


    return (
        <header className='header'>
            <div className='container'>
                <div className="header-body">
                    <Link to='/' onClick={disableMenu}>
                        <img src="./assets/images/logo.png" className='header-logo'/>
                    </Link>
                    <div className='burger-toggle__block'>
                        <div className='burger-toggle' onClick={handleBurger} ref={burgerOpen}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className='header-list__block' ref={burgerMenu}>
                        <ul className='header-list'>
                            <div className='hidden-burger__toggle' onClick={handleBurger}>
                                <img src="./assets/images/close.png" alt=""/>
                            </div>
                            <li className="header-list__item" data-g><Link onClick={disableMenu} to='/' className='header-link'>Главная</Link></li>
                            <li className="header-list__item service-header-link" ref={serviceRef} data-g data-hidden><span onClick={deskDD} className='header-link'>Услуги</span>

                            </li>
                            <div className='desk-header_dropdown-wrap' ref={desktopDD}>
                                <div className='desk-header_dropdown-menu'>
                                    {
                                        services.map((item, index) => (
                                            <Link to={item.to} onClick={deskDD}>
                                                <div className='desk-dropdown__item' key={index}>
                                                    <img src={item.img} alt=""/>
                                                    <span className='desk-dropdown__item-title'>{item.title}</span>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='dropdown-wrap'ref={dropdown}>
                                <span className='dropdown-toggle' onClick={handleDropDown}>Услуги <img src="./assets/images/down-arrow.png" alt=""/></span>
                                <div className='dropdown-menu' >
                                    {
                                        services.map((service, ind) => (
                                            <Link key={ind} to={service.to} onClick={disableMenu} className='header-link dropdown-link'>{service.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <li className="header-list__item" data-g><Link onClick={disableMenu} to='/about' className='header-link'>О компании</Link></li>
                            <li className="header-list__item"><Link to='/contacts' onClick={disableMenu} className='header-link'>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className='header-phone__block'>
                        <span className='header-phone'>
                            <p className='header-phone__city'>Москва</p>
                            <p className='header-phone__number'>+7 (499) 350-97-60</p>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header