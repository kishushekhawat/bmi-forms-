import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function Bmi() {
    let [bmi, setBmi] = useState('');
    let { register, handleSubmit, reset } = useForm('📃➡️🩺')
    function submitHandler(data) {
        let weight = data.weight;
        let height = data.height;
        let result = (weight) / (Math.pow(height * 0.01, 2));
        setBmi(result.toFixed(2));
    }
    function bmiRange(value) {
        let status = ""

        if (value == "") {
            return status;

        }
        if (value < 18.5) {
            status = "Underweight"


            //yellow
        } else if (value < 25) {
            status = "Healthy weight"


        } else if (value < 30) {
            status = "Overweight "
            //orange
        }
        else if (value < 35) {
            status = "Obesity"
            //red
        }
        else {
            status = "Severe Obesity"
            //dark red
        }
        return status


    }



    return (

        <form action="" className="w-[560px] text-center mx-auto mt-24" onSubmit={handleSubmit(submitHandler)} >
            <h1 className='text-4xl font-black '> {bmi}   </h1>
            <div className='text-neutral-600'>
                {
                    bmiRange(bmi)
                }
            </div>
            <h1 className="text-3xl font-bold">BMI</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eligendi!    </p>
            <div className="flex items-center gap-3 mt-2">
                <input {...register('weight')} type="number" placeholder="Enter your weight" className="border w-1/2 p-2 rounded-xl" />
                <input {...register('height')} type="number" placeholder="Enter your height" className="border w-1/2 p-2 rounded-xl" />
            </div>
            <input type="submit" value="calculate bmi" className="mt-2 hover:cursor-pointer w-full bg-black p-3 rounded-xl text-white" />


        </form>

    )
}

export default Bmi
