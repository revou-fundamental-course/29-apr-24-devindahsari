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

//init
let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    console.log('nextSlide' + n)
    showSlide(indexSlide += n);
}
//Slide Logic
function showSlide(index){
    let listImage = document.getElementsByClassName('mySlide');
    
    //Reset slide index
    if (index > listImage.length) indexSlide = 1;

    //Hide all image
    let i = 0;
    while (i < listImage.length){
        listImage[i].style.display = 'none';
        i++;
    }

    //Show only one image
    listImage[indexSlide - 1].style.display= 'block';
}

setInterval(() => nextSlide(1),2000);