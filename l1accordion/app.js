var getacctitle = document.getElementsByClassName('acctitle');
// console.log(getacctitles); // HTML Collection
var getacccontent = document.querySelectorAll('.acccontent');
// console.log(getacccontent); // NODE List

for(var x = 0; x < getacctitle.length; x++){
	// console.log(x);

	getacctitle[x].addEventListener('click',function(e){
		// console.log(e.target); // need e
		// console.log(this);

		this.classList.toggle('active');
		var getcontent = this.nextElementSibling; // no work with [x];
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height = null; // can't set 0
		}else{
			// console.log(getcontent.scrollHeight);
			getcontent.style.height = getcontent.scrollHeight + 'px';
		}

	});

	if(getacctitle[x].classList.contains('active')){
		getacccontent[x].style.height = getacccontent[x].scrollHeight + 'px';
	};


};