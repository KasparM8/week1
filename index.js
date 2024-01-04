const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");


const isMafia = confirm("Are you in the mafia?");
console.log(typeof isMafia)
if(isMafia === true) {
    console.log ("Welcome to the family!")
}
else {
    console.log("Kgit ieep walking then buddy!");
    profileImage.src = "images/image2.webp";
    firstNameSpan.innerHTML = "Arthur Bucco";
    ageSpan.innerHTML = "46";
    statusSpan.innerHTML = "a decent citizen (chef)";
}

btnUpdateProfile.addEventListener("click", () => { 
    console.log("clicked");
    profileImage.src = "images/image5.jpg";
    firstNameSpan.innerHTML = "Peter Griffin";
    ageSpan.innerHTML = "46";
    statusSpan.innerHTML = "a family guy";
});