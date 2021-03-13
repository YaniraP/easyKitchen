import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import {db} from './models';
import { router } from './router';
dotenv.config();

const app = express();
const PORT = process.env.DB_PORT;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);

(async function bootstrap() {
  try {
    await db.sync();
    console.log('Connected to SQL database');

    app.listen(PORT, () => 
    console.log(`App is listening on port ${PORT} 🚀`))
  } catch (error) {
    console.log(error)
  }
})();
