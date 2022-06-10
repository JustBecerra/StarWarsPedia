"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const routeindex_1 = __importDefault(require("./routes/routeindex"));
const apollo_server_1 = require("apollo-server");
dotenv_1.default.config();
const app = (0, express_1.default)();
const typeDefs = (0, apollo_server_1.gql) `
  type Film {
    title: String
    episodeID: Int
    releaseDate: String
    director: String
    openingCrawl: String
  }

  type Query {
    films: [Film]
  }
`;
const films = [
    {
        title: 'The Awakening',
        episodeID: 1,
        releaseDate: '1999-12-18',
        director: 'J.J. Abrams',
        openingCrawl: 'lmao'
    },
];
const resolvers = {
    Query: {
        films: () => films,
    },
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});
const router = express_1.default.Router();
app.use('/', routeindex_1.default);
app.use(router);
router.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(express_1.default.json({ limit: '50mb' }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
exports.default = server;
