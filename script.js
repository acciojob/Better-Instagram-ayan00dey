const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach(image => {
    image.addEventListener('dragstart', (e) => {
        draggedElement = image;
        setTimeout(() => image.style.display = 'none', 0);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => draggedElement.style.display = 'block', 0);
        draggedElement = null;
    });

    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    image.addEventListener('dragenter', (e) => {
        e.preventDefault();
        image.classList.add('hovered');
    });

    image.addEventListener('dragleave', () => {
        image.classList.remove('hovered');
    });

    image.addEventListener('drop', () => {
        if (draggedElement !== image) {
            let parent = document.getElementById('parent');
            let currentElement = image;
            let draggedIndex = Array.from(parent.children).indexOf(draggedElement);
            let currentIndex = Array.from(parent.children).indexOf(currentElement);

            if (draggedIndex < currentIndex) {
                parent.insertBefore(draggedElement, currentElement.nextSibling);
            } else {
                parent.insertBefore(draggedElement, currentElement);
            }
        }
        image.classList.remove('hovered');
    });
});
