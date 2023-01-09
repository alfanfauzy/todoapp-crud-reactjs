import axios from 'axios';

const port = 3001;
axios.defaults.baseURL = `http://localhost:${port}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getTodos() {
  return await axios
    .get('/todo')
    .then((response) => response.data)
    .catch((error) => error.message);
}

export async function addTodo(data) {
  return await axios
    .post('/todo', data)
    .then((response) => response)
    .catch((error) => error.message);
}

export async function updateTodo(data) {
  return await axios
    .put(`/todo/${data.id}`, data)
    .then((response) => response)
    .catch((error) => error.message);
}

export async function deleteTodo(data) {
  return await axios
    .delete(`/todo/${data.id}`)
    .then((response) => response)
    .catch((error) => error.message);
}
