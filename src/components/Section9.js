import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Form from "./Form";

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

    const submitHandler = (data) => {
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
                phoneNum: '',
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
                        <Form
                            register={register}
                            onSubmit={submitHandler}
                            reset={reset}
                            isSubmitSuccessful={isSubmitSuccessful}
                            handleSubmit={handleSubmit}
                            isDefaultForm={true}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section9;