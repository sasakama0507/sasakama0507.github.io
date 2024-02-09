document.addEventListener('DOMContentLoaded', (event) => {
    const dragImage = document.getElementById('draggable-image');
    let currentDropArea = null;

    dragImage.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', dragImage.id);
    });

    const dropAreas = document.querySelectorAll('.drop-area');
    dropAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text');
            const droppedImage = document.getElementById(data);
            if (droppedImage && e.target.className.includes('drop-area')) {
                e.target.appendChild(droppedImage);
                currentDropArea = e.target;
            }
        });
    });
});
