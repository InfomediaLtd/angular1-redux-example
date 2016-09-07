import {createTodo,toggleTodo} from "./actions"
export default function(appStore) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {  },
      link: function(scope) {
        
        scope.todos = appStore.getState().todos;
        appStore.subscribe(state => {scope.todos=state.todos});
    
        scope.addTodo = function() {
          appStore.dispatch(createTodo(scope.todoText))
          scope.todoText = '';
        };
        scope.toggle = function(todo) {
          appStore.dispatch(toggleTodo(todo.text))
        };
    
        scope.remaining = function() {
          var count = 0;
          scope.todos.forEach(todo => {
            count += todo.done ? 0 : 1;
          });
          return count;
        };

      },
      template:
        `<div>   
            <span>{{remaining()}} of {{todos.length}} remaining</span>
            <ul>
              <li ng-repeat="todo in todos">
                <label class="checkbox">
                  <input type="checkbox" ng-click="toggle(todo)">
                  <span class="done-{{todo.done}}">{{todo.text}}</span>
                </label>
              </li>
            </ul>
            <form ng-submit="addTodo()">
              <input type="text" ng-model="todoText"  size="30" placeholder="add new todo here">
              <input class="btn-primary" type="submit" value="add">
            </form>     
        </div>`,
      replace: true
    };
  }