let menu = document.querySelector('#menu_btn');
let header = document.querySelector('.header');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

let themetoggle = document.querySelector('#themetoggle');
themetoggle.onclick = () =>{
	themetoggle.classList.toggle('fa-sun');
	if(themetoggle.classList.contains('fa-sun')){
		document.body.classList.add('active');
	}else{
		document.body.classList.remove('active');
	}
}

function alert(){
	swal("Good job!", "Thanks for giving responce!", "success");
}

  var swiper = new Swiper(".review-slider", {
  	    spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });