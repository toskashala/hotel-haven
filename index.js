const title = document.querySelectorAll('.title');
const about = document.querySelectorAll('.about-info');
const title1 = document.querySelectorAll('.title1');
const title2 = document.querySelectorAll('.title2');
const title3 = document.querySelectorAll('.title3');
const title4 = document.querySelectorAll('.title4');
const offer = document.querySelectorAll('.offers');
const room = document.querySelectorAll('.room');
const grid = document.querySelectorAll('.grid-container');
const booking = document.querySelectorAll('.booking-form');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;

  if (scrollValue > 350) {
    title.forEach(title => title.classList.add('show'));
    about.forEach(about => about.classList.add('show'));

  }
  if (scrollValue > 900) {
    title1.forEach(title1 => title1.classList.add('show'));

  }
  if (scrollValue > 1000) {
    offer.forEach(offer => offer.classList.add('show'));
  }

  if (scrollValue > 1600) {
    title2.forEach(title2 => title2.classList.add('show'));
  }

  if (scrollValue > 1800){
    room.forEach(room => room.classList.add('show'));
  }

  if (scrollValue > 2600){
    title3.forEach(title3 => title3.classList.add('show'));
  }
  if (scrollValue > 2800){
    grid.forEach(grid => grid.classList.add('show'));
  }

  if (scrollValue > 3300) {
    title4.forEach(title4 => title4.classList.add('show'));
  }
  if (scrollValue > 3500) {
    booking.forEach(booking=> booking.classList.add('show'));
  }



});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  const offer1 = document.getElementById('offer1');
  const rooms = document.getElementById('rooms'); 
  
  offer1.addEventListener('click', () => {
    rooms.scrollIntoView({ behavior: 'smooth' });
  });




  