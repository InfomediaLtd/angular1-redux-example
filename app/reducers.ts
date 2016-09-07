const INITIAL_STATE = [
    {text:'Import angular2-redux', done:true},
    {text:'Add Redux to Angular 1', done:false}
];
export default function(state=INITIAL_STATE, action) {
    if (action.type=="CREATE_TODO") {
        return [...state,{text:action.text,done:false}];
    } else if (action.type=="TOGGLE_TODO") {
        const newState = [];
        state.forEach(todo => {
            if (todo.text==action.text) {
                newState.push({text:action.text,done:!todo.done});
            } else {
                newState.push(todo);
            }
        });
        return newState;
    } else {
        return state;
    }
}