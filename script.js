
function Calculate()
{
    
const first1 = document.getElementById('firstname1'); 
const first2 = document.getElementById('firstname2'); 
const error = document.getElementById('error');
const answer = document.getElementsByClassName('heading');

if(first1.value == '' || first2.value == '')
{
    error.style.visibility = 'visible';
    error.innerText = "Invalid Name";

}
else
{
    var love = Math.ceil(Math.random() *100);
    answer[0].innerText = love + '%';
    answe[0].style.visibility = 'visible';

}

}

