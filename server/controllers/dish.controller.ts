import { Dish } from '../models'

//get all dishes 
exports.getAll = async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    res.status(200)
    res.send(dishes)
  } catch (e) {
    console.log(e)  //eslint-disable-line no-console
    res.status(500);
  }
};

// create a dish 
exports.addDish = async (req, res) => {
  try {
    const newDish = await Dish.create(req.body);
    res.status(201);
    res.send(newDish)
  } catch (e) {
    console.log(e);  //eslint-disable-line no-console
    res.status(500).send(e);
  }
}

// delete a dish 
exports.deleteDish = async (req, res) => {
  const id = req.params.id;

  Dish.destroy({
    where: { id: id }
  }).then(() => {
    res.status(204).end();
  })
    .catch(err => {
      res.status(500).send({
        message: "Error deletingOrder with id=" + id
      });
    });
}




//TODO: modify a dish (if needed later)


