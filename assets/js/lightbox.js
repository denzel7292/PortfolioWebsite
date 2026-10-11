// Vergroot de projectbeelden op dezelfde pagina.
const lightbox = document.querySelector('#image-lightbox');

if (lightbox && typeof lightbox.showModal === 'function') {
    const image = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('#lightbox-caption');
    const figure = lightbox.querySelector('.lightbox-figure');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const zoomButton = lightbox.querySelector('.lightbox-zoom');
    let lastTrigger = null;

    document.querySelectorAll('[data-lightbox]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const thumbnail = link.querySelector('img');
            const figureCaption = link.closest('figure')?.querySelector('figcaption');
            lastTrigger = link;

            image.src = link.href;
            image.alt = thumbnail?.alt || '';
            caption.textContent = figureCaption?.textContent.trim() || 'Projectbeeld';
            lightbox.classList.remove('is-zoomed');
            zoomButton.textContent = 'Vergroot verder';
            zoomButton.setAttribute('aria-pressed', 'false');

            lightbox.showModal();
            document.documentElement.classList.add('lightbox-open');
            closeButton.focus();

            // Een benoemd Contentsquare-event maakt elk geopend beeld herkenbaar.
            if (link.dataset.imageId) {
                window._uxa = window._uxa || [];
                window._uxa.push(['trackPageEvent', `SushiSakai_ImageOpen_${link.dataset.imageId}`]);
            }
        });
    });

    closeButton.addEventListener('click', () => lightbox.close());

    zoomButton.addEventListener('click', () => {
        const isZoomed = lightbox.classList.toggle('is-zoomed');
        zoomButton.textContent = isZoomed ? 'Passend maken' : 'Vergroot verder';
        zoomButton.setAttribute('aria-pressed', String(isZoomed));
    });

    lightbox.addEventListener('click', (event) => {
        const bounds = lightbox.getBoundingClientRect();
        const outsideDialog = event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom;

        if (event.target === figure || outsideDialog) lightbox.close();
    });

    lightbox.addEventListener('close', () => {
        document.documentElement.classList.remove('lightbox-open');
        image.removeAttribute('src');
        lastTrigger?.focus();
        lastTrigger = null;
    });
}
