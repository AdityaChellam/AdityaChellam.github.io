document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar-inner");
  
    // Trigger the animation on page load
    bars.forEach((bar) => {
      const duration = getComputedStyle(bar).getPropertyValue("--duration");
      bar.style.animationDuration = duration;
    });
  });
  