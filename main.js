var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
console.log(recognition);

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
        say();
    }
    
}

function say()
{
    var synth=window.speechSynthesis;
    speak_value="Taking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(speak_value);
    synth.speak(utter);
    Webcam.attach("#camera");
    setTimeout(function (){
        take_selfie();
        save();
    },5000);
}


Webcam.set({
    height:350,
    width:400,
    image_format:"png",
    png_quality:100
});
cam=document.getElementById("camera");

function take_selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="selfies" src=" '+data_uri+'">';
    });
}

function save()
{
    save_anchor=document.getElementById("anchor");
    image=document.getElementById("selfies").src;
    save_anchor.href=image;
    save_anchor.click();

}