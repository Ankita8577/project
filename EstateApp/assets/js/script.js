const form = document.querySelector("form");
uField = form.querySelector(".name"),
uInput = form.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");



form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  
 
    alert("Reistration Successfull");

  //if email and password is blank then add shake class in it else call specified function
  (uInput.value == "") ? uField.classList.add("shake", "error") : checkName();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
 

  setTimeout(()=>{ //remove shake class after 500ms
    uField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  uInput.onkeyup = ()=>{checkName();}
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup


  
  function checkName(){ //checkEmail function
    let pattern = /^[a-zA-Z ]{6,}$/; //pattern for validate email
    if(!uInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      uField.classList.add("error");
      uField.classList.remove("valid");
      let errorTxt = uField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (uInput.value != "") ? errorTxt.innerText = "Enter a valid User Name" : errorTxt.innerText = "Name can't be blank";
    }else{ //if pattern matched then remove error and add valid class
    uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //checkPass function
    if(!pInput.value.match(pattern)){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (pInput.value != "") ? errorTxt.innerText = "Enter a valid pass" : errorTxt.innerText = "pass can't be blank";
 
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}