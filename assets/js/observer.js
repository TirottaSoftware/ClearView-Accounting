const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('observer-visible');
        }
    })
})

const serviceCards = document.querySelectorAll('.observer');
serviceCards.forEach(card => {
    observer.observe(card);
});