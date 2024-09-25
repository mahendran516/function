// selecting all inputs 

var savebtn = document.getElementById("save");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var gender1 = document.getElementById("Gender1");
var gender2 = document.getElementById("Gender2");
var emailInput = document.getElementById("email");
var courseInput = document.getElementById("course");
var tablelist = document.querySelector(".tablelist");

savebtn.addEventListener("click", function (event) {
    event.preventDefault();
    // create rowcell
    var newRow = document.createElement("tr");
    // create namecell
    var nameCell = document.createElement("td");
    nameCell.textContent = nameInput.value;
    newRow.appendChild(nameCell);
    //    create agecell
    var ageCell = document.createElement("td");
    ageCell.textContent = ageInput.value;
    newRow.appendChild(ageCell);
    //   create gendercell
    var genderCell = document.createElement("td");
    if (gender1.checked) {
        genderCell.textContent = gender1.value;
    }
    else if (gender2.checked) {
        genderCell.textContent = gender2.value;
    }
    else {
        genderCell.textContent = "Not";
    }

    newRow.appendChild(genderCell);
    // create coursecell
    var courseCell = document.createElement("td");
    courseCell.textContent = courseInput.value;
    newRow.appendChild(courseCell);


    //    create emailcell
    var emailCell = document.createElement("td");
    emailCell.textContent = emailInput.value;
    newRow.appendChild(emailCell);

    //    create btn action to delete

    var actionCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        tablelist.removeChild(newRow);
    });

    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    tablelist.appendChild(newRow);
    // editbtn

    // var actionCell = document.createElement("td");
    // var editbutton = document.createElement("button")
    // editbutton.textContent = "Edit"
    // actionCell.appendChild(editbutton);
    // newRow.appendChild(actionCell);
    // editbutton.addEventListener("click", function () {
    //     editbutton.preventDefault()
       
    // })
 

});
