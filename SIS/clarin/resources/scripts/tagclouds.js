function createTags() {      
try {
  TagCanvas.Start('myCanvas','tags',{
    textColour: '#2070AA',
    outlineColour: '#DDDDDD',
    reverse: true,
    depth: 0.5,
    minBrightness:0.2,
    wheelZoom: false,
    maxSpeed: 0.01,
    freezeActive:false,
    weight:true,
    weightSize:1.0            
  });
} catch(e) {
  // something went wrong, hide the canvas container
  document.getElementById('myCanvasContainer').style.display = 'none';
}
};