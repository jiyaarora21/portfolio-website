
// Typed.js animation
const typed = new Typed('#typed', {
  strings: ['Web Developer', 'Web designer', 'Video Editor', 'Social Media Manager'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  } catch (err) {
    alert('Failed to send message.');
  }
});
