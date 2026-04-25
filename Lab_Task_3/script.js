function validation(){
    let isNameValid = collect_name();
    let isAgeValid = collect_age();
    let isDOBValid = collect_dob();
    let isVarsityNValid = collect_varsity();
    
    return false;
}
function collect_name(){
    let name = document.getElementById("Sname").value;
    console.log(name);

    if(name == ""){
        document.getElementById("namee").innerHTML = "Please fill the gap";
         return false;
    }
     else if(name.length<5){
        document.getElementById("namee").innerHTML = "Please write at least 4 character";
      return false;
    }

    else{
      document.getElementById("namee").innerHTML = "";
      
    }
  return false;
}
function collect_age(){
    let age= document.getElementById("SAge").value;
    console.log(age);

    if(age == ""){
        document.getElementById("Age").innerHTML = "Please fill the gap";
        return false;
    }
    else if(isNaN(age)){
        document.getElementById("Age").innerHTML = "Please fill the gap with number";
        return false;
    }
    else{
         document.getElementById("Age").innerHTML = "";
     
    }
    
   return false;
     
}
function collect_dob(){
     var dob = document.getElementById('sdob').value;
     console.log(dob); 

if(dob ==""){
    document.getElementById("DOB").innerHTML="**Select the Date Properly" 
    return false;   
}
else{
     document.getElementById("DOB").innerHTML=""; 
    
}

return false;
}
function collect_varsity(){
     let varsity = document.getElementById("varsityName").value;
     console.log(varsity); 

if(varsity==""){
    document.getElementById("vtn").innerHTML="**Write your varsity name"; 
    return false;   
}
else{
     document.getElementById("vtn").innerHTML=""; 
    
}

return false;
}

























