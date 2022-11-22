const app = new Vue({
    el: "#app",
    data: {
        userName: "",

        userList: [
            { name: 'John', url: "test" },
            { name: 'John1', url: "test1" },
            { name: 'John2', url: "test2" },
            { name: 'John3', url: "test3" },
            { name: 'John4', url: "test4" }
        ]
    },
    methods: {
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