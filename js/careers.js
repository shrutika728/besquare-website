function showApplyForm(jobTitle) {
    const form = document.getElementById("applyForm");
    form.classList.remove("d-none");
    setTimeout(() => form.classList.add("show"), 10);
    document.getElementById("jobTitle").value = jobTitle;
    window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
  }

  document.getElementById("jobApplicationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMessage").classList.remove("d-none");
    this.reset();
  });