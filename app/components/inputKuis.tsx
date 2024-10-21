"use client";
import { useState } from 'react';

export default function InputKuis() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>Itu Benar!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Kuis Kota</h2>
      <p>
        Di kota manakah terdapat papan reklame yang mengubah udara menjadi air minum?
      </p>
      <form onSubmit={handleSubmit}>
        <input
        className='text-black text-center'
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button 
        
        disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Anggap kode ini melakukan *request* ke jaringan.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
