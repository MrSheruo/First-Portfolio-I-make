// Start tryping effect
// var numberNotImportant = 0, text;
// text = "Front-end Developer";

// function typing() {
//     if (numberNotImportant < text.length) {
//         document.getElementById("typing").innerHTML += text.charAt(numberNotImportant);
//         numberNotImportant++;
//         setTimeout(typing, 100)
//     }
// }
// typing();

var typing = new Typed("#typing", {
    strings: ["Front-end Developer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})




// End tryping effect


// // Start Progress Bar
function isInViewPort(element) {
    var bounding = element.getBoundingClientRect();

    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        console.log('In the viewport! :)');
        return true;
    } else {
        console.log('Not in the viewport. :(');
        return false;
    }
}
const theElementToWatch = document.querySelector('#skills')
window.addEventListener('scroll', function () {
    if (isInViewPort(theElementToWatch)) {
        $('.progress-bar').each(function () {
            $(this).css({
                width: $(this).attr("data-progress")
            });
        })

    }
}, false);

// // End Progress Bar

