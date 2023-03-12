window.onload = function () {
    var year = 1992
    var month = 9
    var day = 28
    var today = new Date()
    var age = today.getFullYear()-year
    age =
        (today.getMonth() < month ||
        (today.getMonth() == month && today.getDate() < day))
        ? --age : age
    document.getElementById('edad').innerHTML = age
}
