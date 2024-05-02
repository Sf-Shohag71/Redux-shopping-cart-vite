// Action Types
const ADD_WISHLIST_ITEM = "wishlist/addWishlistItem";

// Action Creators
export function addWishListItems(wishListData) {
  return { type: ADD_WISHLIST_ITEM, payload: wishListData };
}

// Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case ADD_WISHLIST_ITEM: {
      let count = 0;
      return state.map((wishListItem) => {
        if (wishListItem.productId === action.payload.productId) {
          return { ...wishListItem, count: count + 1 };
        }
        return wishListItem
      })
      // return [...state, { ...action.payload, wishListItem: 1 }]
    }
    default:
      return state;
  }
}
