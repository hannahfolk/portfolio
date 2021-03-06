const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes/routes.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
