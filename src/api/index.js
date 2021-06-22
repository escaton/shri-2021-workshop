const API = 'https://habr.com/kek/v2';

export class Api {
    async get(url, params) {
        let fullUrl = API + url;
        if (params) {
            fullUrl += '?' + new URLSearchParams(params).toString();
        }
        const response = await fetch(fullUrl);
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
