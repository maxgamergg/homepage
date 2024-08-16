// Funktion zum Laden des Inhalts aus der Textdatei
function loadContentFromFile() {
    fetch('content.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Fehler beim Laden des Inhalts:', error);
            document.getElementById('content').innerHTML = '<p>Fehler beim Laden des Inhalts.</p>';
        });
}

// Tabs wechseln
document.getElementById("mainPageBtn").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("socialsPage").style.display = "none";
    loadContentFromFile();  // Lade Inhalt beim Wechsel zur Hauptseite
});

document.getElementById("socialsBtn").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("socialsPage").style.display = "block";
});

// Beim Laden der Seite Inhalt aus der Datei laden
window.onload = function() {
    loadContentFromFile();
};
