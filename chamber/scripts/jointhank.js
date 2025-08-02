/*check the data in the search for potential parameters*/
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

/*use the url to get each parameter loged . . .
http://127.0.0.1:5500/chamber/thanks.html?first=Gwen&last=Utley&Organization=djks&email=dksaj%40gmial.com&phone=fdk&business=skdj&Membership=Bronze*/
/*
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('business'));
console.log(myInfo.get('membership'));
*/

/*print out the results on the screen*/
const resultsContainer = document.querySelector('#results');

if (resultsContainer) {
    resultsContainer.innerHTML =
        `<p>Membership for ${myInfo.get('first')} ${myInfo.get('last')} created.</p>
        <p>Job organization: ${myInfo.get('organization')} for ${myInfo.get('business')}</p>
        <p>Your Phone is ${myInfo.get('phone')}</p>
        <p>Your email is ${myInfo.get('email')}</p>
        <p>Your membership level is ${myInfo.get('membership')}</p>`;
}