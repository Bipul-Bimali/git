
function Validate() {
        if(validateall([        
            ()=>fname_validation(),
            ()=>lname_validation(),
            ()=>email_validation(),
            ()=>date_validation(),
            ()=>phone_validation(),
            ()=>message_validation()])){
                email()
                document.getElementById("contact").submit()
            }
            else{
                alert("validation error")
            }
}
function validateall(validations){
    for ( validation of validations){
        if(!validation()){
            return false
        }
    } 
    return true   
}
function fname_validation(){
    const fname = document.getElementById("Fname")
    if(fname.value.length<5){
        alert("First name should be at least 5 characters")
        return false
    }
    return true
}
function lname_validation(){
    const lname = document.getElementById("Lname")
    if(lname.value.length<5){
        alert("Last name should be at least 5 characters")
        return false
    }
    
    return true
}
function email_validation(){
    const email = document.getElementById("email")
    if(!email.value.includes("@")){
        alert("email should contain domain name(with '@' )")
        return false
    }
    
    return true
}
function date_validation(){
    const date = document.getElementById("date")
    
    return true
}
function phone_validation(){
    const phone = document.getElementById("phone")
    if(!(parseInt(phone.value)>999999999 && parseInt(phone.value)<10000000000)){
        alert("Phone must contain 10 digits")
        return false
    }

    return true
}
function message_validation(){
    const Message = document.getElementById("message")
    if(Message.value.length<50){
        alert("Message must be atleast 50 alphabets")
        return false
    }
    
    return true
}
function email(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bimalibipul@gmail.com",
        Password : "ADB0A7E358CA0D28CCC386D5C50D99988AEA",
        To : document.getElementById('email').value,
        From : 'bimalibipul@gmail.com',
        Subject : "Message sent",
        Body : "Fullname: "+document.getElementById("Fname").value+" "+ document.getElementById("Lname").value+"<br>Email: "+document.getElementById("email").value+"<br>Date: "+document.getElementById("date").value+"<br>Phone: "+document.getElementById("phone").value+"<br>Message: "+document.getElementById("message").value
    }).then(
    message => alert("mail Sent")
    );
}