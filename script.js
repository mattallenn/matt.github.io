document.addEventListener("DOMContentLoaded", function () {
  const clickablePlanets = document.querySelectorAll(".clickable-planet");
  
  clickablePlanets.forEach(planet => {
    planet.addEventListener("click", function () {
      const link = planet.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});

