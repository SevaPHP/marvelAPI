

class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=941c610a11de4f59123dbe349500958e'

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);  
        } 
        return await res.json();
    }

    //Получение всех персонажей
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?${this._apiKey}`);
    }
    //Получение одного персрнажа
      getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;