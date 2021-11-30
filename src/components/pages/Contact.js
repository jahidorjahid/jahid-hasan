import React, { useRef, useState } from 'react';

const Contact = () => {
    const [alert, setAlert] = useState('');

    const senderName = useRef('');
    const senderEmail = useRef('');
    const senderEmailSubject = useRef('');
    const senderEmailText = useRef('');

    // handle onsubmit
    const handleSendEmail = e => {
        // prevent default
        e.preventDefault();
        const data = {
            from: senderEmail.current.value,
            subject: senderEmailSubject.current.value,
            message: senderEmailText.current.value,
        };
        fetch('https://jahid-hasan.herokuapp.com/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    setAlert('Sending Message Succesfull!');
                } else {
                    setAlert('Sending Message Failed!');
                }
            });
    };

    return (
        <section className="page">
            <div className="wysiwyg">
                <h1>Contact Me</h1>
                <p className="txt-large">
                    If you’d like to chat about a project then please fill in
                    the form below and I'll get back within 1-2 hours.
                </p>
            </div>
            <div className="mt-large">
                <form
                    onSubmit={handleSendEmail}
                    id="contact-form"
                    className="form"
                >
                    <div className="form__row">
                        <div className="form__field">
                            <label htmlFor="name" className="form__label">
                                Name <span className="form__required">*</span>
                            </label>
                            <input
                                ref={senderName}
                                id="name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="email" className="form__label">
                                Email <span className="form__required">*</span>
                            </label>
                            <input
                                ref={senderEmail}
                                id="email"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__field">
                            <label htmlFor="subject" className="form__label">
                                Subject
                                <span className="form__required">*</span>
                            </label>
                            <input
                                ref={senderEmailSubject}
                                id="subject"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__field">
                            <label htmlFor="message" className="form__label">
                                Message
                                <span className="form__required">*</span>
                            </label>
                            <textarea
                                ref={senderEmailText}
                                id="message"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__field">
                            <button className="btn">Send Message</button>
                        </div>
                    </div>
                    {alert && (
                        <div className="form__row">
                            <div className="form__field">
                                <span style={{ color: '#15a204' }}>
                                    {alert}
                                </span>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
