function showForm(type) {
  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  
  if (type === "student") {
    document.getElementById("student-form").classList.remove("hidden");
    document.getElementById("admin-form").classList.add("hidden");
    document.querySelectorAll(".tab-btn")[0].classList.add("active");
  } else {
    document.getElementById("student-form").classList.add("hidden");
    document.getElementById("admin-form").classList.remove("hidden");
    document.querySelectorAll(".tab-btn")[1].classList.add("active");
  }
}

// Handle Student Login
function loginStudent(event) {
  event.preventDefault();
  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("studentRoll").value;
  const msg = document.getElementById("studentMsg");

  if (name && roll) {
    msg.style.color = "white";
    msg.textContent = `Welcome Student ${name} (Roll: ${roll})`;
  } else {
    msg.style.color = "red";
    msg.textContent = "Please fill all fields!";
  }
}

// Handle Admin Login
function loginAdmin(event) {
  event.preventDefault();
  const name = document.getElementById("adminName").value;
  const pass = document.getElementById("adminPass").value;
  const msg = document.getElementById("adminMsg");

  if (name === "teacher" && pass === "1234") {
    msg.style.color = "white";
    msg.textContent = `Welcome  ${name}`;
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid credentials!";
  }
}
