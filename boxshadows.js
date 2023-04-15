function copy(copyText , n) {
    navigator.clipboard.writeText(copyText);
    document.getElementById(`copy${n}`).innerHTML = "COPIED";
    console.log(n)
}