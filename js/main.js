const app = new Vue({

    el : '#app',

    data : {
        
        generatedEmail : '',
        emailArray : [],
    },

    methods : {

    },

    mounted(){
        
        const self = this;
        for (let i =0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (function (answer){
            self.generatedEmail= answer.data.response;
            self.emailArray.push(answer.data.response);
            });
        }
    }
    
});


