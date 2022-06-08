"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filmsRouter = (0, express_1.Router)();
filmsRouter.get('/', (req, res) => {
    return res.json("films route is here");
});
exports.default = filmsRouter;
