document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const clickBtn = document.getElementById('clickBtn');
    const clickCounter = document.getElementById('clickCounter');
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const greeting = document.getElementById('greeting');
    const currentTime = document.getElementById('current-time');

    // Actualizar hora actual
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        currentTime.textContent = `Hora del servidor: ${timeString}`;
    }

    // Inicializar y actualizar cada segundo
    updateTime();
    setInterval(updateTime, 1000);

    // Contador de clicks
    clickBtn.addEventListener('click', function() {
        clickCount++;
        clickCounter.textContent = `Clicks: ${clickCount}`;
        
        // Efecto visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Saludo personalizado
    greetBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            const greetings = [
                `¡Hola, ${name}! Bienvenid@ a Docker.`,
                `Encantado de conocerte, ${name}.`,
                `¡Qué gusto verte por aquí, ${name}!`,
                `Saludos cordiales, ${name}.`
            ];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            greeting.textContent = randomGreeting;
            greeting.style.color = '#2496ed';
        } else {
            greeting.textContent = 'Por favor, escribe tu nombre primero.';
            greeting.style.color = '#e74c3c';
        }
    });

    // Permitir Enter en el input
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            greetBtn.click();
        }
    });
});