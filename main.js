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

//empty array for volde's army
const volde = [];
//TODO WELCOME PAGE

//RenderToDom function 
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//TODO: Get the card on the DOM
const cardsOnDom = (array) => {
  let domString = "";

  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
      <p class="card-text">${student.house}</p>
    </div>
    <button id="expel--${student.id}" class="btn btn-primary">Expel</button>
  </div>`;
  }

  renderToDom("#app", domString)
document.querySelector("#app").addEventListener("click", expelStudent);

};
// const submitButton = document.querySelector("button[type='submit']");
// submitButton.addEventListener("click", () => {
//   cardsOnDom(students);
// });
//Welcome page function will be around the form to create the start process
// const beginBtn = document.querySelector("#begin");
// beginBtn.addEventListener('click',() => {})

  const form = document.querySelector('form');

//function to create a new student
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
   cardsOnDom(students);
    form.reset();
  };
  
  form.addEventListener("submit", createStudent);


// get form on dom
const formOnDom = () => {
  domString = "";
domString += 
`<form id="begin">
<div class="mb-3 row">
            <label for="floatingInput" class="col-sm-2 col-form-label">Enter your Name:</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
</form>`

renderToDom("#form", domString);
};

//Function to get the forms with a button click
const getFormButton = document.querySelector("#sort");

getFormButton.addEventListener('click', () => {
  formOnDom()
})


// ;

//TODO: expel button event listener

//TODO: expelled cards on dom
const expelledCardsOnDom = (array) => {
  let domString = "";

  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
    </div>
  </div>`;
}
renderToDom("#voldesquad", domString);
};  
//expel student function that moves expelled students into the volde array.
//Creating the function called expel student
const expelStudent = (e) => {
//looks to target the button that has expel in it
  if (e.target.id.includes("expel")) {
    //takes the id and splits it into two pieces where there are 2dashes, takes the second piece which becomes unique and stores it as an id
    const[, id] = e.target.id.split("--");
    //this goes through the list of students who matches the id
    const index = students.findIndex(e => e.id === Number(id));
    //this removes the student from the list of students and places it in removed
    const removed = students.splice(index, 1);
    //then the student that was removed goes into the new array called volde
    volde.push(removed[0]);
    cardsOnDom(students)
    expelledCardsOnDom(volde);
  }
}

cardsOnDom(students)




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
// //SIMPLIFIED CODE
// // THE HANDLECLICK FUNCTION TAKES TYPE AND USES IT AS AN ARGUEMENT

function handleFilterClick(house) {
  const filteredStudents = house === "all" ? students : filter(students, house);
  cardsOnDom(filteredStudents);
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


const startApp = () => {
  cardsOnDom(students);
}

startApp();