console.log(Vue)
const {user, contacts} = data
const app = Vue.createApp({
    data (){
        return {
            user,
            contacts
        }
    }
})
app.mount('#root')