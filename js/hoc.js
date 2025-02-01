const elements = document.querySelectorAll(".giau");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("xuathien");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
