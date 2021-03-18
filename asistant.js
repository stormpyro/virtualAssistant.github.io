if (annyang) {
  var voices;

  var utter = new SpeechSynthesisUtterance();
  annyang.setLanguage("es-PE");
  utter.rate = 1;
  utter.pitch = 0.5;
  utter.lang = "es-PE";

  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
  };
  var commands = {
    "hola mariana": function () {
      utter.text = "Hola. Cómo te llamas?";
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
    "Me llamo :name": function (name) {
      utter.text = `Hola ${name}. En que te puedo ayudar.`;
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
    "Que eres": function () {
      utter.text =
        "Soy un asistente virtual diseñado para facilitarte el trabajo. Fui creada por ti.";
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
  };
  annyang.addCommands(commands);

  annyang.addCallback("resultNoMatch", function (undefinedTask) {
    alert("Lo siento no puedo entenderte. Repite nuevamente");
  });

  annyang.addCallback("error", function () {
    alert("There was an error");
  });

  annyang.start({ autoRestart: true, continuous: true });
}
