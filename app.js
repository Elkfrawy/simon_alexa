const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hi, I'm Simon. I'm up and running!");
})

port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Simon app listening on port ${port}! Go to http://localhost:${port}/`)
})
