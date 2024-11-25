import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartCard from "../components/CartCard/CartCard";
import Button from "../components/Buttons/Button";

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.items);

    Object.entries(cart).map((el) => console.log)

    return (
        <div className="py-4 container mx-auto space-y-4">
            <p className="text-center">Shopping Cart</p>
            {
                Object.entries(cart).map((el, idx) => {
                    return <CartCard key={idx} artist={el} />
                })
            }
            {
                Object.entries(cart).length > 0 ? <>
                    <p className="p-2 text-end">{`Total: ${
                        Object.entries(cart).reduce((acc, curr) => acc + curr[1].quantity * curr[1].price, 0)
                        }$`}</p>
                    <div className="flex justify-around">
                        <Button name="Go back" className="border" />
                        <Button name="Continue" className="font-semibold bg-primary hover:bg-primary/60" />
                    </div>
                </> : null
            }
        </div>
    );
}

export default CartPage;
