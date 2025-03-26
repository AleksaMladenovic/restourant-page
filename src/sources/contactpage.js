import contact from "../imgs/contact.avif";

export function runContactpage() {
  document
    .querySelector("div.buttons button:nth-child(3)")
    .classList.add("activeBtn");

  const divContent = document.querySelector(".content");
  divContent.innerHTML = "";

  //div mainSlide
  const divMainSlide = document.createElement("div");
  divMainSlide.classList.add("mainSlide");

  const divMainImage = document.createElement("div");
  divMainImage.classList.add("mainImage");
  divMainSlide.appendChild(divMainImage);

  const imgContact = document.createElement("img");
  imgContact.setAttribute("src", contact);
  divMainImage.appendChild(imgContact);

  const divWelcomeText = document.createElement("div");
  divWelcomeText.classList.add("welcomeText");
  const pContact = document.createElement("p");
  pContact.classList.add("contact");
  pContact.textContent = "Contact";

  divWelcomeText.appendChild(pContact);
  divMainSlide.appendChild(divWelcomeText);

  divContent.appendChild(divMainSlide);
  //Abouth us
  const divAbouth = document.createElement("div");
  divAbouth.className = "textAbouthUs";
  divContent.appendChild(divAbouth);

  const divChefText = document.createElement("div");
  divChefText.className = "chefText";
  divChefText.textContent = "CONTACT US";
  divAbouth.appendChild(divChefText);

  //Form div
  const formDiv = document.createElement("div");
  formDiv.className = "formDiv";
  
  const form = document.createElement("form");
  formDiv.appendChild(form);

  let lbl = document.createElement("label");
  lbl.setAttribute("for","name");
  lbl.textContent = "Name:*";
  form.appendChild(lbl);

  let input = document.createElement("input");
  input.setAttribute("type","text");
  input.setAttribute("id","name");
  input.setAttribute("name","name");
  input.setAttribute("required","");
  form.appendChild(input);

  lbl = document.createElement("label");
  lbl.setAttribute("for","email");
  lbl.textContent = "Email:*";
  form.appendChild(lbl);
  

  input = document.createElement("input");
  input.setAttribute("type","email");
  input.setAttribute("id","email");
  input.setAttribute("name","email");
  input.setAttribute("required","");
  form.appendChild(input);

  lbl = document.createElement("label");
  lbl.setAttribute("for","phone");
  lbl.textContent = "Phone:*";
  form.appendChild(lbl);
  

  input = document.createElement("input");
  input.setAttribute("type","tel");
  input.setAttribute("id","phone");
  input.setAttribute("name","phone");
  input.setAttribute("required","");
  form.appendChild(input);
  
  lbl = document.createElement("label");
  lbl.setAttribute("for","Help");
  lbl.textContent = "How can i help you:";
  form.appendChild(lbl);

  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "Help");
  textarea.setAttribute("required", "");
  form.appendChild(textarea);


  input = document.createElement("input");
  input.setAttribute("type","checkbox");
  input.setAttribute("id","policy");
  input.setAttribute("name","policy");
  input.setAttribute("required","");
  form.appendChild(input);

  lbl = document.createElement("label");
  lbl.setAttribute("for","policy");
  lbl.textContent = "I agree the privacy policy";
  form.appendChild(lbl);

  const button = document.createElement("button");
  button.textContent = "SEND";
  form.appendChild(button);

  divContent.appendChild(formDiv);
  
}
