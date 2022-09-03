import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Section9 = () => {
    const {register,
        getValues,
        formState: {errors, isSubmitSuccessful},
        reset,
        formState,
        handleSubmit} =
        useForm({
            mode: 'onChange',
            defaultValues: {
                firstName: '',
                secondName: '',
                cityName: '',
                dateTime: '',
                timeInp: '',
            }
    })

    const [img, setImg] = useState('');

    const submitHandler = async (data) => {
        convert2base64(data.file[0])
        console.log(data)
    }

    const convert2base64 = (file) => {
        const reader = new FileReader()

        reader.onloadend = () => {
            setImg(reader.result.toString())
        }

        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset({
                firstName: '',
                secondName: '',
                cityName: '',
                dateTime: '',
                timeInp: '',
            })
        }
    }, [formState, reset])

    return (
        <section className='form-section'>
            <div className='container'>
                <div className='form-section__body'>
                    <h1 className='form-section__title'>Заказать звонок</h1>
                    <div className='form-block'>
                        <form
                            onSubmit={handleSubmit(submitHandler)}
                            className='req-call__form'
                        >
                            <div className='req-call__form-item'>
                                <input
                                    placeholder='Иван'
                                    type="text"
                                    id='first-name'
                                    name='firstName'
                                    className='first-name__inp req-call__form-input'
                                    {...register('firstName', {
                                        required: 'This field is required'
                                    })}
                                />
                                <label htmlFor='first-name' className='first-name__label req-call__form-label'>Имя</label>
                            </div>
                            <div className='req-call__form-item'>
                                <input
                                    placeholder='Петров'
                                    type="text"
                                    id='second-name'
                                    name='secondName'
                                    className='second-name__inp req-call__form-input'
                                    {...register('secondName', {
                                        required: 'This field is required'
                                    })}
                                />
                                <label htmlFor='second-name'
                                       className='second-name__label req-call__form-label'>Фамилия</label>
                            </div>
                            <div className='req-call__form-item'>
                                <input
                                    placeholder='Город'
                                    type="text"
                                    id='city-name'
                                    name='cityName'
                                    className='city-name__inp req-call__form-input'
                                    {...register('cityName', {
                                        required: 'This field is required'
                                    })}
                                />
                                <label htmlFor='city-name'
                                       className='city-name__label req-call__form-label'>Город</label>
                            </div>
                            <div className='req-call_inputs-group'>
                                <div className='req-call__form-item'>
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
                                           className='date-time__label req-call__form-label'>Дата</label>
                                </div>
                                <div className='req-call__form-item'>
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
                                           className='time-inp__label req-call__form-label'>Время</label>
                                </div>
                            </div>
                            <div className='req-call__form-item'>
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
                            <div className='req-call__form-footer'>
                                <p className='req-call__form-note'>
                                    <span className='rc__form-alert'>Внимание!</span>
                                    Все поля обязательны для заполнения. Отправляя форму, вы соглашаетесь с
                                    <Link to=''>Политикой обработки данных</Link>
                                </p>
                                {errors.file && (
                                    <p className='req-call__form-errors'>{errors.file.message}</p>
                                )}
                                <button type='submit' className='req-call_form-submit'>отправить заявку</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section9;