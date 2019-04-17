  class DomUI {
    constructor(domClass, domID) {

      // ui type === modal -> class - flex_modal
      this.domID = domID;
      this.domClass = domClass;

      // var dom = document.createElement('div');
      // dom.className = 'modalWrapper';
      // dom.innerHTML = this.render();

      // container.appendChild(dom);
    }
    //modal인 경우 -

    render() {
      return `
        <div class="${this.domClass}" id="${this.domID}">
          <div class="${this.domClass}-top">
              <span class="left"></span>
              <span class="center _width"></span>
              <span class="right"></span>
          </div>
          <div class="${this.domClass}-middle _height">
              <span class="left"></span>
              <span class="center _width"></span>
              <span class="right"></span>
          </div>
          <div class="${this.domClass}-bottom">
              <span class="left"></span>
              <span class="center _width"></span>
              <span class="right"></span>
          </div>
        </div>`;
    }

    render2() {
      return `
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
          <div class="pixel"></div>
       `;
    }

    show() {
      document.getElementById(this.domID).style.display = 'block';
      container.classList.add('show');

      this.addCloseBtn();
    }

    hide() {
      document.getElementById(this.domID).style.display = 'none';

      // document.getElementById(this.domID).parentNode.remove(this);
      container.classList.remove('show');
    }

    addButtonEvent(value, type) {
      const button = document.createElement('button');
      const target = document.getElementById(this.domID);
      
      target.querySelector('.flex_modal-bottom').querySelector('.center').appendChild(button);

      button.innerHTML = value;
      button.classList.add('button');
      button.classList.add('s1');
      
      console.dir(button);

      button.addEventListener('click', function () {
        console.log('close');
        let modalID = target.parentNode.querySelector('div').id;
        document.getElementById(modalID).style.display = 'none';
        container.classList.remove('show');
      });
    }


    addCloseBtn (){
      const target = document.getElementById(this.domID);

      const closeBtn = document.createElement('button');
      closeBtn.className = 'closeBtn';
      
      target.querySelector('.flex_modal-top').appendChild(closeBtn);
    }
    showTestModal() {
      document.createAttribute
    }

    setTitle(value) {
      const title = document.createElement('h2');
      title.id = "title";
      const modal = document.getElementById(this.domID);
      
      if(modal.querySelector('#title') !== null ) {
        return false;
      } 

      modal.querySelector('.flex_modal-top').querySelector('.center').appendChild(title);

      console.log('value ' + value);
      title.innerHTML = value;
    }

    resize(_width, _height, _offsetX) {
      // 팝업을 여러개 띄울 때 위치 조정이 필요함..임시 
      if (_offsetX === null) {
        _offsetX = 1;
      }

      var dd = document.getElementById(this.domID);
      
      dd.style.marginLeft = (-_width * 0.5 * _offsetX) + 'px';
      dd.getElementsByClassName('_height')[0].style.height = _height + 'px';

      var resizeWid = dd.getElementsByClassName('_width');

      Array.prototype.filter.call(resizeWid, function (resizeWid) {
        return resizeWid.style.width = _width + 'px';
      });
    }


    showpixel() {
      const pixelBox = document.createElement('div');
      pixelBox.id = "pixelBox";
      container.appendChild(pixelBox);
      pixelBox.innerHTML = this.render2();
    }

    pixelresize(value) {
      const pixelBox = document.getElementById('div');
      pixelBox.getElementsByClassName('pixel').style.width = value + 'px';
    }
  }
