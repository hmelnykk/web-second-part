import { SelectType } from "../../types/types";

const Select = ({ name, id, options }: SelectType) => {
    return <select className="text-sm p-2" name={name} id={id}>
        {
            options.map((el, idx) => {
                return <option value={el}>{el}</option>
            })
        }
    </select>
}

export default Select;
