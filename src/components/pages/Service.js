import React, {useEffect} from 'react'
import {companyServiceData} from "../../data/companyServiceData";
import {useParams} from "react-router-dom";
import Form from "../Form";
import {useForm} from "react-hook-form";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper";


const imgPath = './assets/images/serviceCurImg'

const Service = () => {
    const params = useParams()
    const currentService = companyServiceData.filter(service => service.type === params.serviceCategory)

    const {
        register,
        formState,
        formState: {isSubmitSuccessful, errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            phoneNum: '',
            mailName: '',
            messageText: '',
        }
    })

    const submitHandler = (data) => {
        console.log(data)
    }

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

    return (
        <section className='service-cur__section'>
            <div className='container'>
                <div className='service-cur__body'>
                    <h1 className='service-cur__title'>{currentService[0].title} для <br/> <span>вашего дома</span></h1>
                    <div className='service-cur__advantages-list__block'>
                        <div className='service-cur__advantages-list__title-group'>
                            <img className='advantages-title__img' src="./assets/images/serviceCurTitleImg.png" alt="image"/>
                            <p className='service-cur__advantages-title'>
                                Почему заказывать <span>{currentService[0].title}</span> нужно у нас
                            </p>
                        </div>
                        <div className='service-cur__advantages-list'>
                            {
                                currentService[0].infoList.map((advantg, index) => {
                                    index++
                                    return (
                                        <div key={index} className='service-cur__advantages-list__item'>
                                            <div className='sf'>
                                                <img src={imgPath + index + '.png'} alt=""/>
                                                <h4 className='service-cur__advantages-list__item-title'>{advantg.title}</h4>
                                            </div>
                                            <p className='service-cur__advantages-list__item-text'>{advantg.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='service-cur__photoalbum-list__block'>
                        <p className='service-cur__photoalbum-title'>
                            Примеры нашей работы по монтажу <br/> <span>{currentService[0].title}</span>
                        </p>
                        <div className='service-cur__photoalbum-list'>
                            {
                                currentService[0].imagesList.map((img, index) => (
                                    <div className='service-cur__photoalbum-list__item'>
                                        <img src={img.img} alt="album-img"/>
                                    </div>
                                ))
                            }
                        </div>
                        <Swiper
                            scrollbar={{
                                hide: true
                            }}
                            className='service-cur__photoalbum-swiper'
                            modules={[Scrollbar]}
                        >
                            {
                                currentService[0].imagesList.map((img, index) => (
                                    <SwiperSlide>
                                        <div className='service-cur__photoalbum-list__item'>
                                            <img src={img.img} alt="album-img"/>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='service-cur__form-block'>
                        <div className='service-cur__form'>
                            <h1 className='service-cur__form-title'>Заполните заявку</h1>
                            <Form
                                onSubmit={submitHandler}
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
            </div>
        </section>
    )
}

export default Service;