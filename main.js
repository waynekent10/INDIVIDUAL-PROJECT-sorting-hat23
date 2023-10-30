const students = [
  {
    id: 1,
    name: "Kang the Conqueror",
    house: "gryffindor",
  },
  {
    id: 2,
    name: "Victor Timely",
    house: "hufflepuff",
  },
  {
    id: 3,
    name: "Immortus",
    house: "ravenclaw",
  },
  {
    id: 4,
    name: "RamaTut",
    house: "slytherin",
  },
];
//TODO: Get the card on the DOM
//Function to render cards to the DOM that takes an array
const renderToDom = (students) => {
  let domString = "";
  students.forEach((student) => {
    domString += `<div class="card mb-3" style="max-width: 18rem;">
        <div class="row g-0">
          <div class="col-md-4">
           <img src="..." class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
            </div>
          </div>
        </div>
        </div>`;
  })
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};
renderToDom(students);

//TODO: Create filter function

const showGryffindorButton = document.querySelector("#gryffindor");
const showHufflepuffButton = document.querySelector("#hufflepuff");
const showRavenClawButton = document.querySelector("#ravenclaw");
const showSlytherinButton = document.querySelector("#slytherin");
const showAllStudentsButton = document.querySelector("#allStudents");

const filter = (array, houseString) => {
  const studentsArray = [];

  for (const students of array) {
    if (students.house === houseString) {
      studentsArray.push(students);
    }
  }
  return studentsArray;
};
//SIMPLIFIED CODE
// THE HANDLECLICK FUNCTION TAKES TYPE AND USES IT AS AN ARGUEMENT

function handleFilterClick(house) {
  const filteredStudents = house === "all" ? students : filter(students, house);
  renderToDom(filteredStudents);
}

showGryffindorButton.addEventListener("click", () =>
  handleFilterClick("gryffindor")
);
showHufflepuffButton.addEventListener("click", () =>
  handleFilterClick("hufflepuff")
);
showRavenClawButton.addEventListener("click", () =>
  handleFilterClick("ravenclaw")
);
showSlytherinButton.addEventListener("click", () =>
  handleFilterClick("slytherin")
);
showAllStudentsButton.addEventListener("click", () => handleFilterClick("all"));

//creates the form and places form on the dom
const form = document.querySelector("form");

const createStudent = (e) => {
  e.preventDefault();
 //array for assigning houses
  let houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random() * houses.length)],
  };
  students.push(newStudentObj);
  console.log(students.length);
  renderToDom(students);
  form.reset();
};

form.addEventListener("submit", createStudent);


const voldemort = [];

const expelledToDom = (array) => {
    let domString ="";

    for(const removed of array) {
        domString += `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${removed.name}</p>
  </div>
</div>`
    }
const voldemortDiv = document.querySelector("#voldemort");
voldemortDiv.innerHTML = domString
};

const expelButton = document.querySelector("#hogwarts");

expelButton.addEventListener('click', (e) => {

    if (e.target.id.includes("expel")) {
        const[,id] = e.target.id.split("--");
        const index = students.findIndex(e => e.id === Number(id));
        const removed = students.splice(index, 1);
        voldemort.push(removed[0]);
        renderToDom(students);
        console.log("do I work")
        expelledToDom(voldemort);
    }
})
