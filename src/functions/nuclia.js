import express from 'express';
const app = express();
const port = 5555;
app.use(express.static(`main`));
app.get('/functions/nuclia', (req, res) => {
  res.json({success: true});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})