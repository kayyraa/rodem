document.addEventListener("DOMContentLoaded", function() {
    const search_button = document.getElementById("rws-003");
    const input = document.getElementById("rws-002");

    search_button.addEventListener("click", function() {
        const input = document.getElementById("rws-002");
        const special_urls = ["github", "youtube", "wiki", "wikipedia", "rodem", "https://kayyraa.github.io/rodem/", "rodem.com"];
        const special_words = ["Useless", "useless"];
        const userLanguage = navigator.language || navigator.userLanguage;
        const query = input.value;
        if (!special_urls.includes(query) && !special_words.includes(query)) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        } else if (query === "github") {
            window.open("https://github.com", "_self");
        } else if (query === "youtube") {
            window.open("https://youtube.com", "_self");
        } else if (query === "wiki" || query === "wikipedia") {
            window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
        } else if (query === "rodem" || query === "https://kayyraa.github.io/rodem/" || query === "rodem.com") {
            window.open("https://kayyraa.github.io/rodem/", "_self");
        }
    });
});

window.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        const input = document.getElementById("rws-002");
        const special_urls = ["github", "youtube", "wiki", "wikipedia", "rodem", "https://kayyraa.github.io/rodem/", "rodem.com"];
        const special_words = ["Useless", "useless"];
        const userLanguage = navigator.language || navigator.userLanguage;
        const query = input.value;
        if (!special_urls.includes(query) && !special_words.includes(query)) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        } else if (query === "github") {
            window.open("https://github.com", "_self");
        } else if (query === "youtube") {
            window.open("https://youtube.com", "_self");
        } else if (query === "wiki" || query === "wikipedia") {
            window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
        } else if (query === "rodem" || query === "https://kayyraa.github.io/rodem/" || query === "rodem.com") {
            window.open("https://kayyraa.github.io/rodem/", "_self");
        }
    }
}, false);

document.addEventListener("DOMContentLoaded", function () {
    const vers = 2.785;
    const head = document.getElementById("rws-004");
    const title = String(vers)
    head.innerHTML = vers;
    document.title = "Rodem r" + title.slice(0, 3);
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById("ldr").style.display = "none";
        document.getElementById("rws-007").style.color = "greenyellow";
    }, Math.floor(Math.random(1750) * 4750));
}

document.getElementById("rws-003").addEventListener("dragstart", function(event) {
    event.preventDefault();
});