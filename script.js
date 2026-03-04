
let userEmailInput = document.getElementById('user-email');
let userPasswardInput = document.getElementById('user-passward');
let loginBtn = document.getElementById('login-btn');



loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let userEmail = userEmailInput.value.trim();
    let userPassward = userPasswardInput.value.trim();

    if (!userEmail || !userPassward) {
         Swal.fire({
            title: "ENTER YOUR EMAIL & PASSWARD",
            // text: "CREAT YOUR ACCOUNT",
            icon: "question",
            theme:'dark'
        });
        userEmailInput.focus();
        return;
    };

    let getLocalData = JSON.parse(localStorage.getItem('allUser')) || [];
    

    let checkEmail = getLocalData.some(user => user.idemail === userEmail);
    let checkPassward = getLocalData.some(user => user.emailPasward === userPassward);

    if (checkEmail && checkPassward) {
        window.location.href = "postpage.html";
    } else {
        Swal.fire({
            title: "Your Account Not Found",
            text: "CREAT YOUR ACCOUNT",
            icon: "question",
            theme:'dark'
        });
    };
    

});



