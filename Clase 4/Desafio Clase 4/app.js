const app = new Vue({
    el: '#app',

    data: {

        //-----------------------------
        // Clientes
        //-----------------------------
        estiloClientes: {
            'table': true, 
            'table-hover': true,
            'table-bordered': true,
            'table-light': true,
        },

        listaClientes: [
            { name: 'Juan', name2: 'Perez' },
            { name: 'Ricardo', name2: 'Barin' },
            { name: 'Bruno', name2: 'Diaz' },
        ],

        //-----------------------------
        // Vehiculos
        //-----------------------------
        estiloVehiculos: {
            'table': true, 
            'table-hover': true,
            'table-bordered': true,
            'table-info': true,
        },

        listaVehiculos: [
            { name: 'Ford Fiesta', name2: '2010' },
            { name: 'Renault Oroch', name2: '2018' },
            { name: 'Volkswagen Passat', name2: '2014' },
        ],

        //-----------------------------
        // Sucursales
        //-----------------------------
        estiloSucursales: {
            'table': true, 
            'table-hover': true,
            'table-bordered': true,
            'table-dark': true,
        },

        listaSucursales: [
            { name: 'Sucursal Central', name2: 'Fake Street 123' },
            { name: 'Sucursal CABA', name2: 'Balcarce 50' },
            { name: 'Sucursal Nueva', name2: 'Alguna Calle 1234' },
        ]
        
    },
})