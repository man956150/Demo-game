export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item:any) => ({
  type: ADD_ITEM,
  payload: item,
});

// export const updateItem = (id:any, updatedItem:any) => ({
//   type: UPDATE_ITEM,
//   payload: { id, updatedItem },
// });

// export const deleteItem = (id:any) => ({
//   type: DELETE_ITEM,
//   payload: id,
// });