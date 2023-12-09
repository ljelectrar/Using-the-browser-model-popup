var msg = "<h2>Browser window</h2><p>width = " + window.innerWidth + "</p>";
msg += "<p>height = " + window.innerHeight + "</p>";
msg += "<h2>History</h2><p>items = " + window.history.length + "</p>";
msg += "<h2>Screen</h2><p>width = " + window.screen.width + "</p>";
msg += "<p>height " + window.screen.height + "</p>";

var mousePosText = document.getElementById('mouse-pos');
var mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
});

var el = document.getElementById("info");
el.innerHTML = msg;

var count = 0;
window.addEventListener("mousemove", (event) => {
    var mouseMovedTo = { x: event.clientX, y: event.clientY };
    if (mouseMovedTo.x >= 1000 && mouseMovedTo.y <= 50){
        alert("You can't leave us!");
        count++;
        console.log(count);
    }
});