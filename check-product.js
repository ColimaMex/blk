document.addEventListener('DOMContentLoaded', function() {
  var blackoutDiv = document.createElement('div');
  blackoutDiv.style.position = 'fixed';
  blackoutDiv.style.top = '0';
  blackoutDiv.style.left = '0';
  blackoutDiv.style.width = '100%';
  blackoutDiv.style.height = '100%';
  blackoutDiv.style.backgroundColor = 'black';
  blackoutDiv.style.zIndex = '9999'; 
  blackoutDiv.style.pointerEvents = 'none'; 
  
  document.body.style.pointerEvents = 'none';

  document.body.appendChild(blackoutDiv);
});
