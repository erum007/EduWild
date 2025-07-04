const button = document.querySelector('.btn-primary');
const content = document.querySelector('.content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    const speech = new SpeechSynthesisUtterance;
    speech.text='Voice activated.';
    window.speechSynthesis.speak(speech);
}
recognition.onresult = function(event){
 const current = event.resultIndex;
 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoud(transcript);
}
button.addEventListener('click', () =>{
recognition.start();
});
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance;
        if(message.includes('pay')){
            speech.text= 'See here';
            window.location.replace("https://virtualwallet007.netlify.app/");
        };
        if(message.includes('payment')){
            speech.text= 'See here';
            window.location.replace("https://virtualwallet007.netlify.app/");
        };
        if(message.includes('transaction')){
            speech.text= 'See here';
            window.location.replace("https://virtualwallet007.netlify.app/");
        };
        if(message.includes('virtual wallet')){
            speech.text= 'See here';
            window.location.replace("https://virtualwallet007.netlify.app/");
        };
        if(message.includes('wallet')){
            speech.text= 'See here';
            window.location.replace("https://virtualwallet007.netlify.app/");
        };
        if(message.includes('help')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('emergency')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('doctors')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('drug stores')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('hospitals')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('fire stations')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('pharmacies')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('Police stations')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('police stations')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('vet')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('Vet')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('Vets')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('vets')){
            speech.text= 'See here';
            window.location.replace("https://locationss.netlify.app/?#/app8");
        };
        if(message.includes('disaster')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Disaster%20Detectors.html");
        };
        if(message.includes('disasters')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Disaster%20Detectors.html");
        };
        if(message.includes('Disaster')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Disaster%20Detectors.html");
        };
        if(message.includes('Disasters')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Disaster%20Detectors.html");
        };
        if(message.includes('wildfire')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('Wildfires')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('wildfire')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('Wildfire')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('fire')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('fires')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('Fire')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('Fires')){
            speech.text= 'See here';
            window.location.replace("https://wildfiretrackernasa.netlify.app");
        };
        if(message.includes('storm')){
            speech.text= 'See here';
            window.location.replace("https://severestormtrackernasa.netlify.app");
        };
        if(message.includes('storms')){
            speech.text= 'See here';
            window.location.replace("https://severestormtrackernasa.netlify.app");
        };
        if(message.includes('Storms')){
            speech.text= 'See here';
            window.location.replace("https://severestormtrackernasa.netlify.app");
        };
        if(message.includes('Storm')){
            speech.text= 'See here';
            window.location.replace("https://severestormtrackernasa.netlify.app");
        };
        if(message.includes('volcano')){
            speech.text= 'See here';
            window.location.replace("https://activevolcanotrackernasa.netlify.app/");
        };
        if(message.includes('Volcano')){
            speech.text= 'See here';
            window.location.replace("https://activevolcanotrackernasa.netlify.app/");
        };
        if(message.includes('volcanoes')){
            speech.text= 'See here';
            window.location.replace("https://activevolcanotrackernasa.netlify.app/");
        };
        if(message.includes('Volcanoes')){
            speech.text= 'See here';
            window.location.replace("https://activevolcanotrackernasa.netlify.app/");
        };
        if(message.includes('crops')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('Crop')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('Crops')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('crop')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('plants')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('Plants')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('Plant')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('plant')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/Crop%20Databases.html");
        };
        if(message.includes('Crime')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('Crimes')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('crime')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('crimes')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('poach')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('Poach')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('Poacher')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('poacher')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('Poachers')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('poachers')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('poaching')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        };
        if(message.includes('Poaching')){
            speech.text= 'See here';
            window.location.replace("https://eduwildact.netlify.app/ML%20Models.html");
        }
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        
}
        

