# dxc-addcomponent
dxc-addcomponent使用函数来快速添加react组件
## install
```
yarn add dxc-addcomponent
```
## Example
loading.js

```
import React, {Component, PropTypes} from 'react';
import addComponent from 'dxc-addcomponent'
import Loading from './Loading'
let key = null;
export default {
    show: (props = {})=> {
        if (key == null)
            key = addComponent.add(<Loading {...props}/>)
    },
    hide: ()=> {
        if (key != null) {
            addComponent.remove(key);
            key = null;
        }
    }

```

使用  

```
import loading from './loading'

loading.show()
loading.hide()
```



