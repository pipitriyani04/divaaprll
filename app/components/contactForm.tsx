"use client";
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
  
      // Simulasi pengiriman data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      
      // Reset form setelah pengiriman
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    };
  
    return (
        <div style={styles.container}>
          <h2>Contact Us</h2>
          {submitted && <p style={styles.successMessage}>Your message has been sent!</p>}
          <form onSubmit={handleSubmit} >
            <div style={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={styles.textarea}
              />
            </div>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      );
  };
  
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      height: '100px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    successMessage: {
      color: 'green',
      marginBottom: '10px',
    },
  };
  
  export default ContactForm;