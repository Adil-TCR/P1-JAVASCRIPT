function kleur_aanpassen() {
    document.getElementById("text").style.color = "green";
    document.getElementById("text").innerText = "Kleur aangepast"
}
window.setTimeout(kleur_aanpassen, 3000);