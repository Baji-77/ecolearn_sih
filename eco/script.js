function loginStudent(event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("studentRoll").value;

  // Fetch all students from the JSON server
  fetch("http://localhost:5000/students")
    .then(response => response.json())
    .then(students => {
      // Find the student that matches the entered name and roll number
      const student = students.find(s => s.name === name && s.roll == roll);

      if (student) {
        // Login successful
        localStorage.setItem("studentName", name);
        localStorage.setItem("studentRoll", roll);
        window.location.href = "student.html"; // Redirect to a new page
      } else {
        // Login failed
        document.getElementById("studentMsg").textContent = "Invalid student name or roll number.";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("studentMsg").textContent = "Could not connect to the server.";
    });
}
function loginAdmin(event) {
  event.preventDefault();

  const email = document.getElementById("adminName").value;
  const password = document.getElementById("adminPass").value;

  // Fetch all teachers from the JSON server
  fetch("http://localhost:5000/teachers")
    .then(response => response.json())
    .then(teachers => {
      // Find the teacher that matches the entered email and password
      const teacher = teachers.find(t => t.email === email && t.password === password);

      if (teacher) {
        // Login successful
        localStorage.setItem("adminEmail", email);
        window.location.href = "admin.html"; // Redirect to a new page
      } else {
        // Login failed
        document.getElementById("adminMsg").textContent = "Invalid email or password.";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("adminMsg").textContent = "Could not connect to the server.";
    });
}
function showForm(formType) {
  const studentForm = document.getElementById('student-form');
  const adminForm = document.getElementById('admin-form');
  const studentTab = document.querySelector('.tab-btn:nth-child(1)');
  const adminTab = document.querySelector('.tab-btn:nth-child(2)');

  if (formType === 'student') {
    studentForm.classList.remove('hidden');
    adminForm.classList.add('hidden');
    studentTab.classList.add('active');
    adminTab.classList.remove('active');
  } else if (formType === 'admin') {
    adminForm.classList.remove('hidden');
    studentForm.classList.add('hidden');
    adminTab.classList.add('active');
    studentTab.classList.remove('active');
  }
}