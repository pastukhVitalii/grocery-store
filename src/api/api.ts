import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e',
})

export const groceryAPI = {
  getGrocery() {
    return instance.get('');
  }
}

export type GroceryType = {
  name: string
  category: string
  price: number
}

export type ResGroceryType = {
  grocery: GroceryType
};