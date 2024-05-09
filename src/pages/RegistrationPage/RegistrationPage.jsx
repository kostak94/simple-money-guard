import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import { registerThunk } from "../../redux/Auth/operations";
import { registerSchema } from "../../helpers/schemas/schemas";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const onSubmit = ({ username, email, password }) => {
    dispatch(registerThunk({ username, email, password }));
  };
  return (
    <AuthForm type="register" schema={registerSchema} onSubmit={onSubmit} />
  );
};

export default RegistrationPage;
