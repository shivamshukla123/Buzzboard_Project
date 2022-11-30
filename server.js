const mongoose = require('mongoose')
const app = require("./app");

mongoose
  .connect('mongodb://localhost:27017/buzzboard')
  .then(() => {
	console.log('DB Connection Successful');
   }
);

const port = 3000
app.listen(port, () => {
	console.log(`listening from port ${port}`);
})