Vue.component('componente-card', {
    props: {
        phone: Object,
    },
    template: /*html*/ `
        <div class="card col-2 text-center m-2 p-2">
            <img :src="phone.image" :alt="phone.title">
            <div class="card-body">
                <h5 class="card-title">{{phone.title}}</h5>
                <p class="fw-bold">$ {{phone.price}}</p>
                <button v-if="phone.stock" class="btn btn-primary">Comprar</button> <!--:disabled="!phone.stock"-->
                <p v-else class="text-danger fw-bold">Out of stock</p>
            </div>
        </div>
    `
})