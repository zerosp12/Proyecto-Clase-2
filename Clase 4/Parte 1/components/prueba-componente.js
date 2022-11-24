Vue.component('prueba-componente', {

    data: function() {
        return {
            nombre: 'Pepe'
        }
    },
    props: ['titulo'],
    props: {
        titulo: String,
    },
    template: /*html*/ `
    <div>
        <h2>Bienvenido {{nombre}}</h2>
        <h5>{{titulo}}</h5>
    </div>
    `
})