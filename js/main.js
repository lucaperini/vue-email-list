const app = new Vue({

    el : '#app',

    data : {
        counter : 0,
        generatedEmail : '',
        emailArray : [],
        
        

    },

    methods : {

    },

    mounted(){
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (answer){
            
                self.generatedEmail= answer.data.response;
                self.emailArray.push(answer.data.response);
                console.log (self.emailArray)
                
            
        });

    }
    
});


