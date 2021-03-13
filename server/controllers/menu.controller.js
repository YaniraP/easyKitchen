
const db = require('../models');

const {Menu, Dish} = db;

//get all menus
exports.getAll = async (req, res) => {
  try {
    const menus = await Menu.findAll({
      include: [{ model: Dish }],
    });
    res.status(200);
    res.send(menus);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500);
  }
};

//get menu by Id
exports.getOneMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findOne({
      where: { id: id },
    });
    res.status(200);
    res.send(menu);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500);
  }
};

// create a menu
exports.createMenu = async (req, res) => {
  console.log('req.body -> ', req.body);
  try {
    const newMenu = await Menu.create(req.body);

    newMenu.addDish(req.body.dishId);
    console.log(newMenu);
    res.status(201);
    res.send(newMenu);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500).send(e);
  }
};

// delete a menu
exports.deleteMenu = async (req, res) => {
  const title = req.body.title;
  const { id } = req.params;
  Menu.destroy({
    where: { title: title },
  })
    .then(() => {
      res.status(204).send(id);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deletingOrder with title' + title,
      });
    });
};

//TODO: modify a menu (if needed later)
