function validation(){
    let isNameValid = collect_name();
    let isAgeValid = collect_age();
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
   console.log(name);
   return true;
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
     console.log(age);
   return true;
     
}



























// function validation(){
// var name = document.getElementById('Sname').value;
// var age = document.getElementById('SAge').value;
// var sdob = document.getElementById('dob').value; 
// var edt = document.getElementById('teacher').value; 


// if(name == ""){
//    document.getElementById('namee').innerHTML="**Please Write Valid Name";
//   return false;
// }
//   if(name.length<2){
//     document.getElementById('namee').innerHTML="**Please Write at least 4 charachter";
//         return false;
//   }
   

//   if(age == ""){
//     document.getElementById('Age').innerHTML="*Please fill the gaps";
//        return false; 
//        if(isNaN(age)) {
//         Document.getElementById('Age').innerHTML="*Please fill the gaps with number";
//        return false;
//        }
// }

//   if(sdob == ""){
//     document.getElementById('DOB').innerHTML="*Please fill the gaps";
//       return false;  
// }
//   if(edt == ""){
//     document.getElementById('tch').innerHTML="*Please fill the gaps";
//       return false;  
// }


// }