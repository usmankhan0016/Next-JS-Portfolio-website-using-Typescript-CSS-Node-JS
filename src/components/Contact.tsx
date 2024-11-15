import React from 'react'
import { MdMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import "@/app/styles/contact.css"

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space' data-aos="fade-right">
            <h2 className='contact-heading'>Get in touch</h2>
            <p className='contact-text'>
                You can drop a line, make me a call or send a message by submitting the form.
            </p>
            <div className='contact-flex'>
            < MdMail size={30}/> usmanbinkhan15@gmail.com
            </div>

            <div className='contact-flex'>
            <  BsTelephoneInbound size={27}/> (+92)000-000000
            </div>
        </div>
        <div className='contact-space' data-aos="fade-left">
            <div className='form'>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" className='input-feild' />
            </div>

            <div className='form'>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" className='input-feild' />
            </div>

            <div className='form'>
                <label htmlFor="msg">Message</label>
                <textarea id='=msg' className='textarea-feild' rows={8}></textarea>
            </div>
            <button className='button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
