import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors}, reset } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    reset();
    alert(`Signed up successfully!\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nAge: ${formData.age}`)
  };

  return (
    <>
    <div className='form-container flex justify-center h-screen gap-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <label>
                First name:
                <input placeholder='First Name' {...register("firstName", { required: true, minLength:3, maxLength: 20 })} />
                {errors.firstName && <span>Please enter your first name</span>}
            </label>
            <label>
                Last name:
                <input placeholder='Last name' {...register("lastName", { required: true, minLength:4, pattern: /^[A-Za-z]+$/i })} />
                {errors.lastName && <span>Please enter your last name</span>}
            </label>
            <label>
                Age:
                <input type="number" {...register("age", { required: true, min: 18, max: 99 })} />
                {errors.age && <span>Please enter your age</span>}
            </label>
            <select {...register("gender")}>
                <option value="female">Choose your gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <label className='mt-5'>
                Email:
                <input placeholder='Email Address' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Please enter your email</span>}
            </label>
            <div className='mb-10'>
                <label className='flex flex-row mb-0'>
                    <input type="checkbox" {...register("subscribe", {required: true})} />
                    I agree to terms and conditions
                </label>
                {errors.subscribe && <span>You must agree on terms</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
    </>
    
  );
};

export default Form;
