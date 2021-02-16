window.onload = function(){
    new TypeIt("#function",{
        speed:120,
        loop:true,
        waitUntilVisible:true,
    }).type("",{delay:400})
    .pause(500).delete(9)
    .type("",{delay:400})
    .pause(500)
    .delete(9)
    .go();
}