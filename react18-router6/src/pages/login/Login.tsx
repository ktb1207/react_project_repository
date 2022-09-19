import { FC } from 'react';
import { Form } from "react-router-dom";

interface IProps {}

const Login: FC<IProps> = () => {
  return (
    <div>
      <Form action="/post/login" method='post'>
        <input type="text" name="userName"/> <br></br>
        <input type="password" name="password"/> <br></br>
        <button type='submit'>submit</button>
      </Form>
    </div>
  );
};

export { Login };
