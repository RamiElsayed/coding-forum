const express = require('express');



const controllers = require('./src/controllers');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(controllers);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);