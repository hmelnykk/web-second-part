const SearchInput = ({ id }: { id: string }) => {
    return <input
        type="text"
        placeholder="Search"
        className="text-sm border rounded-default flex-grow p-2"
        id={id}
    />
}

export default SearchInput;
