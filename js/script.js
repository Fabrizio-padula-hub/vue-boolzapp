const { createApp } = Vue;



createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
      ],
      selectedContactIndex: 0,
      textInput: '',
      searchName: '',
      
    };
  },
  methods: {
    // funzione che prende l'indice della persona
    // e lo attacca a messages
    showConversation(index) {
      this.selectedContactIndex = index;
    },
    // funzione che crea un nuovo oggetto
    // col messaggio scritto nell'input
    // e lo pusha nella chat
    addNewMessage(){
      const newMessage = {
        date: '10/01/2020 15:50:00',
        message: this.textInput,
        status: 'sent'
      }
      const user = this.contacts[this.selectedContactIndex];
      user.messages.push(newMessage);
      this.textInput = '';

      // funzione che crea un nuovo messaggio
      // di risposta all'interlocutore
      setTimeout(() => {
        const responseMessage = {
            date: '10/01/2020 15:51:00', 
            message: 'OK',
            status: 'received' 
        };
        user.messages.push(responseMessage);
      }, 1500);
    },
    nameFilter(){
      // searchName leggere all'interno
      // comparare le lettere nell'array
      // scorrere l'array di contacts e leggere name
      // controllare se la stringa che mi da l'utente
      // è contenuta nel nome
      
      // converte la stringa di ricerca in minuscolo
      const searchString = this.searchName.toLowerCase();

      // Scorrere tutti i contatti
      this.contacts.forEach(objectUser => {
        // convertire il nome del contatto in minuscolo
        const contactName = objectUser.name.toLowerCase(); 

        // se il nome del contatto è contenuta nella striga utente
        // allora visible è true
        // else folse
        if (contactName.includes(searchString)) {
          objectUser.visible = true;
        } else {
          objectUser.visible = false;
        }
      
      });
    },
  }
    
}).mount('#app');



