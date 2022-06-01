export default function(btnClass,containerClass,closeItem) {

	const buttons = document.querySelectorAll(btnClass),
			  form = document.querySelector(`.${containerClass}`),
			  overlay = document.querySelector(".form_overlay"),
			  btnClose = document.querySelector(`.${closeItem}`),
			  body = document.querySelector("body"),
			  inputTel = document.querySelector(".form_tel");

	inputTel.value = inputTel.value.replace(/\D/g, "")

	inputTel.addEventListener("input" , () => {
		inputTel.value = inputTel.value.replace(/\D/g, "")
	})

	function popTheButton(btnPop){
		btnPop.addEventListener("click" , (e) => {
			e.preventDefault();
			form.classList.toggle(containerClass)
			overlay.classList.toggle("is_hid")
			body.style.overflow  = "hidden"
			document.querySelector("header").style.visibility = "hidden";
			document.querySelector("html").style.marginRight = `${scrollWidth()}px`

		})
	}

	function closeTheButton(btnC){
		if(btnC){
			btnC.addEventListener("click" , (e) => {
				e.preventDefault();
				form.classList.toggle(containerClass)
				overlay.classList.toggle("is_hid")
				body.style.overflow  = ""
				document.querySelector("html").style.marginRight = `${0}px`
				document.querySelector("header").style.visibility = "";

			})

			document.querySelector("#form").addEventListener("click" , (e) =>  {

				if(e.target === document.querySelector("#form")){
					overlay.classList.toggle("is_hid")
					form.classList.toggle(containerClass)
					body.style.overflow  = ""
					document.querySelector("html").style.marginRight = `${0}px`
					document.querySelector("header").style.visibility = "";
				}
			})
		}
	}

	function scrollWidth(){
		const div = document.createElement("div");
		document.body.append(div);
		div.style.width ="100px";
		div.style.height  = "100px";
		div.style.overflowY = 'scroll'
		div.style.visibility  =  "hidden";
		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove();
		return scrollWidth
	}
	
	popTheButton(buttons[0])
	popTheButton(buttons[1])
	closeTheButton(btnClose)

}

