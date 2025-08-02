/*timestamp for the form*/

const date = new Date();

const month = String(date.getMonth() + 1);
const day = String(date.getDate());
const year = String(date.getFullYear());

const hours = String(date.getHours());
const min = String(date.getMinutes());

document.querySelector('#timestamp').innerHTML = `${month}/${day}/${year} ${hours}:${min}`



/*display the modal boxes and */
const openModals = [
    { open: "nonprofit", dialog: "np-info", close: "np-close-button" },
    { open: "bronze", dialog: "bronze-info", close: "bronze-close-button" },
    { open: "silver", dialog: "silver-info", close: "silver-close-button" },
    { open: "gold", dialog: "gold-info", close: "gold-close-button" }
];

openModals.forEach(({ open, dialog, close }) => {
    const openModal = document.getElementById(open);
    const modal = document.getElementById(dialog);
    const closeModal = document.getElementById(close);

    openModal.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal.addEventListener("click", () => {
        modal.close();
    });
});



