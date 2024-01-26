console.log(Vue)
const {user, contacts} = data
const app = Vue.createApp({
    data() {
        return {
            user,
            contacts,
            activeId: null,
            message: '',
            searchText: ''
        }
    },
    computed:{
        // MILESTONE 2.1
        // verifico se l'id dell'utente cliccato combacia con quello 
        // dell'array e ritorno i dati dell'utente
     currentId(){
        const contact = this.contacts.find((contact) => {
            if(contact.id === this.activeId) return true
            else return false
        })
        return contact
     },
    //  MILESTONE2.2
    // creo una funzione sulla quale girare con la direttiva v-for
    // per assegnare, tramite id utente, la chat di testo corrispondete 
    // con ogni singolo utente 
     currentChat(){
        return this.currentId.messages
     },
    //  MILESTONE 4:
    // creo una funzione che mi aggiorna in tempo reale 
    // l'array originale filtrandolo
     filteredContacts(){
        const searchTerms = this.searchText.toLowerCase()
        const filteredText = this.contacts.filter(newText => {
            if(newText.name.toLowerCase().includes(searchTerms)){
                return true 
            } else return false
        })
        return filteredText
     }
    },
    methods:{
        // MILESTONE 2.1
        // al click assegno precisamente l'id del contatto cliccato
        setCurrentId(id){
            this.activeId = id
        },
        // MILESTONE 3
        // creo una funzione corrispondente ai messaggi inviati dall'user principale con la risposta
        // automatica degli altri utenti
        sendMessage(){
          if(!this.message) return
          const newMessage = {
            id: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            text: this.message,
            status: 'sent'
          }          
          this.currentChat.push(newMessage)
          this.message = ''
          setTimeout(() => {
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: 'ok',
                status: 'received'
              }          
              this.currentChat.push(newMessage)
          }, 1000)
        }
    },
    // MILESTONE 2
    // all'avvio della pagina assegno al mio active id 
    // l'id del primo oggetto dell'array
    created(){
        this.activeId = this.contacts[0].id
    }
})
app.mount('#root')

