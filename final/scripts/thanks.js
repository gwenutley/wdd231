export function createThanks() {
    /*check the data in the search for potential parameters*/
    const myInfo = new URLSearchParams(window.location.search);
    console.log(myInfo);

    /*use the url to get each parameter loged . . .
    http://127.0.0.1:5500/final/thanks.html?first=Gw&last=Ut&email=Gu%40gmail.com&phone=1231231234&Membership=Non-profit&Questions=djsk
    */
    console.log(myInfo.get('first'));
    console.log(myInfo.get('last'));
    console.log(myInfo.get('email'));
    console.log(myInfo.get('phone'));
    console.log(myInfo.get('age'));
    console.log(myInfo.get('program'));
    console.log(myInfo.get('questions'));


    /*print out the results on the screen*/
    const resultsContainer = document.querySelector('#results');

    if (resultsContainer) {
        resultsContainer.innerHTML =
            `<p>Registration completed for:<br> ${myInfo.get('first')} ${myInfo.get('last')}</p>
            <p>Contact Information:<br>email: ${myInfo.get('email')}<br> phone: ${myInfo.get('phone')}</p>
            <p>Selected program is: ${myInfo.get('program')} for ${myInfo.get('age')} year old.</p>`;
    }
}
        