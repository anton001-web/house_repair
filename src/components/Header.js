import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";
import useMatchMedia from "use-match-media";
import {useMedia} from "use-media";

const services = [
    {title: 'Наплавляемая кровля'},
    {title: 'Фасадные работы'},
    {title: 'Капитальные репорт подьездов'},
    {title: 'Капитальный ремонт ГВС, ХВС, канализации'},
    {title: 'Благоустройство'},
    {title: 'Услуги промышленных альпинистов'},
    {title: 'Капитальный ремонт электрики'},
]

const Header = () => {
    const tablet = useMedia({maxWidth: '620px'})
    const dispatch = useDispatch()
    const burgerMenu = React.createRef()
    const burgerOpen = React.createRef()
    const dropdown = React.createRef()


    const handleBurger = () => {
        dispatch(toggleBurger())
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

    const handleDropDown = () => {
        if(!tablet) {
            return null
        } else {
            dropdown.current.classList.toggle('dropdown-active')
        }
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className="header-body">
                    <img src="./assets/images/logo.png" className='header-logo'/>
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
                            <li className="header-list__item" data-g><Link to='' className='header-link'>Главная</Link></li>
                            <li className="header-list__item" data-g data-hidden><Link to='' className='header-link'>Услуги</Link></li>
                            <div className='dropdown-wrap'ref={dropdown}>
                                <span className='dropdown-toggle' onClick={handleDropDown}>Услуги <img src="./assets/images/down-arrow.png" alt=""/></span>
                                <div className='dropdown-menu' >
                                    {
                                        services.map((service, ind) => (
                                            <Link key={ind} to='/' className='header-link dropdown-link'>{service.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <li className="header-list__item" data-g><Link to='' className='header-link'>О компании</Link></li>
                            <li className="header-list__item"><Link to='' className='header-link'>Контакты</Link></li>
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