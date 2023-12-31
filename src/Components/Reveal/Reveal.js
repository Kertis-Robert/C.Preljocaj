const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, options);

window.addEventListener('load', function () {
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
    });
});