//interactive hamburger menu for the navigation
const menuButton = document.querySelector('#menu');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
})


// course array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


//course filter and display
const display = document.querySelector("#course-display");

function showCourses(array) {
    display.innerHTML = "";

    array.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.classList.add(course.completed ? "completed" : "incomplete");
        if (!course.completed) {
            courseElement.id = "incomplete";
        }

        const span = document.createElement("span");
        span.textContent = `${course.subject} ${course.number}`;

        courseElement.appendChild(span);
        

    display.appendChild(courseElement);
    });
}

/*count number of courses*/
const courseNum = document.querySelector("#course-number");

function countCourses(subject) {
    if (subject === "all") {
        return courses.length;
    }

    return courses.filter(course => course.subject === subject).length;
}


function filterCourses(subject) {
    let filtered;

    if (subject === "all") {
        filtered = courses;
    } else {
        filtered = courses.filter(course => course.subject === subject);
    }

    let count = countCourses(subject);
    courseNum.innerHTML = `The total number of courses listed above is <b>${count}</b>`;

    showCourses(filtered);
}


const allCourses = document.querySelector("#all").addEventListener('click', () => filterCourses("all"));
const cseCourses = document.querySelector("#cse").addEventListener('click', () => filterCourses("CSE"));
const wddCourses = document.querySelector("#wdd").addEventListener('click', () => filterCourses("WDD"));

