import { useEffect, useState } from "react";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import FiltersMenu from "../components/FiltersMenu/FiltersMenu";
import { ArtistType } from "../types/types";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
// import { db } from "../db"; - <9

const CatalogPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [artists, setArtists] = useState<ArtistType[]>([]);
    // const [artists, setArtists] = useState<ArtistType[]>(db); <9

    useEffect(() => {
        axios.get('http://localhost:3001/artists').then(res => {
            setArtists(res.data);
            setIsLoading(false);
        })
    }, []);

    // const sortList = () => { <9
    //     const filterBy = (document.getElementById('filterBy')) as HTMLSelectElement;
    //     const filterOrder = (document.getElementById('filterOrder')) as HTMLSelectElement;
    //     const searchInput = (document.getElementById('search-input')) as HTMLInputElement;

    //     const sortedList = [...artists];

    //     if (filterBy) {
    //         if (filterBy.value === 'Popularity') sortedList.sort((a, b) => b.monthListeners - a.monthListeners)
    //         if (filterBy.value === 'Price for a ticket') sortedList.sort((a, b) => b.ticketPrice - a.ticketPrice)
    //     }
    //     if (filterOrder && filterOrder.value === 'Lower to Bigger') sortedList.reverse();

    //     setShowlist(sortedList.filter((item) => {
    //         if (searchInput.value) {
    //             if (item.name.toLowerCase().includes(searchInput.value.toLowerCase())) return true
    //             return false
    //         }
    //         return true;
    //     }));
    // }

    return isLoading ? <Spinner /> : <div className="container mx-auto my-8 space-y-4">
        <FiltersMenu onApply={async () => {
            const filterBy = (document.getElementById('filterBy')) as HTMLSelectElement;
            const filterOrder = (document.getElementById('filterOrder')) as HTMLSelectElement;
            const searchInput = (document.getElementById('search-input')) as HTMLInputElement;

            await axios.get(`http://localhost:3001/artists?filterBy=${filterBy.value}&filterOrder=${filterOrder.value}&searchInput=${searchInput.value}`)
                .then(res => res.data)
                .then(data => setArtists(data))
        }} />
        <div className="rounded-default border p-4">
            {
                artists.map((el, idx) => {
                    return <CatalogItem key={idx} item={el} />
                })
            }
        </div>
    </div>
}

export default CatalogPage;
