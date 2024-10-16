function sendToMail(event) {
  event.preventDefault();
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPhone = document.getElementById("inputPhone").value;
  const inputTechStack = document.getElementById("inputTechstack").value;
  const inputMessage = document.getElementById("inputMessage").value;

  const a = document.createElement("a");
  a.href = `mailto:edihardiansyahh@gmail.com?subject=${inputTechStack}&body=${inputMessage}`;
  a.click();

  console.log(a);
}
