const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "Test route" });
});

const scrapedRoutes = require("./routes/scrape-routes");
app.use("/api", scrapedRoutes);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
