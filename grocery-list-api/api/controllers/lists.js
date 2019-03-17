'use strict';

const retrieveLists = (req, res) => {
  const lists = req.groceryLists.find({});
  res.status(200);
  res.send(lists.map(removeMeta));
};

const createList = (req, res) => {
  const count = req.groceryLists.count();
  req.groceryLists.insert({ id: count + 1, items: [] });
  res.status(201);
  res.end();
};

const retrieveList = (req, res) => {
  const id = parseInt(req.swagger.params.id.value, 10);
  const list = removeMeta(req.groceryLists.get(id));
  res.status(200);
  res.send(list);
};

const addItemToList = (req, res) => {
  req.groceryLists.findAndUpdate(
    { id: req.swagger.params.id.value },
    ({ id, items }) => ({
      id,
      items: items.push(Object.assign({ id: items.length + 1 }, req.body))
    })
  );
  res.status(204);
  res.end();
};

const deleteItemFromList = (req, res) => {
  req.groceryLists.findAndUpdate(
    { id: req.swagger.params.listId.value },
    ({ id, items }) => {
      const index = items.findIndex(
        item => item.id !== req.swagger.params.itemId.value
      );
      items.splice(index, 1);
      return {
        id,
        items
      };
    }
  );
  res.status(204);
  res.end();
};

const removeMeta = ({ id, items }) => ({ id, items });

module.exports = {
  retrieveLists,
  createList,
  retrieveList,
  addItemToList,
  deleteItemFromList
};
