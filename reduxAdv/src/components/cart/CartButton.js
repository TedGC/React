import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux'
import counter from '../../store/index  '

const CartButton = (props) => {

  const counter = useSelector(state => state.counter.toggele)

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
