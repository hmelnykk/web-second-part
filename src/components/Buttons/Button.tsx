import { Link } from "react-router-dom";
import { ButtonType } from "../../types/types";

const Button = ({ name, href, className, onClick }: ButtonType) => {
    return (
        href ? <Link to={href ? href : '/'}>
            <button
                onClick={onClick}
                className={`py-2 px-4 text-sm font-light rounded-default duration-300 hover:bg-black/5 ${className ? className : ''}`}>
                {name}
            </button>
        </Link>
            :
            <button
                onClick={onClick}
                className={`py-2 px-4 text-sm font-light rounded-default duration-300 hover:bg-black/5 ${className ? className : ''}`}>
                {name}
            </button>
    );
}

export default Button;
