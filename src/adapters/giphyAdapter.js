const KEY = "KtzKVK1M9xQc4eJLPZjr5dds6ZURwzxd";
const URL = `https://api.giphy.com/v1/gifs/`;
// const URL = `https://api.giphy.com/v1/gifs/search?${KEY}&`;

export default class GiphyAdapter {
  static search(params) {
    const { search } = params;
    const myURL = `${URL}search?q=${search}&api_key=${KEY}`;
    return fetch(`${myURL}`).then(res => res.json());
  }
}
