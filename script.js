const checkbox = document.querySelector('#checkbox');
const html = document.querySelector('html');

// ketika diklik

checkbox.addEventListener('click', function(){
    //cek color mode now, abis tuh ubah
    if(html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'dark';
    } else {
        html.dataset.colorMode = 'light';
    }

});

//control
const padding = document.querySelector('#padding');

const color = document.querySelector('#color');

padding.addEventListener('mousemove', function(){
    document.documentElement.style.setProperty('--box-padding', this.value + 'px');
});

color.addEventListener('change', function(){
    document.documentElement.style.setProperty('--box-color', this.value);
});

function myFunction() {
    var x = document.getElementById("divMore");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function myFun() {
    var x = document.getElementById("abo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//hamburger menu
const menuToggle = document.querySelector('.menu-toggle input'); 
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
