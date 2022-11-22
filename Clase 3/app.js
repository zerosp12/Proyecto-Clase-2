const app = new Vue({
    el: "#app",
    data: {
        userName: "",

        userList: [
            { name: 'Juan', img: "quien sabe" },
            { name: 'Juan1', img: "quien sabe" },
            { name: 'Juan2', img: "quien sabe" },
            { name: 'Juan3', img: "quien sabe" },
            { name: 'Juan4', img: "quien sabe" }
        ],
    },
    methods: {
        obtenerClass(index)
        {
            return (index % 2 == 0) ? 'bg-light' : ''
        },
        requestLogin()
        {
            this.userName = 'Jose'
        },
        requestLogout()
        {
            this.userName = ''
        }
    }
})