const copyToClipboard = element => {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(`#${element}`).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

const getUrl = () =>{
	let nowUrl;
	let url = window.location.href;
	url = url.split('/');
	url.forEach((item, index, urls)=>{
		if(item.includes('index')){
			if(index-1 < 0){
				nowUrl = [0, index];
			}
			nowUrl = [index-1, index];
		}
	})

	return [url[nowUrl[0]], url[nowUrl[1]]];

}

const clearUrl = function(){
	if(window.location.href.includes('#')){
		return window.location.href.split('#')[0];
	}
	else{
		return window.location.href
	}
}

const goToUrl = (url, stay = false) =>{
	if(stay){
		lastUrl = clearUrl();
		window.location.href=lastUrl+url;
	} else{
		window.location.href = url;
	}
}

$('#home-btn').on('click', ()=>{
	goToUrl('#', true);
})

$('#search-box').on('keyup', (event)=>{
	if(event.which === 13){
		let url =$('#search-box').val();
		if($('#search-box').val().includes(' ')){
			url = $('#search-box').val();
			url = url.replace(' ', '-');
		}
		goToUrl(`#${url}`, true)
	}
})
mode = false;
$('#mode').on('click', ()=>{
	mode = (mode == false);
	if(mode){
		$('body').removeClass('bg-sunday text-dark')
		$('body').addClass('bg-dark text-light')

		$('.list-group-item').removeClass('bg-sunday text-dark')
		$('.list-group-item').addClass('bg-dark text-light border border-light')

		$('.flex-wrap').removeClass('border border-dark')
		$('.flex-wrap').addClass('border border-light')

		$('#footer').removeClass('bg-sunday')
		$('#footer').addClass('bg-dark')

		$('#home-btn').removeClass('bg-dark')
		$('#home-btn').addClass('bg-sunday')

	} else{
		$('body').removeClass('bg-dark text-light')
		$('body').addClass('bg-sunday text-dark')

		$('.list-group-item').removeClass('bg-dark text-light border border-light')
		$('.list-group-item').addClass('bg-sunday text-dark')

		$('.flex-wrap').removeClass('border border-light')
		$('.flex-wrap').addClass('border border-dark')

		$('#footer').removeClass('bg-dark')
		$('#footer').addClass('bg-sunday')

		$('#home-btn').removeClass('bg-sunday')
		$('#home-btn').addClass('bg-dark')
	}
})
