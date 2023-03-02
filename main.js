//https://teachablemachine.withgoogle.com/models/SlHh3CwHe/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true, video: false})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SlHh3CwHe/model.json',{ probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var Strogonoff = 0;
var Pizza = 0;
var Pastel = 0;
var resultado = "";