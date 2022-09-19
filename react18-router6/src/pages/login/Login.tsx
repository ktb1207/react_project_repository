import { FC } from 'react';

interface IProps {}

const Login: FC<IProps> = () => {
  return (
    <div>
      <form action="/post/login" method='get'>
        <input type="text" name="userName"/> <br></br>
        <input type="password" name="password"/> <br></br>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export { Login };
