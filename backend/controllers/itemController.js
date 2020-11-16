// item_index, item_individual

const Item = require("../models/dbItems");

const item_index = (req, res) => {
  Item.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const item_individual = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  item_index,
  item_individual,
};
