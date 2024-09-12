let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

    menu.onclick =()=>{
        menu.classList.toogle('bx-x');
        navbar.classList.toogle('active');
    }

    window.onscroll =( ) =>{
        menu.claassList.remove('bx-x');
        navbar.classList.remove('active');
    }

   const typed = new Typed('.multiple-text', {
        strings: ['Physical Fitness', 'Weight Gain',' Strength Training','Fat loose','Weight Lifting'],
        typeSpeed: 60,
        backspeed:60,
        backDelay:1000,
        loop:true,
      });