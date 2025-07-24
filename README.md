StrataXM_Site

## Contact Form Setup - Formspree Integration

The contact form is now integrated with Formspree. To complete the setup:

### Formspree Setup (Current Implementation)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. In `src/pages/Contact.tsx`, replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
   ```
4. Deploy your site - form submissions will be sent to your email and visible in your Formspree dashboard

### Alternative Options

#### EmailJS
1. Install EmailJS: `npm install emailjs-com`
2. Set up your email service at [emailjs.com](https://www.emailjs.com/)
3. Replace the demo code with EmailJS integration

#### Custom Backend/Vercel Serverless Functions
Create your own API endpoint to handle form submissions and email sending.

### Next Steps
1. Create your Formspree account
2. Get your form ID
3. Replace `YOUR_FORM_ID` in the code
4. Test the form after deployment
