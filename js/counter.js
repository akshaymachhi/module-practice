
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
  
    counters.forEach((counter) => {
      const updateCount = (target) => {
        let count = 0;
        const duration = 4000;
        const increment = target / (duration / 100);
        const step = () => {
          count = Math.ceil(count + increment);
          counter.textContent = count;
  
          if (count < target) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = target;
          }
        };
  
        requestAnimationFrame(step);
      };
  
      const targetValue = parseInt(counter.textContent, 10);
      updateCount(targetValue);
    });
  });
  