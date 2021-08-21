(async function() {
    await new Promise(r => setTimeout(r, 2000));
    // window.location.replace("rr.html");
    window.location.href = "rr.html";
})();