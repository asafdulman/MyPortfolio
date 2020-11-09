import React, { useState } from 'react'
import { mailService } from '../services/mailService'

export function Contact({ elInView }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isMessageModal, setIsMessageModal] = useState(false)
    const [isFailedMessageModal, setIsFailedMessageModal] = useState(false)



    function handleInput(ev) {
        if (ev.target.name === 'name') setName(ev.target.value)
        if (ev.target.name === 'email') setEmail(ev.target.value)
        if (ev.target.name === 'message') setMessage(ev.target.value)
    }

    function onSubmit(ev) {
        ev.preventDefault()
        if (!name || !email) {
            setIsFailedMessageModal(true)
            setTimeout(() => {
                setIsFailedMessageModal(false)
            }, 2000);
            return
        }
        let templateParams = {
            from_name: name,
            to_name: 'Asaf',
            subject: message,
            message
        }
        mailService.submit(templateParams)
        setIsMessageModal(true)
        setTimeout(() => {
            setIsMessageModal(false)
        }, 2000);
        setName('')
        console.log('isMessageModal', isMessageModal);
        setEmail('')
        setMessage('')
    }


    return (
        <div name="contact" className="contact-box-full">
            <div className="contact-box">
                {isMessageModal && <div className="message-modal">Message sent!</div>}
                {isFailedMessageModal && <div className="message-modal">Please fill out the entire form.</div>}
                <form action="mailto:asafdulman@gmail.com">
                    <h1>Contact</h1>
                    <div className="border"></div>
                    <p>Have a question or just want to chat? Feel free to reach out</p>
                    <input onInput={handleInput} value={name} autoComplete="off" name="name" placeholder="Name" type="text" required />
                    <input onInput={handleInput} value={email} autoComplete="off" name="email" placeholder="Email" type="email" />
                    <textarea onInput={handleInput} value={message} name="message" placeholder="Your message" cols="30" rows="10"></textarea>
                    <button onClick={onSubmit} type="submit" className="contact-btn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
