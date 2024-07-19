// Function to toggle the visibility of the Departments section
function toggleDepartments() {
    var departmentsSection = document.getElementById('departments-section');
    if (departmentsSection.style.display === 'none' || departmentsSection.style.display === '') {
        departmentsSection.style.display = 'block';
    } else {
        departmentsSection.style.display = 'none';
    }
}
