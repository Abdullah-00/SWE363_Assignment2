var entryVal = function() {
    $('form').submit(function(event){
        var $name = $(event.target).find("#name").val();
        var $regName = /[A-Za-z]/;
        
        var $email = $(event.target).find("#email").val();
        var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if (regName.test(name) && regEmail.test(email))
            alert("successful");
        else
            document.getElementById("msg").value = "Wrong Input";
    })
}



$(document).ready(entryVal);   