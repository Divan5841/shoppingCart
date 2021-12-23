export interface ICartState {
  cartItems?: Map<string, ICartItem>
}

export interface ICartItem {
  id: string
  name: string
  price: number
  quantity: number
}
