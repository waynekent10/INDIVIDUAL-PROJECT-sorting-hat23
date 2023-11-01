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
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", () => {
  cardsOnDom(students);
});

const form = document.querySelector('form')
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
// const form = document.querySelector("#form");
// form.innerHTML += `<form id="name">
//   <div class="mb-3">
//     <label for="name" class="form-label">Name</label>
//     <input type="text" class="form-control" id="studentName" required>
//   </div>
//   </div>
//   <button type="submit" class="btn btn-primary" id="sortMe">Sort</button>
// </form>`;
 
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

const expelStudent = (e) => {
  if (e.target.id.includes("expel")) {
    const id = e.target.id.split("--")[1];
    const index = students.findIndex(student => student.id === Number(id));
       
    if (index !== -1) {
    const removed = students.splice(index, 1);
        volde.push(removed[0]);
        cardsOnDom(students);
        console.log("do I work")
        expelledCardsOnDom(volde);
    }
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





// const expelled = (array) => {
//     let domString ="";

//     for(const removed of array) {
//         domString += `<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">${removed.name}</p>
//   </div>
// </div>`
//     }
// const voldemortDiv = document.querySelector("#voldemort");
// voldemortDiv.innerHTML = domString
// };

// const expelButton = document.querySelector("#hogwarts");

// expelButton.addEventListener('click', (e) => {

//     if (e.target.id.includes("expel")) {
//         const[,id] = e.target.id.split("--");
//         const index = students.findIndex(e => e.id === Number(id));
//         const removed = students.splice(index, 1);
//         voldemort.push(removed[0]);
//         renderToDom(students);
//         console.log("do I work")
//         expelledToDom(voldemort);
//     }
// })
