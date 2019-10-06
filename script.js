console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('javascript is working');
    $('#employeeInputButton').on('click', handleSubmitClick);
    $('#employeeInputButton').on('click', salaryCalculator);
    $('tbody').on('click', '.deleteButton', handleDeleteClick);
}

let employees = [];


function handleSubmitClick() {
    console.log('in handleSubmitClick');
    const firstName = $('#firstNameInput').val();
    const lastName = $('#lastNameInput').val();
    const idNumber = $('#idNumberInput').val();
    const jobTitle = $('#jobTitleInput').val();
    const annualSalary = $('#annualSalaryInput').val();
    // declares new object
    let newEmployeesObjects = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary
    }
    // pushes new object into employees array
    employees.push(newEmployeesObjects)
    // clears input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    // append into grid
    $('tbody').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>$${annualSalary}</td>
        <td>
            <button class="deleteButton">Delete</button>
        </td>
    </tr>`);


}

//calculate salary from each new employee and add to total monthly

function salaryCalculator() {
    let sum = 0;

    console.log('In salaryCalculator');

    for (newEmployee of employees) {

        sum += Math.round(Number(newEmployee.annualSalary) / 12);
        console.log(sum);
        $('#monthlySalary').text(`Total Monthly Salary: $${sum}`);
    }
    if (sum >= 20000) {
        $('#monthlySalary').css("background-color", "red");
    }

}

// delete entire row when clicked

function handleDeleteClick() {
    console.log('delete button has been clicked');
    $(this).parent().parent().remove();
    
}
