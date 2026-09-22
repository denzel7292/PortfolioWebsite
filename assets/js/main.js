// Alleen het mobiele menu heeft JavaScript nodig.
// Zonder JavaScript blijven de navigatielinks gewoon zichtbaar.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const mobileScreen = window.matchMedia('(max-width: 640px)');

if (menuButton && navigation) {
    function closeMenu() {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
    }

    function updateMenu() {
        menuButton.hidden = !mobileScreen.matches;
        navigation.classList.toggle('mobile-nav', mobileScreen.matches);
        closeMenu();
    }

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuButton.focus();
        }
    });

    mobileScreen.addEventListener('change', updateMenu);
    updateMenu();
}
