import { Counter } from "./Counter";

const CounterContainer = () => {
  const [contador, setcontador] = useState(1);

  const restar = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  const sumar = () => {
    setcontador(contador + 1);
  };
};

return <Counter contador={contador} sumar={sumar} restar={restar} />;

export default CounterContainer;
