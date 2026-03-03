
const formReg = document.querySelector('#reg-form');

// 1 addeventlistener
formReg.addEventListener('submit', (e)=>{
    e.preventDefault();

    // get the values
    const firstNameInput = document.getElementById('fname');
    let namefirst = firstNameInput.value.trim();
    let namelast = document.getElementById('lname').value.trim();
    let idemail = document.getElementById('email').value.trim();
    let emailPasward = document.getElementById('password').value.trim();

    // validate all field are filled
    if (!namefirst ||  !namelast || !idemail || !emailPasward){
        Swal.fire({
            title: "ALL FIELDS ARE REQUIRED",
            // text: "CREAT YOUR ACCOUNT",
            icon: "question",
            theme:'dark'
        });
        formReg.reset();
        firstNameInput.focus();
        return;
    };

    // Retrieve the DATA FROM LOCAL STORGE

    const storadData = JSON.parse(localStorage.getItem('allUser')) || [];

    // check if user already registered
    let userExists = storadData.some(user => user.idemail === idemail);

    if(userExists){
        alert ('EMAIL ALREADY EXISTS')
        formReg.reset();
       firstNameInput.focus()
        return;
    }

    // creat new user object

    const userNew = {
        namefirst,
        namelast,
        idemail,
        emailPasward,
        id : Date.now()
    };

    // PUSH THE OBJECT TO  ARRAY
     
    storadData.push(userNew);

    // SAVE DATA OT LOCALSTORAGE

    localStorage.setItem('allUser', JSON.stringify(storadData));


    formReg.reset();
    firstNameInput.focus();

})
// localStorage.removeItem('allUser')

















/*


const registrationForm = document.getElementById('reg-form');


registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the inputValues

    let firstName = document.getElementById('fname').value.trim();
    let lastName = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if(!firstName || !lastName || !email || !password) {
        alert('ALL FEILED REQUIRED')
    };

    let userData = JSON.parse(localStorage.getItem('allUser')) || [];

    let userExists = userData.some(user => user.email === email);
        if(userExists) {
        alert('EMAIL EXISTS');
        registrationForm.reset();
        return;
        };

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            id: Date.now()
        };

        userData.push(newUser);

        localStorage.setItem('allUser', JSON.stringify(userData));
        registrationForm.reset();   

    
});


*/


// localStorage.clear();

















// const registrationForm = document.getElementById('reg-form');

// registrationForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // 1. Get current values from the form
//     const firstName = document.getElementById('fname').value.trim();
//     const lastName = document.getElementById('lname').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;

//     // 2. Validation Logic
//     // Check if any field is empty
//     if (!firstName || !lastName || !email || !password) {
//         alert('All fields are required!');
//         return; // Stop execution
//     }

//     // Retrieve existing users
//     let usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

//     // Check if email already exists
//     const userExists = usersList.some(user => user.email === email);
//     if (userExists) {
//         alert('This email is already registered.');
//         registrationForm.reset();
//         return;
//     }

//     // 3. Create and Save the new user
//     const newUser = {
//         firstName,
//         lastName,
//         email,
//         password,
//         id: Date.now() 
//     };

//     usersList.push(newUser);
//     localStorage.setItem('allUsers', JSON.stringify(usersList));

//     alert('User registered successfully! Total users: ' + usersList.length);
//     registrationForm.reset();
// });

/*

const registrationForm = document.getElementById('reg-form');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // 1. Get current values from the form
    const newUser = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        id: Date.now() // Unique ID based on timestamp
    };

    // 2. Retrieve existing users OR start with an empty array if none exist
    // We use JSON.parse to turn the string back into a JavaScript Array
    let usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

    // 3. Add the new user object to our array
    usersList.push(newUser);

    // 4. Save the updated array back to LocalStorage
    localStorage.setItem('allUsers', JSON.stringify(usersList));

    alert('User registered successfully! Total users: ' + usersList.length);
    // registrationForm.reset();
});

*/
// localStorage.clear();