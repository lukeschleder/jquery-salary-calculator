console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('javascript is working');
$('#employeeInputButton').on('click', handleSubmitClick);
$('#employeeInputButton').on('click', salaryCalculator); 
$('tbody').on('click', '.deleteButton', handleDeleteClick);   
}

let employees= [
    {
        firstName: "Jake",
        lastName: "Johnson",
        idNumber: "1234",
        jobTitle: "President",
        annualSalary: "210000"
    },
    {
        firstName: "Matt",
        lastName: "Przylski",
        idNumber: "1245",
        jobTitle: "VP",
        annualSalary: "150000"
    },
    {
        firstName: "Brenda",
        lastName: "Shultz",
        idNumber: "9898",
        jobTitle: "Director",
        annualSalary: "100000"
    },

];


function handleSubmitClick(){
    console.log('in handleSubmitClick');
    const firstName = $('#firstNameInput').val();
    const lastName = $('#lastNameInput').val();
    const idNumber = $('#idNumberInput').val();
    const jobTitle = $('#jobTitleInput').val();
    const annualSalary = $('#annualSalaryInput').val();

    let newEmployeesObjects = {
        firstName:firstName,
        lastName:lastName,
        idNumber:idNumber,
        jobTitle:jobTitle,
        annualSalary:annualSalary
        }
        employees.push(newEmployeesObjects)
// creates input fields
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
        <td>${annualSalary}</td>
        <td>
            <button class="deleteButton">Delete</button>
        </td>
    </tr>`);
    
    
}
//calculate salary from each new employee and add to total monthly

function salaryCalculator(){
    let sum=0;
   
    console.log('In salaryCalculator');
    for (newEmployee of employees){
        
    sum += Number(newEmployee.annualSalary)/12;
        console.log(sum);
        $('#monthlySalary').text(`Total Monthly Salary: $${sum}`);
    }
    if (sum>=20000){
        $('#monthlySalary').css("background-color", "red");
    }
    
}

function handleDeleteClick() {
    console.log('delete button has been clicked');
    $(this).parent().parent().remove();
}
