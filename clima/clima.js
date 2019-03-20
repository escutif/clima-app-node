const axios = require('axios');

const getClima = async(lat, lng) => {
    var key = 'd1e51ae3975cfed4156210fe794c6e7f';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}