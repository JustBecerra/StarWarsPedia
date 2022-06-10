import server from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT
// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});