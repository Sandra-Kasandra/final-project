export function setupGlitchAnimation() {
    const glitchContainer = document.querySelector(".glitch-background");

    if (!glitchContainer) {
        console.error('Element ".glitch-background" not found!');
        return;
    }

    const glitchSection = document.querySelector("#project-section");
    const colors = ["#EB5E28", "#403D39", "#FFB598", "#CCC5B9", "#ffffff"]; 

    function createGlitchLine() {
        const line = document.createElement("div");
        line.classList.add("glitch-line");

        const sectionHeight = glitchSection.offsetHeight;
        const randomTop = Math.random() * sectionHeight;
        const randomWidth = Math.random() * 50 + 50;
        const randomDelay = Math.random() * 3; 
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; 

        line.style.top = `${randomTop}px`;
        line.style.width = `${randomWidth}%`;
        line.style.left = `${Math.random() * (100 - randomWidth)}%`;
        line.style.animationDelay = `${randomDelay}s`;
        line.style.backgroundColor = randomColor;

        glitchContainer.appendChild(line);

        
        setTimeout(() => {
            glitchContainer.removeChild(line);
        }, 7000); 
    }

    
    setInterval(() => {
        const numberOfLines = Math.floor(Math.random() * 3) + 2; 
        for (let i = 0; i < numberOfLines; i++) {
            createGlitchLine();
        }
    }, 500);
}
