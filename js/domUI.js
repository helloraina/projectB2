  class DomUI {
    constructor() {
      const game = document.getElementById('Game');
      
      const domContainer = document.createElement('div');
      domContainer.className = 'uiContainer';

      this.container = domContainer;
      this.screenWidth = game.offsetWidth;
      this.screenHeight = game.offsetHeight;
    }

    createBaseDom() {
      const domContainer = document.createElement('div');
      domContainer.className = 'uiContainer';

      document.body.append(domContainer);

      this.container = domContainer;
    }

    removeBaseDom() {
      document.body.removeChild(this.container);
    }

    showModal(name) {
      this.createBaseDom();

      var modal = new DomModal(this.container, 400, 300);
      
      this.addChild(modal.dom);
      modal.addTitle(name);
      this.modal = modal.dom;

      var btn = new DomButton('Okay');
      btn.setPosition('bottom', 'right');
      modal.dom.appendChild(btn.dom);
      
      setTimeout(() => {
        this.modal.style.transform = 'translate(135%, 10%)';
      }, 100);
    }

    hideModal(){
      this.removeBaseDom();
    }

    addChild(_dom) {
      this.container.appendChild(_dom);
    }
  }

class DomModal extends DomUI {
  constructor (container, _width, _height) {
    super();
    var domModal = document.createElement('div');

    domModal.innerHTML = this.render();
    domModal.classList.add('pixelBox');
    domModal.classList.add('hasCloseBtn');// 삭제 시 닫기버튼 감춤.

    domModal.style.width = _width + 'px';
    domModal.style.height = _height + 'px';
    
    // modal background image path 변경
    var path = "modal2";

    for(let i = 0; i < domModal.children.length; i++) {
      var pixel = domModal.children[i];

      pixel.style.backgroundImage = `url('/assets/ui/${path}/nineBox_0${i+1}.png')`;
      
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
    console.dir(domModal);
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

    if( type !== null ) {
      button.classList.add(type); 
    }
    this.dom = button;
  }

  setPosition(_vertical, _align) {
    // _vertical: top, bottom
    // _align: left, center, right

    this.dom.classList.add('__' + _vertical);
    this.dom.classList.add('__' + _align);
  }
}

class DomInventory extends DomModal {
  constructor () {
    const contentBox = document.createElement('div');
    this.addChild(contentBox);
    this.content = contentBox;
  }
  updateItems() {
    const _colum = 5;
    const _row = 3;

    itemsWrap.style.className = 'inventoryContents';

    const item = document.createElement('div');

  }
}