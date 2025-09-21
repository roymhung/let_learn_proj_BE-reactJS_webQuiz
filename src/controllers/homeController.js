
const getHomepage = (req, res) => {
    //process data
    //call model
  res.send("Hello World! vs nodemon");
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getRoyhung = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage, getABC, getRoyhung
};
