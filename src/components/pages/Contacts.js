import React, {useEffect} from 'react'
import Form from "../Form";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const {
        register,
        reset,
        formState,
        formState: {isSubmitSuccessful, errors},
        handleSubmit
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            phoneNum: '',
            mailName: '',
            messageText: '',
        }
    })

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset({
                firstName: '',
                phoneNum: '',
                mailName: '',
                messageText: ''
            })
        }
    }, [formState, reset])

    const onSubmit = (data) => {}

    return (
        <section className='contacts-section'>
            <div className='container'>
                <div className="contacts-page__header-block">
                    <h1 className='contacts-section__body-title'>Контакты</h1>
                    <span
                        className='contacts-section__body-subTitle'>Хотите связаться с нами ? Мы всегда перезвоним Вам.</span>
                    <div className="contacts-mail__group">
                        <div className='contacts-phone__block'>
                            <span className='contacts-phone__label contacts-label'>Многоканальный телефон:</span>
                            <span className='contacts-phone contacts-lab__item'><a href="tel:+74993509760">+7 (499) 350-97-60</a></span>
                        </div>
                        <div className='contacts-mail__block'>
                            <span className='contacts-mail__label contacts-label'>Почта для обращения:</span>
                            <span className='contacts-mail contacts-lab__item'>info@znsklider.ru</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contacts-mapWay__block'>
                <div className='contacts-mway__body'>
                    <div className='container'>
                        <div className='contacts-mapImg__block'>
                            <img src="./assets/images/map.png" alt="map"/>
                        </div>
                        <div className='contacts-map__info-block'>
                            <div className='contacts-way__block mb'>
                                <span className='contacts-way contacts-label'>Адрес офиса:</span>
                                <span className='contacts-way contacts-way__lab-item'>Щемиловский 16 стр 2, офис 37-40</span>
                            </div>
                            <div className='contacts-way__block'>
                                <span className='contacts-way contacts-label'>График работы:</span>
                                <span className='contacts-way contacts-way__lab-item'>пн-пт с 10:00 до 18:00</span>
                                <span className='contacts-way contacts-way__lab-item'>св-вс Выходной</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contacts-page__form-block'>
                <div className='container'>
                    <div className='contacts-page__form'>
                        <h1 className='contacts-page__form-title'>Заполните заявку</h1>
                        <Form
                            onSubmit={onSubmit}
                            register={register}
                            isDefaultForm={false}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                            isSubmitSuccessful={isSubmitSuccessful}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts