  
class NineBox extends DomUI {
  constructor (_path, _width, _height) {
    super();
  
    const nineBox = document.createElement('div');
    nineBox.innerHTML = this.render();
    nineBox.classList.add('pixelBox');

    nineBox.style.width = _width + 'px';
    nineBox.style.height = _height + 'px';

    this.dom = nineBox;

    // modal background image path 변경
    
    for(let i = 0; i < nineBox.children.length; i++) {
      var pixel = nineBox.children[i];
      
      if( _path !== undefined ) {
        pixel.style.backgroundImage = `url('/assets/ui/${_path}/nineBox_0${i+1}.png')`;
      }

      if( pixel.classList.contains('_width')) {
        pixel.style.width = (_width - 26)  + 'px';
      } 
      if ( pixel.classList.contains('_height') ) {
        pixel.style.height = (_height - 26)  + 'px';
      }
    }
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


class Modal extends DomUI {
  constructor(title) {
    super();

    this.dom = new NineBox(358,316);
    this.dom.addTitle(title);
    this.dom.classList.add('modal');
    this.dom.classList.add(title);
  }

  show() {
    this.container.appendChild(this.dom);
  }
}


class Button extends DomUI {
  constructor (value, type) {
    super();

    const button = document.createElement('button');
    button.innerHTML = value;
    button.className = 'button';
    button.style.position = 'absolute';
    

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


class ChatBallon2 extends DomUI {
  // character
  constructor(character, chatText) {
      super(); 
      // 한글자씩 나오는 애니메이션을 고민해보자
      this.follower = character;
      const MAX_CHAT_WIDTH = 180;

      // this.classList.add('chat');
      // this.style.wordWrapWidth(MAX_CHAT_WIDTH);
      console.log('chatText: ' + chatText);

      // 캐릭터의 위치에 맞추어서 넣어야 한다
      const width = chatText.length * 10;
      const height = chatText.offsetHeight + 36;

      const plane = new NineBox('dialog', width, height );
      // plane.width = textMetrics.width + 36;
      // plane.height = textMetrics.height + 36;
      this.plane = plane.dom;

      const comma = document.createElement('div');
      comma.style.backgroundImage = 'url(chatballon_comma.png) no-repeat';
      comma.style.width = '11px';
      comma.style.height = '22px';

      // comma.position.y = plane.height - 5;
      this.comma = comma;

      const text = document.createElement('p');
      text.innerText = chatText;
      
      this.plane.appendChild(comma);
      this.plane.appendChild(text);

      this.container.appendChild(this.plane);

      this.updatePosition();
  }
  
  updatePosition() {
      const character = this.follower;
      const plane = this.plane;
      const comma = this.comma;

      const gpos = character.toGlobal(new PIXI.Point(0, 0));
      // plane.position.x = Math.max(gpos.x - plane.width / 2, 0);
      // plane.position.y = Math.max(gpos.y - character.height - plane.height - 36, 0);
      plane.style.position = 'absolute';
      
      plane.style.left = Math.max(gpos.x - plane.width / 2, 0) + 'px';
      plane.style.top = Math.max(gpos.y - character.height - plane.height - 36, 0)+ 'px';

      comma.style.left = plane.width / 2 + 'px';
  }
}
class StageTitle {
  constructor(container, text) {
    
  }
}


class DomUI {
  constructor() {
    console.log('-- DomUI --');

    this.gamePane = document.getElementById('Game');
    this.screenWidth = this.gamePane.screenWidth;
    this.screenHeight = this.gamePane.screenHeight;
    
    this.chatBallons = [];

    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  test () {
    const btn = new Button('Test');

    btn.moveToCenter();
    // btn.moveToLeft();
    // btn.moveToRight();
    btn.setPosition(399, 200);

    this.container.appendChild(btn.dom);
    // console.dir(chatBox);

    // const chat = new ChatBallon2(player, 'difalsienfld');
    // container.append(chat);
    // const chat = new ChatBallon2(this.game.player, )
    document.body.appendChild(this.container);
  }

  moveToCenter(){
    this.dom.style.position = 'absolute';
    this.dom.style.left = 0 + 'px';
    this.dom.style.right = 0 + 'px';
    this.dom.style.margin = '0 auto';
  }

  moveToLeft(){
    this.dom.style.position = 'absolute';
    this.dom.style.left = 0 + 'px';
  }

  moveToRight(){
    this.dom.style.position = 'absolute';
    this.dom.style.right = 0;
  }

  moveToBottom(){
    this.dom.style.position = 'absolute';
    this.dom.style.bottom = 0 + 'px';
  }

  setPosition(x, y) {
    this.dom.style.position = 'absolute';
    
    var offsetX = this.dom.offsetLeft;
    var offsetY = this.dom.offsetTop;

    this.dom.style.top = 'auto';
    this.dom.style.bottom = 'auto';

    this.dom.style.left = 'auto';
    this.dom.style.right = 'auto';
    this.dom.style.margin = '0';

    if( offsetX > this.screenWidth/2 ) {
      this.dom.style.right = 'auto';
    } else {
      this.dom.style.left = 'auto';
    }
    console.log(x + ' / ' + offsetX + ' / ' + offsetY);

    this.dom.style.left = offsetX + x + 'px';
    this.dom.style.top = offsetY + y + 'px';

    console.log('' + this.dom.offsetLeft + ' / ' + offsetY);
    console.dir(this.dom);
  }

  addTitle(container, text) {
    this.title = document.createElement('h1');
    this.title.innerText = text;
    this.title.className = 'title';
    container.appendChild(title);
  }

  showChatBallon(character, text, duration) {
    const chat = new ChatBallon2(character, text);
    this.container.appendChild(chat);
    this.chatBallons.push(chat);
    duration = duration || 3;

    setTimeout(() => {
        this.removeChild(chat);
        const index = this.chatBallons.indexOf(chat);
        if (index >= 0) {
            this.chatBallons.splice(index, 1);
        }
    }, duration * 1000);
  }


  showStageTitle(text, delay) {

  }
}