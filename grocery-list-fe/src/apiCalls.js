import { get, post, put, delete as deleteMethod } from 'axios';

const apiVersion = 'v1';
const baseUrl = `http://localhost:10010/${apiVersion}`;

const addGroceryList = async () => {
  await post(`${baseUrl}/lists/`, {});
};

const addItem = async (id, name, quantity) => {
  await put(`${baseUrl}/lists/${id}`, { name, quantity });
};

const getGroceryLists = async () => {
  const response = await get(`${baseUrl}/lists`);
  return response.data || [];
};

const getGroceryList = async id => {
  const response = await get(`${baseUrl}/lists/${id}`);
  return response.data || [];
};

const deleteItem = async (listId, itemId) => {
  await deleteMethod(`${baseUrl}/lists/${listId}/${itemId}`);
};

export { addGroceryList, addItem, getGroceryLists, getGroceryList, deleteItem };
