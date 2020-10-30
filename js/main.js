let menuBtn = document.querySelector('.hamburger-menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true
    }
    else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
});

document.querySelector('.hamburger-menu').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))




/*

new Vue({
    el: "#app",
    data:{
        menuOpen : false
    },
    methods:{
        editClassMenu(){
            if (!this.menuOpen){
                menuBtn.classList.add('open')
                this.menuOpen = true
            }
            else {
                menuBtn.classList.remove('open')
                this.menuOpen = false
            }
        }
    }

})*/
