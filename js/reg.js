const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            Swal.fire(
                'Opps..!',
                'Password not matching!',
                'error'
            );
        }
        else
        {
            Swal.fire(
                'Good job!',
                'Register successful!',
                'success'
            );
            setTimeout(()=>{
                    location.href='LoginBox.html';
                    },5000)
        }
    }
    else
    {
        Swal.fire(
            'Opps..!',
            'Input mim six digit password!',
            'error'
        );
    }
    }


}