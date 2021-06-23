const API = 'https://habr.com/kek/v2';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export class Api {
    constructor(fetcher) {
        this.fetch = fetcher;
    }
    async get(url, params) {
        let fullUrl = API + url;
        if (params) {
            fullUrl += '?' + new URLSearchParams(params).toString();
        }
        // await sleep(3 * 1000)
        const response = await this.fetch(fullUrl);
        return await response.json();
    }
    articles() {
        return this.get('/articles/', {
            period: 'weekly',
            sort: 'date',
            fl: 'en%2Cru',
            hl: 'ru',
            page: 1,
        });
    }
    article(id) {
        return this.get(`/articles/${id}`, {
            fl: 'en%2Cru',
            hl: 'ru',
        });
    }
}
