document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the expand/collapse of content
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const fullContent = this.nextElementSibling;
            fullContent.classList.toggle('shown');
            fullContent.classList.toggle('hidden');
            
            if (fullContent.classList.contains('shown')) {
                this.textContent = 'Collapse';
            } else {
                this.textContent = 'Expand';
            }
        });
    });

    // Filter system
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.content-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            
            sections.forEach(section => {
                if (filter === 'all' || section.classList.contains(filter)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
