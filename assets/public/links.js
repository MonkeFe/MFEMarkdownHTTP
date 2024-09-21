async function getURLs(links) {
    let urls = [];
    for (let link of links) {
        let text = link.slice(2, -2);
        if (text.includes("|")) {
            text = text.substring(0, text.indexOf("|"));
        } else if (text.includes(".md")) {
            text = text.substring(0, text.lastIndexOf("."));
        }
        const response = await fetch(
            `/api/links/${text}?location=${window.location.pathname}`,
        );
        const url = await response.text();
        console.log(url);
        urls.push(url);
    }
    return urls;
}

async function linkFetcher() {
    // find all the [[text]] in the page:
    const links = document.body.innerText.match(/\[\[.*?\]\]/g);
    if (!links) {
        return;
    }
    const urls = await getURLs(links);
    console.log(urls);
    // replace them with html links:
    links.forEach((link, index) => {
        let text = link.slice(2, -2);
        if (text.includes("|")) {
            text = text.substring(text.indexOf("|") + 1, text.length);
        }
        const url = urls[index];
        const html = `<a href="${url}">${text}</a>`;
        document.body.innerHTML = document.body.innerHTML.replace(link, html);
    });
}

document.addEventListener("DOMContentLoaded", linkFetcher);
