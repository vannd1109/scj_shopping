document.addEventListener("DOMContentLoaded", function(event) { 
	let brand_choose = document.querySelectorAll('.scj-brand-choose'),
	brand_name	= document.querySelectorAll('.scj-brand-label');
	
	for (let i = 0; i < brand_choose.length; i++) {	
		if(brand_choose[i].checked){
			brand_choose[i].classList.toggle('choose');
			brand_name[i].classList.toggle('name_brand');
		}
		brand_choose[i].addEventListener('click', () => {
			console.log(brand_choose[i].checked);
			brand_choose[i].classList.toggle('choose');
			brand_name[i].classList.toggle('name_brand');
		});
	};
});