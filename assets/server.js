const express = require("express");
const { execSync } = require("child_process");
const fs = require("fs");
const marked = require("marked");
const path = require("path");
const { isNumber } = require("util");
const app = express();

// Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

function handleFrontMatter(data) {
    if (data.startsWith("---")) {
        data = data.replace(/^---\n([\s\S]*?)\n---/, "```yaml\n$1\n```");
    }
    return data;
}

function handleMD(req, res, filename) {
    const filepath = path.join(__dirname, filename);
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(301).redirect("/");
        }
        data = handleFrontMatter(data);
        const htmlContent = marked.parse(data);
        const htmlContentTitled =
            filename != "index.md"
                ? `<h1 style="font-size:4em"><a href="/files">${filename.substring(filename.lastIndexOf("/") + 1, filename.length)}</a></h1>${htmlContent}`
                : htmlContent;
        res.render("markdown", { content: htmlContentTitled });
    });
}

function handlePDF(req, res, filename) {
    const filepath = path.join(__dirname, filename);
    fs.readFile(filepath, (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        res.setHeader("Content-Type", "application/pdf");
        res.send(data);
    });
}

function handlePNG(req, res, filename) {
    const filepath = path.join(__dirname, filename);
    fs.readFile(filepath, (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        res.setHeader("Content-Type", "image/png");
        res.send(data);
    });
}

function handleJPG(req, res, filename) {
    const filepath = path.join(__dirname, filename);
    fs.readFile(filepath, (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        res.setHeader("Content-Type", "image/jpeg");
        res.send(data);
    });
}

app.get("/", (req, res) => {
    res.status(301).redirect("/files");
});

app.get("/files", (req, res) => {
    handleMD(req, res, "files/index.md");
});

app.get("/api/links/:filename", (req, res) => {
    console.log(req.query, req.params);
    // the client send a request giving the filename and the current location on the browser
    // the api needs to find the closest link to the filename by looking gradually in the parent directories of the current location
    // if the file is not found, return a 404
    // if the file is found, return the absolute path to the file
    const clientLocation = req.query.location;
    const filename = req.params.filename;

    // TODO: fix grep regex for .pdf .png .jpg .jpeg
    //
    console.log(`find files | grep '${filename}\.[^.]*$'`);

    let filepath = "";
    try {
        filepath = execSync(`find files | grep '${filename}\.[^.]*$'`)
            .toString()
            .split("\n")[0];
        if (filepath.includes("grep:")) {
            throw new Error("File not found");
        }
        filepath = `/${filepath.trim()}`;
    } catch (e) {
        return res.status(404).send("/");
    }
    console.log(`{ url: ${filepath} }`);

    if (fs.existsSync(path.join(__dirname, filepath))) {
        res.send(filepath);
    } else {
        res.status(404).send("/");
    }
});

function findExtension(filename) {
    try {
        const foundOccurence = execSync(
            `find files | grep '${filename}\.[^.]*$'`,
        )
            .toString()
            .split("\n")[0];
        if (foundOccurence.includes("grep:")) {
            throw new Error("File not found");
        }
        return foundOccurence.trim();
    } catch (e) {
        return null;
    }
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
            const foundOccurence = findExtension(filename);
            console.log(foundOccurence);
            if (foundOccurence) {
                matchFileExtension(req, res, foundOccurence);
            } else {
                res.status(301).redirect("/");
            }
            break;
    }
}

app.get("/files/*", (req, res) => {
    if (!req.params[0]) {
        return res.status(404).send("File not found");
    }
    const filename = `files/${req.params[0]}`;
    console.log(`Reading file: ${filename}`);

    matchFileExtension(req, res, filename);
});

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://ANY:${PORT}`);
});
