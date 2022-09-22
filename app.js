document.addEventListener("DOMContentLoaded", function () {
    var temp1 = document.querySelector("#close-symbol");
    var my_div = document.querySelector(".my-arts");

    my_div.style.transition = "4s";
    my_div.style.transform = "translate(-150px)";

    function close_program() {
        // var my_div = document.querySelector(".my-arts");
        // my_div.style.display = "none";
        my_div.style.transform = "translate(150px)";
    }

    temp1.addEventListener("click", close_program);
})
