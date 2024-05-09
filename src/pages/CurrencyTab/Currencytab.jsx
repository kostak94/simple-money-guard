import { useDispatch, useSelector } from "react-redux";
import { getCurrency } from "../../redux/Currency/operations";
import { getTransactions } from "../../redux/Transactions/operations";
import { selectCurrencyData } from "../../redux/Currency/selectors";
import { useEffect } from "react";
import { selectTransactions } from "../../redux/Transactions/selectors";

const Currencytab = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrencyData);
  useEffect(() => {
    dispatch(getCurrency());
  }, []);
  console.log(currency);
  return <div>Currencytab</div>;
};

export default Currencytab;
