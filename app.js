const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima actual de ${direccion} es de ${temperatura}`;
    } catch (e) {

        return `No se pudo determinar el clima de ${direccion} Error=>`, e;

    }

}

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74.0)
//     .then(console.log)
//     .catch(console.log);

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);