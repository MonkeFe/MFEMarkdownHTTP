const express = require("express");
const { env } = require('node:process');
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { createHash } = require('crypto');
const marked = require("marked");
const session = require('express-session');
const bodyParser = require('body-parser');

const { handleJPG, handlePNG, handlePDF } = require("./handlers");
const { isAuthenticated,  requireAuth } = require("./login.js")

const app = express();
const sha256 = (input) => { return createHash('sha256').update(input).digest('hex'); }

app.use(session({ secret: 'lk-adsj-fal2432-3423jl-kj', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

function findOccurence(filename) {
    try {
        const metadata = execSync("find files").toString().split("\n");
        let foundOccurence = null;
        filename = path.extname(filename) !== "" ? filename : `${filename}.md`;
        metadata.forEach((file) => {
            if (file.includes(filename)) {
                foundOccurence = file;
            }
        });
        if (!foundOccurence) {
            throw new Error("File not found");
        }
        return foundOccurence.trim();
    } catch (e) {
        return null;
    }
}

function handleFrontMatter(data) {
    if (data.startsWith("---")) {
        data = data.replace(/^---\n([\s\S]*?)\n---/, "```yaml\n$1\n```");
    }
    return data;
}

function linkEval(html, links) {
    for (let link of links) {
        let text = link.slice(2, -2);
        if (text.includes("|")) {
            text = text.substring(0, text.indexOf("|"));
        } else if (text.includes(".md")) {
            text = text.substring(0, text.lastIndexOf("."));
        }
        let url = findOccurence(text);
        let selectedName = text.includes("|")
            ? (text = text.substring(text.indexOf("|") + 1, text.length))
            : text;
        if (url) {
            html = html.replace(link, `<a href="/${url}">${selectedName}</a>`);
        }
    }
    return html;
}

function mapTreeLink(tree) {
    tree = tree.split("\n").map((line) => {
        let placeholder = line.replace(/^[^a-zA-Z0-9_]+/, "");
        if (path.extname(placeholder) === "") {
            return line;
        }
        return line.replace(
            placeholder,
            `[[${placeholder.replace(/\\ /g, " ")}]]`,
        );
    });
    return tree.join("\n");
}

function htmlEval(html, filename) {
    html =
        filename != "views/index.md"
            ? `<h1 style="font-size:4em"><a href="/files">${filename.substring(filename.lastIndexOf("/") + 1, filename.length)}</a></h1>${html}`
            : html;

    if (filename == "views/index.md") {
        const fileStructure = mapTreeLink(execSync("tree files").toString());
        html += `<pre><code class="language-bash">${fileStructure}</code></pre>`;
    }

    let links = html.match(/\[\[.*?\]\]/g);
    if (links) {
        html = linkEval(html, links);
    }

    return html;
}

function handleMD(req, res, filename) {
    const filepath = path.join(__dirname, filename);
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        data = handleFrontMatter(data);
        const htmlContent = htmlEval(marked.parse(data), filename);
        res.render("markdown", { content: htmlContent });
    });
}

function matchFileExtension(req, res, filename) {
    switch (path.extname(filename)) {
        case ".pdf":
            handlePDF(req, res, filename);
            break;
        case ".md":
            handleMD(req, res, filename);
            break;
        case ".png":
            handlePNG(req, res, filename);
            break;
        case ".jpg":
        case ".jpeg":
            handleJPG(req, res, filename);
            break;
        default:
            const foundOccurence = findOccurence(filename);
            if (foundOccurence) {
                matchFileExtension(req, res, foundOccurence);
            } else {
                res.status(301).redirect("/");
            }
            break;
    }
}

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica delle credenziali (da implementare)
    if (username === env.USER_LOGIN && sha256(password) === env.HASHED_PASSWORD) {
        req.session.userId = username;
        return res.redirect('/');
    }
    res.redirect('/login');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('login');
});

app.get("/files/*", requireAuth, (req, res) => {
    if (!req.params[0]) {
        return res.status(404).send("File not found");
    }
    const filename = `files/${req.params[0]}`;
    console.log(`Reading file: ${filename}`);

    matchFileExtension(req, res, filename);
});

app.get("/", requireAuth, (req, res) => {
    res.status(301).redirect("/files");
});

app.get("/files", requireAuth, (req, res) => {
    handleMD(req, res, "views/index.md");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://ANY:${PORT}`);
});
