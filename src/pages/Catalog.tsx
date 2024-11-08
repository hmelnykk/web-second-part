import { useState } from "react";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import FiltersMenu from "../components/FiltersMenu/FiltersMenu";
import { db } from "../db";
import { ArtistType } from "../types/types";

const CatalogPage = () => {
    const [showlist, setShowlist] = useState<ArtistType[]>(db);

    const sortList = () => {
        const filterBy = (document.getElementById('filterBy')) as HTMLSelectElement;
        const filterOrder = (document.getElementById('filterOrder')) as HTMLSelectElement;
        const searchInput = (document.getElementById('search-input')) as HTMLInputElement;

        const sortedList = [...db];

        if (filterBy) {
            if (filterBy.value === 'Popularity') sortedList.sort((a, b) => b.monthListeners - a.monthListeners)
            if (filterBy.value === 'Price for a ticket') sortedList.sort((a, b) => b.ticketPrice - a.ticketPrice)
        }
        if (filterOrder && filterOrder.value === 'Lower to Bigger') sortedList.reverse();

        setShowlist(sortedList.filter((item) => {
            if (searchInput.value) {
                if (item.name.toLowerCase().includes(searchInput.value.toLowerCase())) return true
                return false
            }
            return true;
        }));
    }

    return <div className="container mx-auto my-8 space-y-4">
        <FiltersMenu onApply={sortList} />
        <div className="rounded-default border p-4">
            {
                showlist.map((el, idx) => {
                    return <CatalogItem key={idx} item={el} />
                })
            }
        </div>
    </div>
}

export default CatalogPage;
