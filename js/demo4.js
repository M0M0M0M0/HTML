document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'block';
                const link = dropdown.querySelector('a');
                if (link) {
                    link.style.color = 'green';
                }
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'none';
                const link = dropdown.querySelector('a');
                if (link) {
                    link.style.color = '';
                }
            }
        });
    });
});
