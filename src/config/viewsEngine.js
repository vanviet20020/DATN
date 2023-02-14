const express = require("express");
const path = require('path')

const { engine } = require("express-handlebars");

let viewEngine = (app) => {
    // Static Files
    app.use(express.static(path.join(__dirname, '../../src/public')));

    // Set Templating Engine
    app.engine(".hbs", engine({
        extname: ".hbs",
        helpers: {
            block: function (name) {
                var blocks = this._blocks,
                    content = blocks && blocks[name];
                return content ? content.join('\n') : null;
            }
        }
    }));
    app.set("view engine", ".hbs");
    app.set("views", path.join(__dirname, "../../src/views"));
};

module.exports = { viewEngine };
