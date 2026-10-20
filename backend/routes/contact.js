const express = require('express');
const router = express.Router();

// POST /api/contact - validates a message and logs it to the server console.
// Configure an email provider or database before relying on this as a production inbox.
router.post('/', (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
  const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please complete all fields.' });
  }
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ error: 'One or more fields exceed the allowed length.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  // Current starter implementation: visible in the running server terminal only.
  console.log('Portfolio contact inquiry received:', {
    name,
    email,
    message,
    receivedAt: new Date().toISOString()
  });

  return res.status(201).json({
    success: true,
    message: 'Your message reached the portfolio server. Email notifications are not configured yet, so please also use the direct contact link for important inquiries.'
  });
});

module.exports = router;
