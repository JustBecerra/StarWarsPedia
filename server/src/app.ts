import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from './routes/routeindex'
import { ApolloServer, gql } from 'apollo-server';

dotenv.config();

const app: Express = express();

const typeDefs = gql`
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
`

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

const router = express.Router();
app.use('/', routes);
app.use(router)

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

export default server