$(document).ready(function () {
    $("#Cities").change(function () {
        var selectedCity = $("#Cities option:selected").text();
        $("#lblDislpay1").text(selectedCity);
    });
    $("#Months").change(function () {
        var selectedMonth = $("#Months option:selected").text();
        $("#lblDislpay2").text(selectedMonth);
    });
    $("#Years").change(function () {
        var selectedYear = $("#Years option:selected").text();
        $("#lblDislpay3").text(selectedYear);
    });

});