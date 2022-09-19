import React, { FC, FunctionComponent } from 'react';

// 
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