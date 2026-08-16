// const btn = document.getElementById("submit-btn");
// const marksInput = document.getElementById("marks");
// const marksValue = document.getElementById("marks-value");

// if (marksInput && marksValue) {
//     marksInput.addEventListener("input", function () {
//         marksValue.innerText = marksInput.value;
//     });
// }

// function getStudentData() {
//     const name = document.getElementById("name")?.value.trim() || "--";
//     const roll = document.getElementById("roll-number")?.value.trim() || "--";
//     const email = document.getElementById("email")?.value.trim() || "--";
//     const mobile = document.getElementById("mobile-number")?.value.trim() || "--";
//     const age = document.getElementById("age")?.value.trim() || "--";
//     const gender = document.querySelector('input[name="gender"]:checked')?.value || "--";
//     const courses = Array.from(document.querySelectorAll('input[name="course"]:checked')).map(item => item.value);
//     const marks = document.getElementById("marks")?.value || "--";

//     return { name, roll, email, mobile, age, gender, courses, marks };
// }

// function saveStudentData() {
//     const studentData = getStudentData();
//     localStorage.setItem("studentData", JSON.stringify(studentData));
//     window.location.href = "output.html";
// }

// function showStudentCard() {
//     const cardName = document.getElementById("cardName");
//     if (!cardName) return;

//     const storedData = JSON.parse(localStorage.getItem("studentData") || "null");
//     if (!storedData) return;

//     document.getElementById("cardName").innerText = storedData.name || "Student Name";
//     document.getElementById("cardRoll").innerText = `Roll No: ${storedData.roll}`;
//     document.getElementById("cardEmail").innerText = `Email: ${storedData.email}`;
//     document.getElementById("cardMobile").innerText = `Mobile Number: ${storedData.mobile}`;
//     document.getElementById("cardAge").innerText = `Age: ${storedData.age}`;
//     document.getElementById("cardGender").innerText = `Gender: ${storedData.gender}`;
//     document.getElementById("cardCourse").innerText = `Course: ${storedData.courses.length ? storedData.courses.join(", ") : "--"}`;
//     document.getElementById("cardMarks").innerText = `Marks: ${storedData.marks}`;
// }

// if (btn) {
//     btn.addEventListener("click", saveStudentData);
// }

// showStudentCard();


const btn = document.getElementById("submit-btn");

const marksInput = document.getElementById("marks");
const marksValue = document.getElementById("marks-value");


// Marks slider
if (marksInput && marksValue) {

    marksInput.addEventListener("input", function () {

        marksValue.innerText = marksInput.value;

    });

}


// Image ne Base64 ma convert karva mate
function fileToBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);

    });

}


// Student data levanu
async function getStudentData() {

    const name =
        document.getElementById("name")?.value.trim() || "--";

    const roll =
        document.getElementById("roll-number")?.value.trim() || "--";

    const email =
        document.getElementById("email")?.value.trim() || "--";

    const mobile =
        document.getElementById("mobile-number")?.value.trim() || "--";

    const age =
        document.getElementById("age")?.value.trim() || "--";


    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        )?.value || "--";


    const courses =
        Array.from(
            document.querySelectorAll(
                'input[name="course"]:checked'
            )
        ).map(item => item.value);


    const marks =
        document.getElementById("marks")?.value || "--";


    // User ni image levani
    const photoInput =
        document.getElementById("student-photo");

    let photo = "";


    if (photoInput && photoInput.files.length > 0) {

        photo = await fileToBase64(
            photoInput.files[0]
        );

    }


    return {
        name,
        roll,
        email,
        mobile,
        age,
        gender,
        courses,
        marks,
        photo
    };
}


// Data save karvanu
async function saveStudentData() {

    const studentData = await getStudentData();


    localStorage.setItem(
        "studentData",
        JSON.stringify(studentData)
    );


    window.location.href = "output.html";
}


// Output page par student card show karvanu
function showStudentCard() {

    const cardName =
        document.getElementById("cardName");


    if (!cardName) return;


    const storedData =
        JSON.parse(
            localStorage.getItem("studentData") || "null"
        );


    if (!storedData) return;


    document.getElementById("cardName").innerText =
        storedData.name || "Student Name";


    document.getElementById("cardRoll").innerText =
        `Roll No: ${storedData.roll}`;


    document.getElementById("cardEmail").innerText =
        `Email: ${storedData.email}`;


    document.getElementById("cardMobile").innerText =
        `Mobile Number: ${storedData.mobile}`;


    document.getElementById("cardAge").innerText =
        `Age: ${storedData.age}`;


    document.getElementById("cardGender").innerText =
        `Gender: ${storedData.gender}`;


    document.getElementById("cardCourse").innerText =
        `Course: ${
            storedData.courses.length
                ? storedData.courses.join(", ")
                : "--"
        }`;


    document.getElementById("cardMarks").innerText =
        `Marks: ${storedData.marks}`;


    // Image show karvi
    const cardPhoto =
        document.getElementById("cardPhoto");


    if (cardPhoto && storedData.photo) {

        cardPhoto.src = storedData.photo;

    }

}


// Submit button
if (btn) {

    btn.addEventListener("click", saveStudentData);

}


// Output page load thay tyare
showStudentCard();