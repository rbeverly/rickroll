
function drop_it(e) {
    document.getElementById('playa').muted = false;
    document.getElementById('playa').play();
}

document.onmousedown = drop_it;

addEventListener("keydown", function (e) {
    // e.preventDefault();
    if (e.key === 's') {
        console.log('s pressed');
        document.getElementById('playa').pause();
    } else {
        drop_it();
    }
});

(function() {
    var rickP = document.getElementById('rickP');
    var point = document.getElementById('point');
    var l;
    var t;
    document.onmousemove = rickMouse;
    function rickMouse(event) {
        l = window.innerWidth - event.clientX;
        t = window.innerHeight - event.clientY;
        point.style.left = l.toString() +"px";
        point.style.top = t.toString() +"px";
        rickP.style.left = (l + 20).toString() +"px";
        rickP.style.top = (t + 20).toString() +"px";
    }
})();

(async function() {
    var song = ["Never gonna give you up,", "Never gonna let you down,", "Never gonna run around", "And desert you <3", "Never gonna make you cry,", "Never gonna say goodbye,", "Never gonna tell a lie", "An hurt you :`("];
    var n = -1;
    while (true) {
        (n > 7) ? n = 0 : n++;
        console.log(song[n]);
        await new Promise(r => setTimeout(r, 1337));
        // A promise... to never say goodbye, or tell a lie and hurt you.
    }
})();