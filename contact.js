// Generate an email
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const ebody = message + '%0D%0A' + '%0D%0A' + name + '%0D%0A' + 'email: ' + email;

  let radioButtons = document.getElementsByName('subscribe');
  let selectedValue;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].value;
      break;
    }
  }
  console.log(selectedValue);

  const mailtoLink = `mailto:jsa201897@gmail.com?subject=JSA - ${selectedValue}&body=${ebody}`;

  window.location.href = mailtoLink;
});
