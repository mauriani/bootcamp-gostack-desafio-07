import produce from 'immer';
export default function cart(state = [], action) {
  console.tron.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        // verifico se aquele index existe
        const productIndex = draft.findIndex((p) => p.id === action.product.id);
        // maior ou igual a zero pq o array pode retornar index 0
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
