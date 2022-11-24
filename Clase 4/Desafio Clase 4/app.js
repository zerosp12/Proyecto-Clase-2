const app = new Vue({
    el: '#app',

    data: {

        listaClientes: [
            { name: 'Juan', name2: 'Perez' },
            { name: 'Ricardo', name2: 'Barin' },
            { name: 'Bruno', name2: 'Diaz' },
        ],

        listaVehiculos: [
            { name: 'Ford Fiesta', name2: '2010' },
            { name: 'Renault Oroch', name2: '2018' },
            { name: 'Volkswagen Passat', name2: '2014' },
        ],

        listaSucursales: [
            { name: 'Sucursal Central', name2: 'Fake Street 123' },
            { name: 'Sucursal CABA', name2: 'Balcarce 50' },
            { name: 'Sucursal Nueva', name2: 'Alguna Calle 1234' },
        ]
        
    },
})