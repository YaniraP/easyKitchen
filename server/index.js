const express = require('express');
const router = require('./router');
const cors = require('cors')
const morgan = require('morgan');
const db = require('./models')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('tiny'))
app.use(cors())

app.use(express.json());
app.use(router);

db.sequelize.sync()
  .then(() => {
    console.log('db connected');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT} 🚀`);
    });
  })


