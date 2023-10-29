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
    }
]
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
              <p class="card-text">"${student.house}</p>
              <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
            </div>
          </div>
        </div>`;
    })
    const app = document.querySelector("#app")
    app.innerHTML = domString;
}
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
  
  showGryffindorButton.addEventListener("click", () => handleFilterClick("gryffindor"));
  showHufflepuffButton.addEventListener("click", () => handleFilterClick("hufflepuff"));
  showRavenClawButton.addEventListener("click", () => handleFilterClick("ravenclaw"));
  showSlytherinButton.addEventListener("click", () => handleFilterClick("slytherin"));
  showAllStudentsButton.addEventListener("click", () => handleFilterClick("all"));