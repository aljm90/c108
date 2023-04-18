var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =new SpeechRecognition();
var Textbox = document.getElementById("textbox");
function start(){
    TextboxinnerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
console.log(event);
var Content = event.results[0][0].transcript;
Textbox.innerHTML = Content;
console.log(Content);
if(Content == "Photo.")
{
    console.log("tomando selfie ");
    speak();
}


}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Tamando tu Selfie en 5 segundo";
    synth.speak(utterThis);
   webcam.attach(camera);
   setTimeout(function(){
    take_sellfie();
    save();
   },5000 );
}
camera = document.getElementById("camera");
Webcam.set({
    whith:360,
    height:750,
    imagen_format :'jpeg',
    jpeg_quality:90
});

function take_sellfie(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';   
});
} 
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_iamge").src ;
    link.href = "image"
    link.clik();
}

