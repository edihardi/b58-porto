function sendToMail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const techStack = document.getElementById("techstack").value;
  const message = document.getElementById("message").value;

  const a = document.createElement("a");
  a.href = `mailto:${email}?subject=${techStack}&body=${message}`;
  a.click();
}
