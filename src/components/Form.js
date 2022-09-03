import React, {useEffect} from 'react'
import {Link} from "react-router-dom";


const Form = ({register, errors, onSubmit, handleSubmit, isDefaultForm}) => {
    return (
        <form
            className='custom-form'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='custom-form__item'>
                <input
                    placeholder='Иван'
                    type="text"
                    id='first-name'
                    name='firstName'
                    className='first-name__inp custom-form__input'
                    {...register('firstName', {
                        required: 'This field is required'
                    })}
                />
                <label htmlFor='first-name' className='first-name__label custom-form__label'>Имя</label>
            </div>
            <div className='custom-form__item'>
                <input
                    placeholder='09090909009'
                    type="text"
                    id='phone-num'
                    name='phoneNum'
                    className='phone-num__inp custom-form__input'
                    {...register('phoneNum', {
                        required: 'This field is required'
                    })}
                />
                <label htmlFor='phone-num'
                       className='phone-num__label custom-form__label'>Телефон</label>
            </div>
            {
                isDefaultForm ? (
                    <>
                        <div className='custom-form__item'>
                            <input
                                placeholder='Город'
                                type="text"
                                id='city-name'
                                name='cityName'
                                className='city-name__inp custom-form__input'
                                {...register('cityName', {
                                    required: 'This field is required'
                                })}
                            />
                            <label htmlFor='city-name'
                                   className='city-name__label custom-form__label'>Город</label>
                        </div>
                        <div className='custom-form__inputs-group'>
                            <div className='custom-form__item'>
                                <input
                                    placeholder='Дата'
                                    type="text"
                                    id='date-time'
                                    name='dateTime'
                                    className='date-name__inp req-call__form-input'
                                    {...register('dateTime', {
                                        required: 'This field is required'
                                    })}
                                />
                                <label htmlFor='date-time'
                                       className='date-time__label custom-form__label'>Дата</label>
                            </div>
                            <div className='custom-form__item'>
                                <input
                                    placeholder='Время'
                                    type="text"
                                    id='time-inp'
                                    name='timeInp'
                                    className='time__inp req-call__form-input'
                                    {...register('timeInp', {
                                        required: 'This field is required'
                                    })}
                                />
                                <label htmlFor='time-inp'
                                       className='time-inp__label custom-form__label'>Время</label>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='custom-form__item'>
                            <input
                                placeholder='test@mail.ru'
                                type="text"
                                id='main-name'
                                name='mailName'
                                className='message-text__inp custom-form__input'
                                {...register('mailName', {
                                    required: 'This field is required'
                                })}
                            />
                            <label htmlFor='main-name'
                                   className='main-name__label custom-form__label'>E-Mail</label>
                        </div>
                        <div className='custom-form__item'>
                            <input
                                placeholder='message'
                                type="text"
                                id='message-text'
                                name='messageText'
                                className='message-text__inp custom-form__input'
                                {...register('messageText', {
                                    required: 'This field is required'
                                })}
                            />
                            <label htmlFor='message-text'
                                   className='message-text__label custom-form__label'>Сообщение</label>
                        </div>
                    </>
                )
            }
            <div className='custom-form__item'>
                <label htmlFor="file-inp" className='custom-input-file'>Прикрепить фото</label>
                <input
                    name='file'
                    type='file'
                    id='file-inp'
                    className='file__inp'
                    {
                        ...register('file', {
                            required: {
                                value: true,
                                message: 'file input is required'
                            }
                        })
                    }
                />
            </div>
            <div className='custom-form__footer'>
                <p className='custom-form__note'>
                    <span className='custom-form__alert'>Внимание!</span>
                    Все поля обязательны для заполнения. Отправляя форму, вы соглашаетесь с
                    <Link to=''>Политикой обработки данных</Link>
                </p>
                {errors.file && (
                    <p className='custom-form__errors'>{errors.file.message}</p>
                )}
                <button type='submit' className='custom-form__submit'>отправить заявку</button>
            </div>
        </form>
    )
}

export default Form

