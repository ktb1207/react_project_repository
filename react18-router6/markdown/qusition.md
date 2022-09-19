### reqct18去掉了 React.FC上children的定义

原因:

props指向了空对象

```js
type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}
```

解决：

```js

import React, { FC, FunctionComponent } from 'react';
// 需要手动指定children属性
interface IProps {
  children?: React.ReactNode
}
 
const RootSuspense: FC<IProps> = (props) => {
  return (
    <div className='root-suspense'>
      {props.children}
    </div>
  )
}

export {RootSuspense}
```

### 未匹配路由处理

在v5版本中，不匹配路由页面放在Route里面，并放在switch组件的最尾部

```js
<Route path="*">
  <NoMatch />
</Route>
```

在v6版本中,不用强制放在最末尾
```js
{
  path: '*',
  element: <h3>404 router</h3>
}
```