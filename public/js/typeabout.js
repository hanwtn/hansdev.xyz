class TextTyper {
  constructor(el, minTypingTime = 29, randomTypingTime = 30) {
    this.container = el;
    this.cursorBlinkerTimeoutId;
    this.waitCharacters = ".?!";

    this.minTypingTime = minTypingTime;
    this.randomTypingTime = randomTypingTime;

    this.stopAnimation = false;
    this.currPromiseChain = Promise.resolve();
  }

  type(text) {
    for (let char of text) {
      this.typeLetter(char);
      if (this.waitCharacters.includes(char)) this.wait(300);
    }
    return this;
  }

  typeLetter(char) {
    this.chain(
      () =>
        new Promise((resolve) => {
          if (this.stopAnimation) return resolve();

          setTimeout(() => {
            this.container.innerText += char;
            this.stopCursorBlinking();
            resolve();
          }, this.getRandomTimeout());
        })
    );
    return this;
  }

  getRandomTimeout() {
    // simulates real person's typing
    return Math.random() * this.randomTypingTime + this.minTypingTime;
  }

  stopCursorBlinking() {
    this.container.classList.add("typing");
    clearTimeout(this.cursorBlinkerTimeoutId);
    this.cursorBlinkerTimeoutId = setTimeout(() => {
      this.container.classList.remove("typing");
    }, 200);
  }

  remove(num) {
    for (let i = 0; i < num; i++) {
      this.removeLetter();
    }
    return this;
  }

  removeLetter() {
    this.chain(
      () =>
        new Promise((resolve) => {
          if (this.stopAnimation) return resolve();

          setTimeout(() => {
            let currText = this.container.innerText;
            this.container.innerText = currText.slice(0, currText.length - 1);
            this.stopCursorBlinking();
            resolve();
          }, this.getRandomTimeout() / 2.5);
          // removing characters is usually much faster than typing
        })
    );
    return this;
  }

  chain(callback) {
    this.currPromiseChain = this.currPromiseChain.then(callback);
    return this;
  }
  wait(time) {
    this.chain(
      () =>
        new Promise((resolve) => {
          if (this.stopAnimation) return resolve();
          setTimeout(resolve, time);
        })
    );
    return this;
  }
  clear() {
    this.chain(() => (this.container.innerText = ""));
    return this;
  }
  skip() {
    this.chain(
      () =>
        (this.container.innerText = `Hello, my name's Han Win Tun. You can call me Hans. I am a 19-year-old-burmese.
\nmy things ↓`)
    );
    return this;
  }
  stop() {
    this.stopAnimation = true;
    this.chain(() => (this.stopAnimation = false));
    return this;
  }
  clearNow() {
    this.stop().clear();
    return this;
  }
}

let typer = new TextTyper(document.getElementById("type-me"));

document.querySelector(".buttons").addEventListener("click", (e) => {
  let btnId = e.target.id;
  switch (btnId) {
    case "stop":
      typer.stop();
      break;
    case "coding":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer.clearNow().type("I like tinkering with some code.", 1000);
      break;
    case "photography":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer
        .clearNow()
        .type("I am interested in photography and cinematography.", 1000);
      break;
    case "travel":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer.clearNow().type("I like vacations.", 1000);
      break;
    case "music":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "fab fa-spotify";
        document
          .getElementById("link-icon-a")
          .setAttribute(
            "href",
            "https://open.spotify.com/user/0b6qzvfhx22divy2ffgwrpzuk?si=9Y1pLkI9SVSP3RxWn6o4OA"
          );
      });
      typer
        .clearNow()
        .type(
          "I listen mostly to melodic dubsteps. Check out my playlists on Spotify.",
          1000
        );
      $(document).ready(function () {
        $("#link-icon").hide().delay(4000).fadeIn(500);
      });
      break;
    case "shows":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "fas fa-film";
        document
          .getElementById("link-icon-a")
          .setAttribute("href", "https://boxd.it/3nPLh");
      });
      typer.clearNow().type("I binge tv shows. Check out my letterboxd!", 1000);
      $(document).ready(function () {
        $("#link-icon").hide().delay(3000).fadeIn(500);
      });
      break;
    case "gaming":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer.clearNow().type("I play moba and battle royale.", 1000);
      break;
    case "chess":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer.clearNow().type("Challenge me on chess dot com. :)", 1000);
      break;
    case "coffee":
      $(document).ready(function () {
        document.getElementById("link-icon").className = "";
        document.getElementById("link-icon-a").setAttribute("href", "");
      });
      typer
        .clearNow()
        .type("I love to drink coffee and listen to stories.", 1000);
      break;
    case "clear":
      typer.clearNow();
      break;
  }
});

const init = () => {
  // typing is devided into a few function calls just to demonstrate flexibility
  typer
    .clearNow()
    .wait(200)
    .type("Hello")
    .type(" world")
    .wait(80)
    .remove(" world".length)
    .wait(20)
    .type(", ")
    .wait(50)
    .type("my name's Han Win Tun. You can call me Hans. ")
    .wait(70)
    .type("\nI am a 19-year-old burmese. ")
    .wait(100)
    .type("\nThese're my things ↓");
};
init();
