"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
app_1.default.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
