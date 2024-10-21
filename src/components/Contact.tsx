'use client';

import React, { FormEvent, useState } from "react";
import Swal from 'sweetalert2'

function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "97e80800-f155-4512-86b8-c34911652ab9",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Succesesfully!",
          icon: "success"
        });
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div className='flex justify-center items-center min-h-screen'>

      <form onSubmit={handleSubmit} className='max-w-[600px] w-[100%]  bg-yellow-50 p-7 rounded-lg mt-32 shadow-lg shadow-slate-800 '>
        <h2 className='text-4xl text-black text-center font-bold'>Contact Form</h2>
        <div className='mt-20px'>
          <label>Full Name</label>
          <input type='text'name='name'  value={formData.name} onChange={handleInputChange} className='w-[100%] h-12 bg-transparent 
          border-gray-600 border-[2px] rounded-md outline-none p-4 text-[16px] mt-2 text-gray-950' placeholder='Enter Your Name' required />
        </div>

        <div className='mt-20px'>
          <label>Email Adress</label>
          <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='w-[100%] h-12 bg-transparent 
          border-gray-600 border-[2px] rounded-md outline-none p-4 text-[16px] mt-2 text-gray-950' placeholder='Enter Your Email' required />
        </div>

        <div className='input-box'>
          <label>Your Message</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} className='w-[100%] bg-transparent border-gray-600 
          border-[2px] h-[200px]  resize-none rounded-md outline-none p-4 text-[16px] mt-2 text-gray-950' placeholder='Enter Your Message' required></textarea>
        </div>

        <button type='submit' className='w-[100%] h-14 bg-yellow-600 transition text-white font-boldborder-none shadow-md
         shadow-gray-950 mt-6 hover:bg-yellow-500' >Send Message</button>





      </form>

        

    </div>
  )
}

export default Contact;