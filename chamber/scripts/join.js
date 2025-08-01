/*timestamp for the form*/

const date = new Date();

const month = String(date.getMonth());
const day = String(date.getDay());
const year = String(date.getFullYear());

const hours = String(date.getHours());
const min = String(date.getMinutes());

document.querySelector('#timestamp').innerHTML = `${month}/${day}/${year} ${hours}:${min}`


/*check the data in the search for potential parameters*/
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

/*use the url to get each parameter loged . . . http://127.0.0.1:5500/chamber/thanks.html?first=Gwen&last=Utley&Organization=djks&email=dksaj%40gmial.com&phone=fdk&business=skdj&Membership=Bronze*/
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
document.querySelector('#results').innerHTML = `
<p>Membership for ${myInfo.get('first')} ${myInfo.get('last')} created.</p>
<p>Job organization: ${myInfo.get('organization')} for ${myInfo.get('business')}</p>
<p>Your Phone is ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>Your membership level is ${myInfo.get('membership')}</p>`



/*create the modal*/


document.addEventListener("DOMContentLoaded", () => {
    const modals = [
        {
            idButton: "nonprofit",
            idModal: "nonprofit-info",
            idClose: "closeNonprofit"
        },
        {
            idButton: "bronze",
            idModal: "bronze-info",
            idClose: "closeBronze"
        },
        {
            idButton: "silver",
            idModal: "silver-info",
            idClose: "closeSilver"
        },
        {
            idButton: "gold",
            idModal: "gold-info",
            idClose: "closeGold"
        }
    ];
    
    modals.forEach(({ idButton, idModal, idClose }) => {
        const button = document.getElementById(idButton);
        const modal = document.getElementById(idModal);
        const closeButton = document.getElementById(idClose);

        if (button && modal && closeButton) {
            button.addEventListener("click", () =>
                modal.showModal());
            closeButton.addEventListener("click", () =>
                modal.close());
        };
    });
});



/*
document.addEventListener("DOMContentLoaded", () => {
    const nonprofitButton = document.querySelector("#nonprofit");
    const modal = document.getElementById("nonprofit-info");
    const nonprofitCloseButton = modal.querySelector("#closeNonprofit");

    //open and close modals
    nonprofitButton.addEventListener("click", () => {
        modal.showModal();
    })

    //close the modal
    nonprofitCloseButton.addEventListener("click", () => {
        modal.close();
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const bronzeButton = document.querySelector("#bronze");
    const modal2 = document.getElementById("bronze-info");
    const bronzeCloseButton = modal2.querySelector("#closeBronze");

    //open and close modals
    bronzeButton.addEventListener("click", () => {
        modal2.showModal();
    })

    //close the modal
    bronzeCloseButton.addEventListener("click", () => {
        modal2.close();
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const silverButton = document.querySelector("#silver");
    const modal3 = document.getElementById("silver-info");
    const silverCloseButton = modal3.querySelector("#closeSilver");

    //open and close modals
    silverButton.addEventListener("click", () => {
        modal3.showModal();
    })

    //close the modal
    silverCloseButton.addEventListener("click", () => {
        modal3.close();
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const goldButton = document.querySelector("#gold");
    const modal4 = document.getElementById("gold-info");
    const goldCloseButton = modal4.querySelector("#closeGold");

    //open and close modals
    goldButton.addEventListener("click", () => {
        modal4.showModal();
    })

    //close the modal
    goldCloseButton.addEventListener("click", () => {
        modal4.close();
    })
});
*/



