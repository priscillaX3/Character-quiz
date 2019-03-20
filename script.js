    $(".Ed").hide();
    $(".Edd").hide();
    $(".Eddy").hide();
    $(".Nazz").hide();
    $(".Ralph").hide();
    $(".May").hide();
    $(".Lee").hide();
    $(".Marie").hide();


$("button").click(function(){
    var iq = $("#iq").val();
    var height = $("#height").val();
    var gender=$("#gender").val(); 
    
    
    if(iq === "No" && gender === "Boy" && height === "Tall"){
        $(".Ed").show();
       
    }else if(iq ==="No" && gender === "Boy" && height === "Short"){
            $(".Eddy").show();
           
    }else if(iq === "Yes" && gender === "Boy" && height === "Tall"){
            $(".Ralph").show();
            
    }else if(iq === "Yes" &&  gender === "Boy" && height === "Short"){
            $(".Edd").show();
            
    }else if(iq ==="Yes"  && gender === "Girl" && height === "Tall"){
            $(".Lee").show();
            
    }else if(iq === "Yes"  && gender === "Girl" && height === "Short"){
            $(".Nazz").show();
            
    }else if(iq === "No"  && gender === "Girl" && height === "Tall"){
            $(".May").show();
            
    }else if(iq === "No"  && gender === "Girl" && height === "Short"){
            $(".Marie").show(); 
            
      }else{
            alert(" Gatcha ,try again");}
});
    
     
      







