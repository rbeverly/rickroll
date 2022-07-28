
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

// Blessed are the F12ers, for they shall inherit the ctf.
(async function() {
    var secretSquirrel = btoa('66 6c 61 67 7b 79 6f 75 2d 67 30 74 2d 72 31 63 6b 72 30 6c 6c 33 64 7d')
    var song = ["Never gonna give you up,", "Never gonna let you down,", "Never gonna run around", "And desert you <3", "Never gonna make you cry,", "Never gonna say goodbye,", "Never gonna tell a lie", "An hurt you :`(", secretSquirrel];
    var n = -1;
    while (true) {
        (n > 7) ? n = 0 : n++;
        console.log(song[n]);
        await new Promise(r => setTimeout(r, 1337));
        // A promise... to never say goodbye, or tell a lie and hurt you.
    }
})();