const pswrdfield = document.querySelector(".data .form input[type='password']"),
toggleBtn = document.querySelector(".data .form i");

toggleBtn.onclick = ()=>{
    if (pswrdfield.type =="password"){
        pswrdfield.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswrdfield.type = "password";
        toggleBtn.classList.remove("active");
    }
}

const pswrdfield2 = document.querySelector(".box .form-signup .passcode input[type='password']"),
toggleBtn2 = document.querySelector(".box .form-signup .passcode i");

toggleBtn2.onclick = ()=>{
    if (pswrdfield2.type =="password"){
        pswrdfield2.type = "text";
        toggleBtn2.classList.add("active");
    }else{
        pswrdfield2.type = "password";
        toggleBtn2.classList.remove("active");
    }
}