/*check the data in the search for potential parameters*/

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);


/*use the url to get each parameter loged . . . http://127.0.0.1:5500/startHere/thanks.html?first=Gwen&last=Utley&phone=1229389282&email=df%40gmail.com&ordinance=Baptism&date=2025-07-10&location=Provo+City+Center*/
/*this can be commented out after all infois displayed
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
*/

/*print out the results on the screen*/
document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} temple</p>
<p> Your Phone is ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>`