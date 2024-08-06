document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreBtn');
    const spaceInfo = document.getElementById('spaceInfo');

    exploreBtn.addEventListener('click', function() {
        spaceInfo.classList.toggle('hidden');
    });

    // Space background animation
    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.5
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function updateStars() {
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
});
