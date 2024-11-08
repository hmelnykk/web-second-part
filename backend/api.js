import express from "express";
import cors from 'cors';
import { db } from './db.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sortData = (list, query) => {
    const sortedList = [...list];
    const { filterBy, filterOrder, searchInput } = query;

    if (filterBy) {
        if (filterBy === 'Popularity') sortedList.sort((a, b) => b.monthListeners - a.monthListeners)
        if (filterBy === 'Price for a ticket') sortedList.sort((a, b) => b.ticketPrice - a.ticketPrice)
    }

    if (filterOrder && filterOrder === 'Lower to Bigger') sortedList.reverse();

    if (searchInput && searchInput !== '') return sortedList.filter((el) => el.name.toLowerCase().includes( searchInput.toLowerCase() ))

    return sortedList;
}

app.get('/artists', async (req, res) => {
    const { query } = req;
    res.json(sortData(db, query));
})

app.get('/artists/:id', async (req, res) => {
    const { id } = req.params;
    res.json(db[id]);
})

app.listen(port, () => {
    console.log('123');
})
