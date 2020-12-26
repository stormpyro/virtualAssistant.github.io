if (annyang) {
  var voices;

  var utter = new SpeechSynthesisUtterance();

  utter.rate = 1;
  utter.pitch = 0.5;
  utter.lang = "es-PE";

  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
  };

  var commands = {
    "hola mariana": function () {
      utter.text = "Hola Renato";
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
    "Quien eres": function () {
      utter.text =
        "Soy un asistente virtual diseñado para facilitarte el trabajo. Fui creada por ti.";
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
    "Quien es dani": function () {
      utter.text =
        "Danixsa es novia de mi creador Renatto. Es extremadamente bella y una mamasita. Hoy van a reunirse.";
      utter.voice = voices[7];
      window.speechSynthesis.speak(utter);
    },
  };

  annyang.addCommands(commands);

  annyang.start({ autoRestart: false, continuous: true });
}
