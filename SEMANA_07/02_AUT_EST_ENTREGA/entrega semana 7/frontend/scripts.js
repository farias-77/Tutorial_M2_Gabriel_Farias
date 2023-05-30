$(document).ready(function () {
    $("header").hover(
        function () {
            $(this).css("background-color", "#ffcccb");
        },
        function () {
            $(this).css("background-color", "#fff");
        }
    );

    $("section").hover(
        function () {
            $(this).css("background-color", "#ADD8E6");
        },
        function () {
            $(this).css("background-color", "#fff");
        }
    );

    $("#skills-carousel").hover(
        function () {
            $(this).css("background-color", "#ffffe0");
        },
        function () {
            $(this).css("background-color", "#fff");
        }
    );

    $("#skills-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
    });
});

function getFromBackend() {
    const url = "http://localhost:3000/";
    let resposta;

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    resposta = xhttp.responseText;
    $("#button-container").append("<p class='button-p'>" + resposta + "</p>");
}
