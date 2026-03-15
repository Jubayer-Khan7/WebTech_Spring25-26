function validation{
    let isFNameValid = collect_name();
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