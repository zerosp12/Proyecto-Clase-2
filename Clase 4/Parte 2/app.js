const app = new Vue({
    el: "#app",
    data: {
        phonelist: [
            { 
                title: 'iPhone 14',
                image: './img/iphone.jpg',
                price: 1400,
                stock: true,
            },
            { 
                title: 'iPhone 12',
                image: './img/iphone.jpg',
                price: 800,
                stock: true,
            },
            { 
                title: 'iPhone 11',
                image: './img/iphone.jpg',
                price: 650,
                stock: false,
            }
        ],
    },
})