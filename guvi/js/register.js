let submit = document.querySelector('.btn-primary');
let error = document.querySelector('.error-message');

submit.addEventListener('click', function(e){
    e.preventDefault();
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let contactnumber = $('#contactnumber').val();
    let password = $("#password").val();
    let confirmpassword = $("#confirmpassword").val();

   
    if(password != confirmpassword){
        alert('password does not match');
    }
    else if(firstname =='' || lastname =='' ||  email =='' || contactnumber == '' || password =='' || confirmpassword ==''){
        alert('please fill all fields');
    }
    else{
        $.ajax({
            url:"/guvi/php/register.php",
            type:'post',
            data: {
                firstname: firstname,
                lastname:lastname,
                email:email,
                contactnumber:contactnumber,
                password:password,
                confirmpassword:confirmpassword
            },
            async:true,
            success:function(response){
                if(response == 1){
                   alert("registered successfully...");
                   document.getElementById("form").reset();
                }
                else{
                    alert("Email already exists...please try another email");
                }
            }
        });
        
    }
});