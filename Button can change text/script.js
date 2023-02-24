var color = [
    "249a96",
    "16DE81",
    "479eb4",
    "DE0BD1",
    "FF6400",
    "6025F5",
    "F54E25",
    "A61DC2",
    "C2941D",
    "25F53B"
]
var text = [
    "يا شايل هم مش همك و حاكي لكل خلق الله يا ناسي في الوجع نفسك و زاهد عشق ما بتلقاه",

    "مالك مش باين ليه ؟ قلبك تايه من مدة كبيره خايف تتكلم ليه ؟ في عيونك حيرة و حكاوي كتيره",

    "Now hush, little baby, don't you cry Everything is gonna be alright",

    "و انا لو علي قلبي فا حن علشانك فجأة و مال و انا مهما يقولو بشوفك غير كل الي اتقال",

    "إديني حب اكتر اديك الشوق يا سكر و انا و انت لواحدنا",

    "شبكت في يدي نهار بغروب و الدرب لا يودي لدار و قلوب يا عودة ما تهدي جدار مجروح إمتي يهدي الطير في غصن الروح",

    "High in the halls of the kings who are gone Jenny would dance with her ghosts The ones she had lost and the ones she had found And the ones who had loved her the mos",

    "خلينا نعيش مع بعض منغير لا فراق ولا بعد ع الحلوه اه و المره هنعيش سوا",

    "مبقتش عارف اعمل ايه حالي مش صعبان عليه يعني دا الي وصلنا ليه سايبه عارف روحي فيه ",

    "اوجه سلامي ليكي كل احترامي و اعتزازي بيكي إن كنتي ام او حبيبه, صديقة, زوجه او قريبه ينبوع الحنان الكوني مصدره انتي يا حوا"

]


var theMan = [
    "محمد سعيد",

    "حمزه نَميرة",

    "Eminem",

    "محمد سعيد",

    "الفيمص عباصط حموده",

    "حميد الشاعري",

    "Florence + The Machine in Game Of Thrones",

    "محمود العسيلي",

    "مٌسلم",

    "شارموفرز"

]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min));
}
$(".btn").click(function () {
    var rnd = getRndInteger(0, 9)
    var textP = getRndInteger(0, 9)
    $(".content p , h3 , span").css("color", "#" + color[rnd]);
    $(".bigcontainer").css("background-color", "#" + color[rnd]);
    $(".btn").css("background-color", "#" + color[rnd]);
    $(".content p").html(`${text[textP]}`);
    $(".content h3").html(`${theMan[textP]}`);
})

