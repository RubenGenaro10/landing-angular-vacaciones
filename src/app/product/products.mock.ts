export const productsList:products[] = [
    // 7 ejemplos de productos elecronicos
    {id:1, name:'Laptop', price: 1000, description: 'Laptop HP'},
    {id:2, name:'Smartphone', price: 500, description: 'Smartphone Samsung'},
    {id:3, name:'Tablet', price: 300, description: 'Tablet Apple'},
    {id:4, name:'Smartwatch', price: 200, description: 'Smartwatch Xiaomi'},
    {id:5, name:'Headphones', price: 100, description: 'Headphones Sony'},
    {id:6, name:'Mouse', price: 50},
    {id:7, name:'Keyboard', price: 50, description: 'Keyboard'}

];

export interface products {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}