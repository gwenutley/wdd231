export function createRegister() {
    /*display the modal boxes and */
    const openModals = [
        { open: "young", dialog: "young-info", close: "young-button" },
        { open: "middle", dialog: "middle-info", close: "middle-button" },
        { open: "old", dialog: "old-info", close: "old-button" },
        { open: "private", dialog: "private-info", close: "private-button" }
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


    /*create checkboxes of programs based on age selection*/

    const ageOptions = {
        "10-12": ["Endurance Training", "Exceleration and Speed", "Skill Training"],
        "13-17": ["Endurance Training", "Exceleration and Speed", "Skill Training", "Strength Training", "Mental Training", "Recovery Education", "Performance Testing"],
        "18-20": ["Endurance Training", "Exceleration and Speed", "Skill Training", "Strength Training", "Mental Training", "Sports Nutrition", "Recovery Education", "Performance Testing"],
        "private": ["Endurance Training", "Exceleration and Speed", "Skill Training", "Strength Training", "Mental Training", "Sports Nutrition", "Recovery Education", "Performance Testing"]
    };

    const selectedAge = document.getElementById("agegroup");
    const container = document.getElementById("container");

    selectedAge.addEventListener("change", function () {
        const selected = this.value;
        container.innerHTML = "";


        if (ageOptions[selected]) {
            ageOptions[selected].forEach(option => {
                const label = document.createElement("label");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = option;
                checkbox.name = "program";
                label.appendChild(checkbox);
                label.append(" " + option);
                container.appendChild(label);
                container.appendChild(document.createElement("br"));
            });
        }
    })
}
