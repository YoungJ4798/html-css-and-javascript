let varUsername= document.getElementById("usname");
let varPassword= document.getElementById("pword");



function verCredentials(varUsername, varPassword){
if(varUsername=="220019479@edu.vut.ac.za" && varPassword=="admin"){
    console.log("Successfully logged in")
}
else{
    console.log("log in failed")
}
}

verCredentials();