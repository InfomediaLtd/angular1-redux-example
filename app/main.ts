import angular from 'angular'
import appDirective from "./app.ts"
import {AppStore,createAppStoreFactoryWithOptions} from "angular2-redux"
import todos from "./reducers"

const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  return next(action);
}
const appStoreFactory = createAppStoreFactoryWithOptions({
                          reducers:{todos},
                          additionalMiddlewares:[loggerMiddleware],
                          debug:true
                        });

angular
.module('app',[])
.directive('app', appDirective)
.factory( 'appStore', appStoreFactory)
;
