var Fn = {
	clear: function(options) {
		const buttonClear = document.createElement('button');
        buttonClear.innerText  = 'x';
        buttonClear.classList.add('clear');

        const inputArr = document.querySelectorAll('.enter-text');
        inputArr.forEach(item => {
            item.addEventListener('focus', function() {
                item.parentNode.appendChild(buttonClear);
                if (options.side == 'left') {
                    buttonClear.classList.add('clear--left');
                    item.classList.add('enter-text--left');
                }
                item.setAttribute('placeholder', '');
            });
        });

        const wrapArr = document.querySelectorAll('.wrap');
        wrapArr.forEach(item => {
            item.addEventListener('click', function(e) {
                if(e.target.previousSibling) {
                    e.target.previousSibling.value = '';
                };
            });
        }); 
	}
};

 



