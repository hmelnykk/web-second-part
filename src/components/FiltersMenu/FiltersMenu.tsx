import Button from "../Buttons/Button";
import SearchInput from "../Inputs/SearchInput";
import Select from "../Select/Select";

const FiltersMenu = ({ onApply }: { onApply: () => void }) => {
    return <div className="w-full border p-4 rounded-default flex justify-between gap-[80px]">
        <div className="space-x-4">
            <Select name="filterBy" id="filterBy" options={['Popularity', 'Price for a ticket']} />
            <Select name="filterOrder" id="filterOrder" options={['Bigger to Lower', 'Lower to Bigger']} />
        </div>
        <SearchInput id="search-input" />
        <Button name="Apply" className="font-semibold bg-primary hover:bg-primary/60" onClick={onApply}/>
    </div>
}

export default FiltersMenu;
