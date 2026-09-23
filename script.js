import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "./firebase.js";


// GET SECTIONS
const startLearningBtn = document.getElementById("start-learning-btn");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

const home = document.getElementById("home");
const authSection = document.getElementById("auth-section");
const learn = document.getElementById("learn");
const quiz = document.getElementById("quiz");
const tips = document.getElementById("tips");


// 1. START LEARNING → SHOW CENTERED LOGIN PAGE
startLearningBtn.addEventListener("click", () => {
    home.style.display = "none";
    authSection.style.display = "flex";
});


// 2. SIGN UP
signupBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password!");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        alert("Account created successfully!");

        showLearningContent();

    } catch (error) {
        alert(error.message);
    }

});


// 3. LOGIN
loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password!");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful!");

        showLearningContent();

    } catch (error) {
        alert(error.message);
    }

});


// 4. SHOW CONTENT AFTER LOGIN
function showLearningContent() {

    authSection.style.display = "none";

    learn.style.display = "block";
    quiz.style.display = "block";
    tips.style.display = "block";

    learn.scrollIntoView({
        behavior: "smooth"
    });

}


// 5. QUIZ
const answers = document.querySelectorAll(".answer");
const result = document.getElementById("quiz-result");

answers.forEach((answer) => {

    answer.addEventListener("click", () => {

        if (answer.classList.contains("correct")) {

            result.textContent =
                "Correct! Always verify suspicious links before clicking.";

            result.style.color = "#2dd4bf";

        } else {

            result.textContent =
                "Try again. Do not click suspicious links.";

            result.style.color = "#f59e0b";

        }

    });

});