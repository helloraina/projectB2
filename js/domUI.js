class domUI {
    constructor() {
        // create div - modal container
        // create inventory div 
        // show
        // hide 

        // inventory add item / remove item
        const modalContaienr = document.createElement('div');
        modalContaienr.className = "modalContainer";


        const inventory2 = document.createElement('div');
        inventory2.className = "modal";
        inventory2.id = "Inventory2";
        modalContaienr.appendChild(inventory2);

        const game = document.getElementById('Game');
        game.appendChild(modalContaienr);
    }

    // show() {
    //     console.log('show');
    //     this.modalcontainer.style.display = 'block';
    // }

    // hideInventory2() {
    //     this.modalcontainer.hide();
    // }
}
