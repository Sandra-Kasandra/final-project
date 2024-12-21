export function setupAppearanceAnimation() {
    const Appearance = document.querySelectorAll('.appearance');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1.0
    });

    Appearance.forEach(Appearance => {
        observer.observe(Appearance);
    });
}
