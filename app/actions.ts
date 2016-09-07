export const createTodo = function(text) {
    return {type:"CREATE_TODO", text};
}
export const toggleTodo = function(text) {
    return {type:"TOGGLE_TODO", text};
}