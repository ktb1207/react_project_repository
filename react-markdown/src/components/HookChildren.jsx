import { memo } from 'react';

function hookChildren () {
  console.log('hook children runing')
  return <div>hook children</div>
}

const HookChildren = memo(hookChildren);

export default HookChildren;