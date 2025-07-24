import React from 'react';

// Production-ready contact form integration options:

// Option 1: Netlify Forms (if deploying to Netlify)
// Add data-netlify="true" to your form element and Netlify will handle submissions
// Example: <form data-netlify="true" name="contact" onSubmit={handleSubmit}>

// Option 2: Formspree (Third-party service)
// Replace the fetch URL with your Formspree endpoint
// const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formData)
// });

// Option 3: EmailJS (Client-side email service)
// Install: npm install emailjs-com
// import emailjs from 'emailjs-com';
// emailjs.send('service_id', 'template_id', formData, 'user_id');

// Option 4: Custom Backend API
// Create your own API endpoint that handles form submissions
// const response = await fetch('/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formData)
// });

export const ContactFormIntegrations = {
  // Netlify Forms setup
  netlify: {
    formAttributes: {
      'data-netlify': 'true',
      'data-netlify-honeypot': 'bot-field',
      name: 'contact'
    },
    hiddenFields: (
      <>
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <input name="bot-field" />
        </div>
      </>
    )
  },

  // Formspree configuration
  formspree: {
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Replace with your actual form ID
    submitHandler: async (formData: any) => {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return response.json();
    }
  },

  // EmailJS configuration
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    userId: 'YOUR_USER_ID',
    submitHandler: async (formData: any) => {
      // Uncomment and install emailjs-com to use
      // const emailjs = await import('emailjs-com');
      // return emailjs.default.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_USER_ID'
      // );
    }
  }
};

export default ContactFormIntegrations;