// Simple tilt effect for cards (no libraries)
(function () {
  const cards = document.querySelectorAll(".card, .num-card, .approach-card, .tilt-card, .portfolio-card");
  if (!cards.length) return;

  const MAX_TILT = 6;
  const PERSPECTIVE = 900;
  const LIFT = 10;

  cards.forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.willChange = "transform";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const rotateY = ((x - midX) / midX) * MAX_TILT;
      const rotateX = -((y - midY) / midY) * MAX_TILT;

      card.style.transform =
        `translateY(-${LIFT}px) perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

    // Tap feedback on mobile
    card.addEventListener("touchstart", () => {
      card.style.transform = "translateY(-6px) scale(0.99)";
    }, { passive: true });

    card.addEventListener("touchend", () => {
      card.style.transform = "";
    }, { passive: true });
  });
})();
