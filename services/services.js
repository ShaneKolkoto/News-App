import { API_KEY, endpoint, country, pageSize } from '../config/config';

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}&pageSize=${pageSize}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json();
    articles = null;
    let newArticles = result.articles.filter(x => {
        return x.urlToImage !== null
    });
    console.log(newArticles)
    return newArticles;
}