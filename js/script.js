var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  delete: 30,
});

typewriter
  .pauseFor(100)
  .typeString('Type some random template bullshit nigger thing in here')
  .pauseFor(300)
  .deleteChars(71)
  .typeString('Write more stuff in here')
  .pauseFor(100)
  .deleteChars(24)
  .typeString('<strong> This is some more random shit <a href="https://evan.systems"> um </a> </strong>')
  .pauseFor(1000)
  .start();