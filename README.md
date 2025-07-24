StrataXM_Site

## Contact Form Setup

The contact form is currently set up with a demo handler. To make it production-ready, choose one of these options:

### Option 1: Netlify Forms (Recommended if deploying to Netlify)
1. Add the following attributes to the form element in `Contact.tsx`:
   ```jsx
   <form data-netlify="true" name="contact" onSubmit={handleSubmit}>
   ```
2. Add hidden fields for Netlify:
   ```jsx
   <input type="hidden" name="form-name" value="contact" />
   ```
3. Deploy to Netlify and form submissions will appear in your Netlify dashboard

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace the demo submission code with:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

### Option 3: EmailJS
1. Install EmailJS: `npm install emailjs-com`
2. Set up your email service at [emailjs.com](https://www.emailjs.com/)
3. Replace the demo code with EmailJS integration

### Option 4: Custom Backend
Create your own API endpoint to handle form submissions and email sending.

See `src/components/ContactFormHandler.tsx` for detailed implementation examples.
