import React from 'react';
import { useState } from "react";

export const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone : '',
        email: '',
        msg:''
    })
    const InputEvent = (event) =>{
        const { name, value } = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,
            }
        })

    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My contact number is ${data.phone} , I would like to say that ${data.msg}`)
    }

    return (
        <>
           <div className = "my-5">
               <h1 className = " container text-center new">Contact Me</h1>
           </div>
           <div className = "container contact_div">
            <div className ="row">
                <div className = "col-md-6 col-10 mx-auto">
                    <form className = "mb-5"onSubmit = {formSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value = {data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value = {data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value = {data.phone} onChange={InputEvent} placeholder="Contact number" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value = {data.msg} onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                </div>
            </div>
           </div>
        </>
    )
}

export default Contact;
