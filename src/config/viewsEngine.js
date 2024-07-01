const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

let viewEngine = (app) => {
    // Static Files
    app.use(express.static(path.join(__dirname, '../../src/public')));

    // Set Templating Engine
    app.engine(
        '.html',
        engine({
            extname: '.html',
            helpers: {
                block: function (name) {
                    const blocks = this._blocks;
                    content = blocks && blocks[name];
                    return content ? content.join('\n') : null;
                },
                contentFor: function (name, options) {
                    var blocks = this._blocks || (this._blocks = {});
                    block = blocks[name] || (blocks[name] = []); //Changed this to [] instead of {}
                    block.push(options.fn(this));
                },
            },
        }),
    );
    app.set('view engine', '.html');
    app.set('views', path.join(__dirname, '../../src/views'));
};

module.exports = { viewEngine };
