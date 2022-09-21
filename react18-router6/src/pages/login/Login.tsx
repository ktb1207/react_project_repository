import { FC, useEffect, useState } from 'react';
import { Form, useNavigation} from "react-router-dom";

interface IProps {}

const Login: FC<IProps> = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Form action="/post/login" method='post'>
        <input type="text" name="userName"/> <br></br>
        <input type="password" name="password"/> <br></br>
        <button type='submit' disabled={navigation.state === 'submitting'}>
          登录
        </button>
      </Form>
    </div>
  );
};

export { Login };
