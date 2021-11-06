import React,{useContext} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';
import close from "@icons/icon_close.png"

const OrderItem = ({product}) => {
	const { remoteFromCart } =useContext(AppContext);
	const handleRemote = product => {
		remoteFromCart(product);
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" className="pointer more-clickable-area" onClick={()=> handleRemote(product)}/>
		</div>
	);
}

export default OrderItem;