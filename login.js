

    function register(){
        
        var x = new Array();
        
        x[0] = document.getElementById("na").value; 
        x[1] = document.getElementById("na2").value;
        x[2] = document.getElementById("na3").value;
        x[3] = document.getElementById("na4").value;
        x[4] = document.getElementById("na5").value;
        x[5] = document.getElementById("na6").value;
        x[6] = document.getElementById("sele").value;
        x[7] = document.getElementById("month").value;
        
        var h = new Array(); 
        h[0] = "<span style='color:red;'>please type your first  name!</span>";
         h[1] = "<span style='color:red;'>please type your other name!</span>";
          h[2] = "<span style='color:red;'>please type your last name!</span>";
         h[3] = "<span style='color:red;'>please type your mother maiden name!</span>";
         h[4] = "<span style='color:red;'>please enter your phone number!</span>";
         h[5] = "<span style='color:red;'>please enter your email address!</span>";
         h[6] = "<span style='color:red;'>please enter a password!</span>";
         h[7] = "<span style='color:red;'>confirm your password!</span>";
        
        var divs = new Array("juname", "juother", "julast", "jumother", "junum", "juemail", "jupass", "jupast"); 
        
         for(i in x){
            
            var error = h[i];
            var div = divs[i];
             
            if(x[i]==""){
            
                document.getElementById(div).innerHTML = "error";
             }else{
             
               document.getElementById(div).innerHTML = "Ok!";
             } 
            
            
        }
        
    } 
function pas(){
     var first = document.getElementById('password').value;
     var second = document.getElementById('cpassword').value;
     
     if(second==first){
         document.getElementById('mcpassword').innerHTML = "ok";
         
    }else{
         document.getElementById('mcpassworld').innerHTML = "<span style='color:red'>your password don't match!</span>";
    }
    
}