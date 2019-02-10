import { get, post, put } from 'axios';

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

export { addGroceryList, addItem, getGroceryLists, getGroceryList };
