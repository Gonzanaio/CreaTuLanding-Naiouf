import { ImCart } from "react-icons/im";
import "../styles/CartWidget.css";

function CardWidget() {
  return (
    <div className="cart-widget">
      <ImCart size={24} style={{ color: "rgba(18, 41, 104, 1)" }} />
      <span className="cart-count">5</span>
    </div>
  );
}
export default CardWidget;
