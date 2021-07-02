$(document).ready(function () {
    var dob = new Date("1996/12/12");
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);
    $("#age").text(age);
});