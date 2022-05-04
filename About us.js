function myFunction() {
    var x =  document.getElementById("Text1").value;
    var y =  document.getElementById("Text2").value;
    var z =  document.getElementById("Text3").value;
    var t =  document.getElementById("Text4").value;
    if (x==""){
        alert("Name can't be blank");  
        return false;  
    }
else if(y==""){
    alert("address can't be blank");  
        return false;  
}else if(isNaN(z)|| z.length<11){
    alert("phone cannot be blank and less than eleven digits");  
        return false; 
}else if(t==""){
        alert("question can't be blank");  
}else{location.href="mailto:username@hotmail.com"}
document.getElementById("demo").innerHTML = greeting;
}