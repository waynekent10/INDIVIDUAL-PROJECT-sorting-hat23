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