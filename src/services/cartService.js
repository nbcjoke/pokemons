import api from "../api/config";

class CartService {
  static instance = new CartService();

  getCart() {
    return api.get("cart");
  }

  addItem(itemToAdd) {
    return api.post("cart/item", itemToAdd);
  }

  removeItem(itemId) {
    return api.delete(`cart/item/${itemId}`);
  }

  updateItem({ id, quantity }) {
    return api.patch("cart/item", { id, quantity });
  }
}

export default CartService.instance;
