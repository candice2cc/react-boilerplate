/**
 * Created by candice on 17/4/17.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getParams(json) {
    let query;
    if (typeof URLSearchParams !== "undefined") {
        query = new URLSearchParams();
        for (let key in json) {
            query.append(key, json[key])
        }

    } else {
        query = '';
        for (let key in json) {
            query = query + key + '=' + json[key] + '&'
        }
        if (query.length > 1) {
            query = query.slice(0, query.length - 1);
        }
    }
    return query;
}

export function buildGetPromise(url, data) {
    let search = '';
    if (data) {
        search = '?' + getParams(data);
    }

    return fetch(url + search, {
        credentials: 'same-origin',
        cache: 'no-cache'
    });
}
export function buildPostPromise(url, data) {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            credentials: 'same-origin',
            cache: 'no-cache',
            body: getParams(data)
        })
}
