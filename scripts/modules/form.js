export default () => {
	const sendRequest =  function(formInputs = null,url,method){

		return   fetch(url , {
			method : method,
			body : formInputs,
		})
	}

	const requestURL = 'https://jsonplaceholder.typicode.com/users',
			 input = document.querySelector(".form_sent"),
			 formId = document.querySelector("#form"),
			 overlay = document.querySelector(".form_overlay"),
			 body = document.querySelector("body");

	formId.addEventListener("submit" , (e) => {

		let formInputs = new FormData(formId);

		e.preventDefault()

		 sendRequest(formInputs , requestURL,"POST")
			.then(res => {
			return res.text();
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	})

	input.addEventListener("click" , () => {
		document.querySelector("#form_section").classList.toggle("form")
				overlay.classList.toggle("is_hid")
				body.style.overflow  = ""
				document.querySelector("html").style.marginRight = `${0}px`
				document.querySelector("header").style.visibility = "";


	})

}