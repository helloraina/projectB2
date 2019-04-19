  
  
  
  
  class DomUI {
    constructor() {
      const game = document.getElementById('Game');
      this.screenWidth = game.offsetWidth;
      this.screenHeight = game.offsetHeight;
    }

    test () {
      const container = document.createElement('div');
      container.className = 'uiContainer';
      document.body.appendChild(container);

      // const btn = new DomButton('center');
      const dot = document.createElement('div');
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.backgroundColor = 'red';

      container.appendChild(dot);

      dot.moveToCenter();
      // btn.moveToLeft();
      // btn.moveToRight();

      // btn.setPosition(800, 200);
      dot.setPosition(399, 200);
    }

    moveToCenter(){
      this.style.position = 'absolute';
      this.style.left = 0 + 'px';
      this.style.right = 0 + 'px';
      this.style.margin = '0 auto';
    }

    moveToLeft(){
      this.style.position = 'absolute';
      this.style.left = 0 + 'px';
    }

    moveToRight(){
      this.style.position = 'absolute';
      this.style.right = 0;
    }

    moveToBottom(){
      this.style.position = 'absolute';
      this.style.bottom = 0 + 'px';
    }

    setPosition(x, y) {
      this.style.position = 'absolute';
      
      var offsetX = this.dom.offsetLeft;
      var offsetY = this.dom.offsetTop;

      this.style.top = 'auto';
      this.style.bottom = 'auto';

      this.style.left = 'auto';
      this.style.right = 'auto';
      this.style.margin = '0';

      if( offsetX > this.screenWidth/2 ) {
        this.style.right = 'auto';
      } else {
        this.style.left = 'auto';
      }
      console.log(x + ' / ' + offsetX + ' / ' + offsetY);
      // if( offsetX > this.screenWidth ) {
      //   console.log('document --- 111' );
      //   offsetX = 0;
      // }

      console.log(x + ' / ' + offsetX + ' / ' + offsetY);

      this.style.left = offsetX + x + 'px';
      this.style.top = offsetY + y + 'px';

      console.log('' + this.dom.offsetLeft + ' / ' + offsetY);
      console.dir(this.dom);
    }
  }

class DomModal extends DomUI {
  
  constructor (container, _width, _height) {
    super();
  
    const domModal = document.createElement('div');

    domModal.innerHTML = this.render();
    domModal.classList.add('pixelBox');
    domModal.classList.add('hasCloseBtn');// 삭제 시 닫기버튼 감춤.

    domModal.style.width = _width + 'px';
    domModal.style.height = _height + 'px';

    // modal background image path 변경
    // var path = "modal2";
    for(let i = 0; i < domModal.children.length; i++) {
      var pixel = domModal.children[i];

      // pixel.style.backgroundImage = `url('/assets/ui/${path}/nineBox_0${i+1}.png')`;
      
      if( pixel.classList.contains('_width')) {
        pixel.style.width = (_width - 26)  + 'px';
      } 
      if ( pixel.classList.contains('_height') ) {
        pixel.style.height = (_height - 26)  + 'px';
      }
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'closeBtn';
    domModal.appendChild(closeBtn);

    this.removeDom (closeBtn);

    this.dom = domModal;
    console.dir(closeBtn);
  }


  addTitle(text) {
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = text;
    this.dom.appendChild(title);
  }

  removeDom(target) {
    target.addEventListener('click', function() {
      target.parentNode.parentNode.removeChild(target.parentNode);
    });
  }

  render() {
    return `
        <div class="pixel"></div>
        <div class="pixel _width"></div>
        <div class="pixel"></div>
        <div class="pixel _height"></div>
        <div class="pixel _width _height"></div>
        <div class="pixel _height"></div>
        <div class="pixel"></div>
        <div class="pixel _width"></div>
        <div class="pixel"></div>
     `;
  }
}

class DomButton extends DomUI {
  constructor (value, type) {
    super();

    const button = document.createElement('button');
    button.innerHTML = value;
    button.className = 'button';
    // button.style.position = 'absolute';

    if( type !== undefined ) {
      button.classList.add(type); 
    }
    this.dom = button;
  }

  onClick(callback) {
    this.addEventListener('click', function() {
      if(callback) {
        callback();
      }
    });
  }

}
