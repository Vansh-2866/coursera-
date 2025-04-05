(function(window){

var helloSpeaker={};
helloSpeaker.speakWord="hello";
helloSpeaker.speak=function(name){
  console.log(helloSpeaker.speakWord+" "+name);
}

window.helloSpeaker=helloSpeaker;
})(window);

