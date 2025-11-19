document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetID = this.getAttribute('href').slice(1);
      var target = document.gete=ElementById(targetId);
      if (target) {
       e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    });
  });  
});