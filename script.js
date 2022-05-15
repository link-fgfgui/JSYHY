function showtishi(message) {
    document.getElementById('tishiback').style.display = "block";
    document.getElementById('tishi').style.display = "block";
    document.getElementById('wenben').innerHTML = `<br/>${message}`;
}

function closetishi() {
    document.getElementById('tishiback').style.display = "none";
    document.getElementById('tishi').style.display = "none";

}