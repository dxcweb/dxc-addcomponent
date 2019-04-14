import * as React from 'react';
export interface AddcomponentApi {
  /**
   * 添加组件返回 key
   */
  add(component: React.ReactNode):Number;
  /**
   * 移除组件使用add返回的key
   */
  remove(key:Number):void;
}
declare const _default: AddcomponentApi;
export default _default;