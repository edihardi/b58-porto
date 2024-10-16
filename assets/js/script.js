function sendToMail(event) {
  event.preventDefault();
  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputPhone = document.getElementById("phone").value;
  const inputTechStack = document.getElementById("techstack").value;
  const inputMessage = document.getElementById("message").value;

  const a = document.createElement("a");
  a.href = `mailto:edihardiansyahh@gmail.com?subject=${inputTechStack}&body=${inputMessage}`;
  a.click();

  console.log(a);
}
