document.getElementById("mainPageBtn").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("socialsPage").style.display = "none";
});

document.getElementById("socialsBtn").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("socialsPage").style.display = "block";
});

document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
});

document.getElementById("submitPassword").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value;
    if (password === "maxistcool") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("editor").style.display = "block";
    } else {
        alert("Falsches Passwort!");
    }
});

document.getElementById("saveContent").addEventListener("click", function() {
    var newContent = document.getElementById("newContent").value;
    var contentDiv = document.getElementById("content");
    var newParagraph = document.createElement("p");
    newParagraph.textContent = newContent;
    contentDiv.appendChild(newParagraph);
    document.getElementById("newContent").value = "";
});
