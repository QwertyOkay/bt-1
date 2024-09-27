// window.addEventListener("DOMContentLoaded", () => {
// 	const burger = document.querySelector("header img")
// 	const mobileMenu = document.querySelector(".header__nav_mobile")
// 	const hiddenElement = document.querySelector(".hidden")
// 	const contentWrapper = document.querySelector(".content-wrapper")
// 	let isMenuOpen = false

// 	const openMenu = () => {
// 		mobileMenu.classList.add("header__nav_mobile_active")
// 		document.body.style.overflow = 'hidden'
// 		hiddenElement.classList.add("hidden__active")
// 		contentWrapper.classList.add("blur")
// 		burger.setAttribute("src", "images/close.svg")
// 		isMenuOpen = true
// 	}

// 	const closeMenu = () => {
// 		mobileMenu.classList.remove("header__nav_mobile_active")
// 		document.body.style.overflow = ''
// 		hiddenElement.classList.remove("hidden__active")
// 		contentWrapper.classList.remove("blur")
// 		burger.setAttribute("src", "images/menu.svg")
// 		isMenuOpen = false
// 	}

// 	burger.addEventListener("click", () => {
// 		if (isMenuOpen) {
// 			closeMenu()
// 		} else {
// 			openMenu()
// 		}
// 	})
// })

window.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector("header img");
	const mobileMenu = document.querySelector(".header__nav_mobile");
	const hiddenElement = document.querySelector(".hidden");
	const contentWrapper = document.querySelector(".content-wrapper");
	let isMenuOpen = false;

	// Проверяем, существуют ли все элементы
	if (burger && mobileMenu && hiddenElement && contentWrapper) {
		const openMenu = () => {
			mobileMenu.classList.add("header__nav_mobile_active");
			document.body.style.overflow = 'hidden';
			hiddenElement.classList.add("hidden__active");
			contentWrapper.classList.add("blur");
			burger.setAttribute("src", "images/close.svg");
			isMenuOpen = true;
		};

		const closeMenu = () => {
			mobileMenu.classList.remove("header__nav_mobile_active");
			document.body.style.overflow = '';
			hiddenElement.classList.remove("hidden__active");
			contentWrapper.classList.remove("blur");
			burger.setAttribute("src", "images/menu.svg");
			isMenuOpen = false;
		};

		burger.addEventListener("click", () => {
			if (isMenuOpen) {
				closeMenu();
			} else {
				openMenu();
			}
		});

		// Закрытие меню по клику на затемненный фон
		hiddenElement.addEventListener("click", () => {
			if (isMenuOpen) closeMenu();
		});
	} else {
		console.warn("Не найдены все необходимые элементы для меню.");
	}
});
