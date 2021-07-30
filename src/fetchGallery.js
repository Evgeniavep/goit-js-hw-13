import axios from 'axios';
import Axios from 'axios';

export default class NewsApiService {
    construcrot() {
        this.searchQuery = '';
        this.page = 1;
        this.totalHits = '';
        this.perPage = 40;
    }

    async fetchImages() {
        const url = `https://pixabay.com/api/key=22712293-4b1a596c02710330a929bb789&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
        const response = await axios.get(url);
        this.page += 1;
        return response.data;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}