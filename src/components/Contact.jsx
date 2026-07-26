import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        'EmailJS is not configured. Copy .env.example to .env and set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.'
      );
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, PUBLIC_KEY);
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Failed to send message:', err);
      setStatus('error');
    }
  };

  return (
    <section id="order">
      <div className="wrap">
        <div className="folio">Page 06 — Order Form</div>
        <h2>Let's Build Something</h2>
        <p className="lede">Open for freelance work — fill this in and it'll reach me directly.</p>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="order-head">
            <span>Order Form</span>
            <span>No. 001</span>
          </div>

          {status === 'success' ? (
            <div className="alert-box success">
              <span className="code">Order Received</span>
              Thanks — brunfjell will reply shortly.
            </div>
          ) : (
            <div className="order-body">
              <div className="field">
                <label htmlFor="cName">Name</label>
                <input
                  id="cName"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="cEmail">Email</label>
                <input
                  id="cEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="cMsg">Message</label>
                <textarea
                  id="cMsg"
                  placeholder="What are you looking to build?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {status === 'error' && (
                <div className="alert-box error">Something went wrong sending that — please try again shortly.</div>
              )}
              <button className="btn solid" type="submit" disabled={status === 'sending'} style={{ justifySelf: 'start' }}>
                {status === 'sending' ? 'Sending…' : 'Submit Order'}
              </button>
              <div className="order-foot">Message goes straight to my inbox via EmailJS.</div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
