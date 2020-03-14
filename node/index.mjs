import express from 'express';
import cookies from 'cookie-parser';
import * as con from './utils/fancy-console.mjs';
import { logReq } from './utils/fancy-console.mjs';
import { logErr } from './utils/fancy-console.mjs';
import { logRes } from './utils/fancy-console.mjs';

console.clear();
con.startLog();
const web = express();

web.use(express.json(), express.urlencoded({ extended: true }), cookies());
web.get("/logout", (req, res) => {
    res.clearCookie('token');
    res.redirect('/login.html');
});

web.get('/', async (req, res, next) => {
    logReq('index');
    if (!req.cookies.token) {
        logErr();
        res.status(403);
        res.redirect('/login.html');
    } else {
        logRes('index');
        next();
    }
});

web.post("/login", (req, res) => {
    if (req.body.token) {
        if (req.body.token == '.pass123.') {
            res.cookie("token", req.body.token, { maxAge: 3600000 });
        }
    }
    res.redirect('/');
});

web.use(express.static('public'));
web.listen(8080);