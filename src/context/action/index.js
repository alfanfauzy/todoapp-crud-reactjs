export const TodoReducer = (state, action) => {
  /** Get Index */
  const index = state?.findIndex((data) => data.id === action.data.id);

  switch (action.type) {
    /** Handle Add */
    case 'GET_TODOS':
      return [...action.data.response];

    /** Handle Add */
    case 'ADD_TODO':
      const newTodo = [...state];
      newTodo.push(action.data);
      return newTodo;

    /** Handle Edit */
    case 'EDIT_TODO':
      const editTodo = [...state];
      editTodo[index] = action.data;

      return editTodo;

    /** Handle Delete */
    case 'DELETE_TODO':
      const removeTodo = state.filter(
        (data) => data.value !== state[index].value
      );

      return removeTodo;

    default:
      throw new Error('Failed Action');
  }
};
