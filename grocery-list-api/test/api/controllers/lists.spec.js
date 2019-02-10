'use strict';

const listController = require('../../../api/controllers/lists');

let req;
let res;

describe('lists controller', () => {
  describe('retrieveLists', () => {
    it('should return a list of grocery lists', () => {
      req = { groceryLists: { find: jest.fn().mockReturnValue([]) } };
      res = { status: jest.fn(), send: jest.fn() };
      listController.retrieveLists(req, res);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status).toBeCalledWith(200);
      expect(res.send).toBeCalledTimes(1);
      expect(res.send).toBeCalledWith([]);
    });
  });

  describe('createList', () => {
    it('should create a new list', () => {
      req = {
        groceryLists: { insert: jest.fn(), count: jest.fn().mockReturnValue(0) }
      };
      res = { status: jest.fn(), end: jest.fn() };
      listController.createList(req, res);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status).toBeCalledWith(201);
      expect(req.groceryLists.insert).toBeCalledTimes(1);
      expect(req.groceryLists.insert).toBeCalledWith({ id: 1, items: [] });
    });
  });

  describe('retrieveList', () => {
    it('should retrieve a list', () => {
      req = {
        groceryLists: {
          get: jest.fn().mockResolvedValue({ id: 1, items: [] })
        },
        swagger: { params: { id: { value: 1 } } }
      };
      res = { status: jest.fn(), send: jest.fn() };
      listController.retrieveList(req, res);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status).toBeCalledWith(200);
      expect(req.groceryLists.get).toBeCalledTimes(1);
      expect(req.groceryLists.get).toBeCalledWith(1);
    });
  });

  describe('addItemToList', () => {
    it('should add an item to a list', () => {
      req = {
        groceryLists: { findAndUpdate: jest.fn() },
        swagger: { params: { id: { value: 1 } } }
      };
      res = { status: jest.fn(), end: jest.fn() };
      listController.addItemToList(req, res);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status).toBeCalledWith(204);
      expect(req.groceryLists.findAndUpdate).toBeCalledTimes(1);
    });
  });
});
