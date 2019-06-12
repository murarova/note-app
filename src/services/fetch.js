import axios from 'axios';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const CATS_URL =
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const KEY = '12738660-493779526e4dbdf56b35386f0';

export const fetchItems = (query, genre) =>
    axios.get(`${URL}${query}+subject:${genre}`, {
        headers: {
            'Content-Type': 'text/html',
        },
    });

export const fetchPixabay = query =>
    axios.get(`${CATS_URL}${query}&page=${1}per_page=12&key=${KEY}`);
