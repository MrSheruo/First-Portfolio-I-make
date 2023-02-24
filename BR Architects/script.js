$(document).ready(function () {

    $(".btns a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
})