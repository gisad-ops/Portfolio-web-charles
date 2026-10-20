document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    const payload = Object.fromEntries(new FormData(form).entries());
    submitButton.disabled = true;
    submitButton.style.opacity = '0.65';
    status.textContent = 'Sending your message…';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Unable to send your message right now.');
      status.textContent = result.message || 'Your message was submitted.';
      form.reset();
    } catch (error) {
      status.textContent = 'The contact service is not connected or unavailable. Please use the direct email link after updating it with your email address.';
    } finally {
      submitButton.disabled = false;
      submitButton.style.opacity = '1';
    }
  });
});
