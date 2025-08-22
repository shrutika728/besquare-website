
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const successMessage = document.getElementById('successMessage');

  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      successMessage.classList.remove('d-none');
    } else {
      alert("❌ Oops! Something went wrong.");
    }
  } catch (err) {
    alert("⚠️ Error submitting form. Please try again.");
  }
});

