/**
 * @providesModule ExNavigationActions
 * @flow
 */

import ActionTypes from 'ExNavigationActionTypes';

export default class ExNavigationActions {
  static initialize() {
    return { type: ActionTypes.INITIALIZE };
  }

  static setCurrentNavigator(navigatorUID, parentNavigatorUID, navigatorType, defaultRouteConfig, routes, index = 0) {
    return {
      type: ActionTypes.SET_CURRENT_NAVIGATOR,
      navigatorUID,
      parentNavigatorUID,
      navigatorType,
      defaultRouteConfig,
      routes,
      index,
    };
  }

  static removeNavigator(navigatorUID) {
    return {
      type: ActionTypes.REMOVE_NAVIGATOR,
      navigatorUID,
    };
  }

  static push(navigatorUID, child) {
    return {
      type: ActionTypes.PUSH,
      navigatorUID,
      child,
    };
  }

  static pop(navigatorUID) {
    return {
      type: ActionTypes.POP,
      navigatorUID,
    };
  }

  static immediatelyResetStack(navigatorUID, routes, index) {
    return {
      type: ActionTypes.IMMEDIATELY_RESET_STACK,
      navigatorUID,
      routes,
      index,
    };
  }

  static updateCurrentRouteParams(navigatorUID, newParams) {
    return {
      type: ActionTypes.UPDATE_CURRENT_ROUTE_PARAMS,
      navigatorUID,
      newParams,
    };
  }

  static jumpToTab(navigatorUID, tab) {
    return {
      type: ActionTypes.JUMP_TO_TAB,
      navigatorUID,
      tab,
    };
  }

  static goBack() {
    return {
      type: ActionTypes.GO_BACK,
    };
  }
}
