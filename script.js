// Main script for all languages and index.
document.addEventListener("DOMContentLoaded", function() {
    const search_button = document.getElementById("rws-003");
    const input = document.getElementById("rws-002");
    const special_urls = ["github", "youtube", "wiki", "wikipedia", "rodem", "https://kayyraa.github.io/rodem/", "rodem.com"];
    const special_words = ["Useless", "useless"];
    const userLanguage = navigator.language || navigator.userLanguage;

    search_button.addEventListener("click", function() {
        const query = input.value.toLowerCase();
        if (!special_urls.includes(query) && !special_words.includes(query)) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        } else if (query === "github") {
            window.open("https://github.com", "_self");
        } else if (query === "youtube") {
            window.open("https://youtube.com", "_self");
        } else if (query === "wiki" || query === "wikipedia") {
            window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
        } else if (special_urls.includes(query)) {
            window.open(query, "_self");
        }
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            const query = input.value.toLowerCase();
            if (!special_urls.includes(query) && !special_words.includes(query)) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            } else if (query === "github") {
                window.open("https://github.com", "_self");
            } else if (query === "youtube") {
                window.open("https://youtube.com", "_self");
            } else if (query === "wiki" || query === "wikipedia") {
                window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
            } else if (special_urls.includes(query)) {
                window.open(query, "_self");
            }
        }
    });

    const vers = 2.785;
    const head = document.getElementById("rws-004");
    const title = String(vers);
    head.innerHTML = `v${vers}`;
    document.title = `Rodem v${title.slice(0, 3)}`;

    setTimeout(function() {
        document.getElementById("ldr").style.display = "none";
        document.getElementById("rws-007").style.color = "greenyellow";
    }, Math.floor(Math.random() * 4750));


    const homeButton = document.getElementById("rws-009")
    homeButton.addEventListener("click", function() {
        window.open("index.html", "_self")
    })

    const trButton = document.getElementById("tr")
    const enButton = document.getElementById("en")
    const jaButton = document.getElementById("ja")
    const arButton = document.getElementById("ar")
    const ruButton = document.getElementById("ru")

    trButton.addEventListener("click", function() {
        window.location.href = "tr-rodem.html";
    })
    enButton.addEventListener("click", function() {
        window.location.href = "en-rodem.html";
    })
    jaButton.addEventListener("click", function() {
        window.location.href = "ja-rodem.html";
    })
    arButton.addEventListener("click", function() {
        window.location.href = "ar-rodem.html";
    })
    ruButton.addEventListener("click", function() {
        window.location.href = "ru-rodem.html";
    })
});