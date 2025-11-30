


function pet(name, age, breed, gender, service, email) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.email = email;
}


$("#registrationForm").on("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    $("#registrationForm input, #registrationForm select").removeClass();

    $("#registrationForm input[required], #registrationForm select[required]").each(function () {
        if ($(this).val().trim() === "") {
            $(this).css("border", "solid 2px red");
        }
    });

    if (!isValid) {
        alert("Please fill out all required fields.");
        return;
    }

    onSubmit();
});

function onSubmit() {

    const name = $("#petName").val();
    const age = $("#petAge").val();
    const breed = $("#petBreed").val();
    const gender = $("#petGender").val();
    const service = $("#petService").val();
    const email = $("#petEmail").val();

    const newPet = new pet(name, age, breed, gender, service, email);

    const $row = addRow(newPet);
    $("#petTable").append($row);

    $("#registrationForm")[0].reset(); 
}

   $("#changeModeButton").click(function(){
    //Apply or remove the dark-mode class
$("body").toggleClass("dark-mode");
});


function addRow(newPet) {
    const $row = $(`
        <tr>
            <td>${newPet.name}</td>
            <td>${newPet.age}</td>
            <td>${newPet.breed}</td>
            <td>${newPet.gender}</td>
            <td>${newPet.service}</td>
            <td>${newPet.email}</td>
            <td><button class="btn btn-warning btn-sm edit-btn">Edit</button></td>
            <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        </tr>
    `);

    
    $row.find(".edit-btn").on("click", function () {
        alert("Edit button clicked");
    });

    
    $row.find(".delete-btn").on("click", function () {
        if (confirm("Are you sure you want to delete this row?")) {
            $row.remove();
        }
    });

    return $row;
}
