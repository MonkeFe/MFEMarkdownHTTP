document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.body.children).forEach(function (node) {
        node.classList.add("hidden-animation");
    });
    setTimeout(function () {
        let loop = setInterval(function () {
            let hidden = document.querySelector(".hidden-animation");
            if (hidden) {
                hidden.classList.remove("hidden-animation");
            } else {
                clearInterval(loop);
            }
        }, 100);
    }, 100);
});
