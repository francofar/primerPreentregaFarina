document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('loginButton').addEventListener('click', login);
    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility)
});

function togglePasswordVisibility(){
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');

    if(togglePasswordVisibility.type === 'password'){
        passwordInput.type = 'text';
        toggleIcon.textContent = "**"
    }else{
        passwordInput.type = 'password';
        toggleIcon.textContent = '*'
    }
}

function login(){
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if(userName && password){
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);

        Swal.fire({
            title: "Ingreso exitoso",
            icon: "success",
            confirmButtonText: "Aceptar",
        }).then((result) => {
            if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                window.location.href = "./pages/inicio.html";
            }
        });


    }else{
        alert('los datos no son correctos')

    }
}