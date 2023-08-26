import { TTodo } from '../types/todos';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const checkResponse = (res: Response): Promise<TTodo[]> => {
  return res.ok
    ? res.json()
    : res.json().then((error) => Promise.reject(error));
};

export const fetchTodos = async () => {
  return await fetch(`${BASE_URL}/todos`)
    .then(checkResponse)
    .then((data) => data);
  // .catch((error) => console.log(error));
};
