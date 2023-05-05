let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	document.body.classList.toggle('_lock');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const burgerText = document.querySelectorAll('.navigation[data-goto]');

if(burgerText.length > 0){
	burgerText.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if(menuBtn.classList.contains('active')){
				document.body.classList.remove('_lock');
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}