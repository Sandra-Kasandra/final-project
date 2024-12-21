export function setupSquareAnimation() {
    const containers = document.querySelectorAll('.container-animation'); // Select all containers

    if (containers.length === 0) {
        console.error("No animation containers found in the DOM.");
        return;
    }

    containers.forEach((container) => {
        const hoverSquare = container.querySelector('.hover-square');

        if (!hoverSquare) {
            console.error("Hover square not found in container:", container);
            return;
        }

        function moveSquare(e) {
            const containerRect = container.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const squareCenterX = containerRect.left + containerRect.width / 2;
            const squareCenterY = containerRect.top + containerRect.height / 2;

            const deltaX = mouseX - squareCenterX;
            const deltaY = mouseY - squareCenterY;

            const moveX = deltaX > 0 ? -30 : 30;
            const moveY = deltaY > 0 ? -30 : 30;

            hoverSquare.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Attach the event listener for this container
        document.addEventListener('mousemove', moveSquare);
    });
}
