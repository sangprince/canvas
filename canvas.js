window.onload = function() {

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);



  //var x = Math.random() * canvas.width;
  //var y = Math.random() * canvas.height;
  //var dy = (Math.random() - 0.5) * 8;
  //var dx = (Math.random() - 0.5) * 8;
  //var radius = 30;



  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius * Math.random() + 35;

    this.draw = function() {

      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = "hsla("+parseInt(Math.random()*360, 10)+",100%,50%,0.5)";

      c.fill();



    }

    this.update = function() {

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();

    }


  }

  var circleArray = [];

  for (var i = 0; i < 20; i++) {

    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var dy = (Math.random() - 0.5) * 8;
    var dx = (Math.random() - 0.5) * 8;
    var radius = 30;


    circleArray.push(new Circle(x, y, dy, dx, radius));

  }






  setInterval(function() {

    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }



  }, 30);

};
