import $ from 'jquery';

class MobileMenu {

    constructor() {
        //$(".site-header__menu-icon").click()
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        //console.log('Icons was clicked');
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
    }
}


export default MobileMenu;