const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const marked = require("marked");
const path = require("path");
const app = express();

// Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

function handleCSS(req, res, filename) {
    const filepath = path.join(__dirname, "public", filename);
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            return res.status(404).send("File not found");
        }
        res.setHeader("Content-Type", "text/css");
        res.send(data);
    });
    return;
}

function handleMD(req, res, filename) {
    const filepath = path.join(__dirname, "files", filename);
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        const htmlContent = marked.parse(data);
        res.render("markdown", { content: htmlContent });
    });
}

function handlePDF(req, res, filename) {
    const filepath = path.join(__dirname, "files", filename);
    fs.readFile(filepath, (err, data) => {
        if (err) {
            return res.status(301).redirect("/");
        }
        res.setHeader("Content-Type", "application/pdf");
        res.send(data);
    });
}

app.get("/", (req, res) => {
    handleMD(req, res, "index.md");
});

app.get("/*", (req, res) => {
    if (!req.params[0]) {
        return res.status(404).send("File not found");
    }

    const filename = req.params[0];
    console.log(`Reading file: ${filename}`);

    switch (path.extname(filename)) {
        case ".css":
            handleCSS(req, res, filename);
            break;
        case ".pdf":
            handlePDF(req, res, filename);
            break;
        case ".md":
            handleMD(req, res, filename);
            break;
        default:
            if (
                fs.existsSync(path.join(__dirname, "files", filename + ".md"))
            ) {
                handleMD(req, res, filename + ".md");
            } else if (
                fs.existsSync(path.join(__dirname, "files", filename + ".pdf"))
            ) {
                handlePDF(req, res, filename + ".pdf");
            }
            break;
    }
    return;
});

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://ANY:${PORT}`);
});
