//Validate Function
function Validation()
{
    let username = document.getElementById('name').value;
    let emailuser = document.getElementById('email');
    if (username == '' || username == null)
        {
            document.getElementById('name').style.border='2px solid red';
            //alert('Your input is empty, please check again');
        }
    else if (emailuser.value == '' || emailuser.value == null)
        {
            emailuser.style.border='2px solid red';
        }
    else
    {   
        //console.log(username);
        //console.log(emailuser.value);
        alert('Your input has been sent successfully')
    }
        
}

document.getElementById('send-btn').addEventListener('click', () => Validation())