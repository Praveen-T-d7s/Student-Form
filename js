
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const agree = document.getElementById("agree").checked;

    if (!name || !email || !phone) {
        alert("Please fill all required fields!");
        return;
    }

    if (!agree) {
        alert("Please confirm your details!");
        return;
    }

    document.getElementById("message").innerText =
        "🎉 Congratulations " + name +
        "! Your registration is successful.";

    form.reset();

});
