console.log(Vue)
const {user, contacts} = data
const app = createApp({
    name: 'Boolzap',
    data(){
        return {
           user,
           contacts
        }
    },
    methods: {
       
    }
})
app.mount('#root')