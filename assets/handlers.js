const fs = require("fs");
const path = require("path");

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

// export all functions
module.exports = {
    handlePDF,
    handlePNG,
    handleJPG,
};
