if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
}
let btn = document.querySelector('#btn_add');

btn.addEventListener('click', function () {
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;    
    let userdata = JSON.parse(localStorage.getItem('users'))
    let newuser = userdata.find((user)=> user.Email === email || user.Name===username);
    console.log(userdata);
    if (newuser == undefined) {
        userdata.push({
            Name: username,
            Email: email,
            Password: password
        })
        localStorage.setItem('users', JSON.stringify(userdata))
        alert(`${username} siz qeydiyyatinizi ugurla bitirdiniz`)
        console.log(username);
    }
    else{
        alert(`${username} adda istifadeci artiq movcuddur!`)
     }
    })