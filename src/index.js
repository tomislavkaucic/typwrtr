export default class Typwrtr {

  constructor(id, options = {}) {
      const defaults = {
          text: ["It was a bright cold day in April, and the clocks were striking thirteen.", "It was a pleasure to burn."],
          speed: 50,
          pauseTime: 2500,
          infinite: true,
          textCursor: true,
          backspace: true,
          width: 0
      };
      const setup = Object.assign({}, defaults, options);
      this.id = id;
      this.element = document.getElementById(id);
      this.text = setup.text;
      this.speed = setup.speed;
      this.pauseTime = setup.pauseTime;
      this.infinite = setup.infinite;
      this.textCursor = setup.textCursor;
      this.backspace = setup.backspace;
      this.width = setup.width;

      if (this.width > 0) {
          this.element.style.display = 'inline-block';
          this.element.style.width = this.width + 'px';
      }
      this.type();
  }

  async type() {
      var i = 0;
      if (this.textCursor == true) {
          this.element.classList.add('tw-text-cursor');
      }
      for (i = 0; i < this.text.length; i++) {
          var j = 0;
          this.element.innerHTML = "";
          while (j < this.text[i].length) {
              this.element.innerHTML += this.text[i].charAt(j);
              j++;
              await this.sleep(this.speed);
          }
          await this.sleep(this.pauseTime);

          if (this.backspace == true && i != (this.text.length - 1)) {
              var k = this.element.innerHTML.length;
              for (k; k >= 0; k--) {
                  this.element.innerHTML = this.element.innerHTML.slice(0, -1);
                  await this.sleep(this.speed);
              }
          }
      }

      if (this.infinite == true ) {
          this.type();
      }
  }

  sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
}
