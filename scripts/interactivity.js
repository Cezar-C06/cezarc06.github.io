//Open Modal
$("#Interaction_Button").on("click", function () {
    $("#Popup").removeClass("hidden");
});

//Close Modal
$("#Closing_Button").on("click", function () {
    $("#Popup").addClass("hidden");
});

//Open and Close Hamburger Menu
$("#Menu").on("click", function () {
    if ($("#One_Link_Narrow").hasClass("hidden")) {
        $("#One_Link_Narrow").removeClass("hidden");
        $("#Two_Link_Narrow").removeClass("hidden");
        $("#Three_Link_Narrow").removeClass("hidden");
    } else {
        $("#One_Link_Narrow").addClass("hidden");
        $("#Two_Link_Narrow").addClass("hidden");
        $("#Three_Link_Narrow").addClass("hidden");
    }
});

//On Page Load Menu
$(document).ready(function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
        $("#Nav_Wide").addClass("hidden");
        $("#Menu").removeClass("hidden");
    }
});

//On Page Resize Menu
$(window).on("resize", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
        $("#Nav_Wide").addClass("hidden");
        $("#Menu").removeClass("hidden");
    } else {
        $("#Nav_Wide").removeClass("hidden");
        $("#Menu").addClass("hidden");
        $("#One_Link_Narrow").addClass("hidden");
        $("#Two_Link_Narrow").addClass("hidden");
        $("#Three_Link_Narrow").addClass("hidden");
    }
});
