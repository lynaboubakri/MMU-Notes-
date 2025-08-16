document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("error");

    if (!email.endsWith("@student.mmu.edu.my")) {
        errorBox.textContent = " Use a valid studnet email";
        errorBox.style.color = "red";
        return;
    }
    if (password.length < 6) {
        errorBox.textContent = " Password must be at least 6 characters long";
        errorBox.style.color = "red";
        return;
    }
    errorBox.textContent = "Login successful !";
    errorBox.style.color = "green";

    setTimeout(() => {
        window.location.href = "index1.html";
    }, 1000)
});
