import course from './byuiCourse.js';

const modal = document.getElementById("course-details");
const button = document.querySelector("#view");

function displayCourseDetails(course) {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;

    modal.showModal();

    const close = document.querySelector("#closeModal");
    close.addEventListener("click", () => {
        modal.close();
    });
}

button.addEventListener('click', () => {
    displayCourseDetails(course);
});

