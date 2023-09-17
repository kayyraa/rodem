document.addEventListener("DOMContentLoaded", function() {
    const search_button = document.getElementById("rws-003");
    const input = document.getElementById("rws-002");

    search_button.addEventListener("click", function() {
      const input = document.getElementById("rws-002");
      const special_urls = ["github", "youtube", "wiki", "wikipedia"];
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
      } else if (query === "wiki" || "wikipedia") {
        window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
      }
    });
});

window.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        const input = document.getElementById("rws-002");
        const special_urls = ["github", "youtube", "wiki", "wikipedia"];
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
        } else if (query === "wiki" || "wikipedia") {
          window.open(`https://${userLanguage}.wikipedia.org/`, "_self");
        } else if (query === " " || "") {
            continue;
        }
    }
}, false);

window.onload = function () {
  const vers = "v2.79.05.29";
  const textElement = document.getElementById("rws-004");
  textElement.innerHTML = vers;
  const versLength = vers.length;
  let title;
  if (versLength <= 2) {
      title = "Rodem " + vers;
  } else {
      title = "Rodem " + vers.slice(0, 2);
  }
  document.title = title;
}

let i = 0;
let gt = 5;
let o = 0.5;
const blc = document.getElementById("rws-005");

function doIteration() {
  if (i < 1000000) {
    i++;
    setTimeout(doIteration, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    function decreaseOpacity() {
        var blc = document.getElementById("blc");
        var currentOpacity = parseFloat(blc.style.opacity || 1.0);

        if (currentOpacity > 0) {
            currentOpacity -= 0.01;
            blc.style.opacity = currentOpacity;
            setTimeout(decreaseOpacity, 0);
        } else {
            setTimeout(increaseOpacity, 500);
        }
    }

    function increaseOpacity() {
        var blc = document.getElementById("blc");
        var currentOpacity = parseFloat(blc.style.opacity || 0.0);

        if (currentOpacity < 1) {
            currentOpacity += 0.01;
            blc.style.opacity = currentOpacity;
            setTimeout(increaseOpacity, 0);
        } else {
            setTimeout(decreaseOpacity, 0);
        }
    }

    decreaseOpacity();
});

doIteration();
