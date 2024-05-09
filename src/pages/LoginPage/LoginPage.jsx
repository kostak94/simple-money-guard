import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../helpers/schemas/schemas";
import { loginThunk } from "../../redux/Auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmimt = ({ email, password }) => {
    dispatch(loginThunk({ email, password }));
  };

  return <AuthForm type="login" schema={loginSchema} onSubmit={onSubmimt} />;
};

export default LoginPage;
