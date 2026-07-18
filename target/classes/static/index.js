// alert("this web might be malicious")
console.log("hello from js ");

var users=[
    {
        "name":"john doe",
        "gender":"male",
        "img":"john.png"

    },
    {
        "name":"jane doe",
        "gender":"female",
        "img":"jane.png"
    }
]
var id = 0;
function toggleuser(){
    id=(id+1)%2
}
var userImage=document.getElementById("user-image");
userImage.src= users[id].img;
var userName=document.getElementById("user-name");
userName.innerHTML= users[id].name;
var userGender=document.getElementById("user-gender");   
userGender.innerHTML= users[id].gender;
