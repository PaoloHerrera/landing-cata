const menu = document.getElementById('menu') as HTMLDivElement
const openMenuButton = document.getElementById('open-menu') as HTMLButtonElement
const closeMenuButton = document.getElementById(
	'close-menu',
) as HTMLButtonElement
const navbarItems = document.getElementsByClassName(
	'navbar-item',
) as HTMLCollectionOf<HTMLAnchorElement>

const openMenu = () => {
	menu.classList.remove('hidden')
	menu.classList.add('flex')
	document.body.style.overflow = 'hidden'
	closeMenuButton.classList.remove('hidden')
	openMenuButton.classList.add('hidden')
}

const closeMenu = () => {
	menu.classList.remove('flex')
	menu.classList.add('hidden')
	openMenuButton.classList.remove('hidden')
	closeMenuButton.classList.add('hidden')
	document.body.style.overflow = 'auto'
}

openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
for (const navbarItem of navbarItems) {
	navbarItem.addEventListener('click', closeMenu)
}
