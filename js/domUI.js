  class DomUI {

    constructor(_elementClass, _elementID) {
        this.elementID = _elementID;
        this.elementClass = _elementClass;
        
        var dom = document.createElement('div');
        dom.className = 'modalWrapper';
        dom.innerHTML = this.render();

        container.appendChild(dom);
    }

    render() {
        return `<div class="${this.elementClass}" id="${this.elementID}">
            <div class="${this.elementClass}-top">
                <span class="left"></span>
                <span class="center _width"><h1 id="title></h1></span>
                <span class="right"></span>
            </div>
            <div class="${this.elementClass}-middle _height">
                <span class="left"></span>
                <span class="center _width"></span>
                <span class="right"></span>
            </div>
            <div class="${this.elementClass}-bottom">
                <span class="left"></span>
                <span class="center _width"></span>
                <span class="right"></span>
            </div>
        </div>`;
    }
    
    show(_elementID) {
        document.getElementById(_elementID).style.display = 'block';
    }

    hide(_elementID){
        document.getElementById(_elementID).style.display = 'none';
    }
    


    addButton(value) {
    }

    setTitle(value) {
    }
    
    resize(_width, _height, _offsetX) {

        if( _offsetX === null ) {
            _offsetX = 1;
        }
        
        var dd = document.getElementById(this.elementID);
        dd.style.marginLeft = ( -_width * 0.5 * _offsetX ) + 'px';
        
        dd.getElementsByClassName('_height')[0].style.height = _height+'px';

        var resizeWid = dd.getElementsByClassName('_width');

        Array.prototype.filter.call(resizeWid, function(resizeWid){
            return resizeWid.style.width = _width+'px';
        });
    }
}
