export default () => {
	// parentSelector,mobileItem,text
	class Cards {
		constructor(parent,mobileItem,text){
			this.parent = document.querySelector(parent);
			this.mobileItem = mobileItem;
			this.text = text;
		}
		render(){
			let element = document.createElement("div");
			element.classList.add("col-md-4");
			element.innerHTML = `
			<div class="mobile_item ${this.mobileItem}">
                        <div class="mobile_item_subtitle">${this.text}</div>
                        <div class="mobile_item_plus"></div>
                    </div>
			`
			this.parent.append(element);
		}
	}

	let card1 = new Cards("#row","mobile_item_1" ,"ОФОРМЛЕНИЕ ЗАКАЗА ОДНИМ КАСАНИЕМ").render();
	let card2 = new Cards("#row","mobile_item_2" ,"НАДЕЖНАЯ ПОДАЧА").render();
	let card3 = new Cards("#row","mobile_item_3" ,"ПРОЗРАЧНЫЕ ЦЕНЫ").render();
	let card4 = new Cards("#row","mobile_item_4" ,"БЕЗНАЛИЧНАЯ ОПЛАТА").render();
	let card5 = new Cards("#row","mobile_item_5" ,"ОБРАТНАЯ СВЯЗЬ").render();
	let card6 = new Cards("#row","mobile_item_6" ,"РАЗДЕЛИТЬ СТОИМОСТЬ ПОЕЗДКИ").render();
}