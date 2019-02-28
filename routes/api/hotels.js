const express = require("express");
const router = express.Router();

// HOTEL MODEL

const Hotel = require("../../models/hotels");

// GET api/hotels
router.get("/", (req, res) => {
  Hotel.find()
    .then(hotel => res.json(hotel))
    .catch(err => console.log(err));
});

// GET BY ID

router.get("/:id", (req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => {
      if (!hotel) {
        return res.status(404).end();
      }
      return res.status(200).json(hotel);
    })
    .catch(err => console.log(err));
});

// UPDATE

// POST ITEM
router.post("/", (req, res) => {
  const newHotel = new Hotel({
    name: req.body.name,
    img: req.body.img,
    rooms: req.body.rooms,
    price: req.body.price,
    city: req.body.city
  });

  newHotel.save().then(hotel => res.json(hotel));
});

module.exports = router;
