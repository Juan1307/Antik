/* eslint-disable */

type canvasConfigDefaultProps = {
  opacity?:number,
  numParticles?:number,
  sizeMultiplier?:number,
  width?:number,
  connections?:boolean,
  connectionDensity?:number,
  noBounceH?:boolean, noBounceV?:boolean,
  speed?:number, speedH?:number, speedV?:number,
  avoidMouse?:boolean,
  hover?:boolean
};
const canvasConfigDefault: canvasConfigDefaultProps = {
  opacity: 100,
  numParticles: 10,
  sizeMultiplier: 5,
  width: 1,
  connections: true,
  connectionDensity: (1 / 15) * 100,
  noBounceH: false, noBounceV: false,
  speed: 50, speedH: 1, speedV: 1,
  avoidMouse: true,
  hover: true
};
const checkAvailableValues = (config): canvasConfigDefaultProps => {
  let { opacity, numParticles, sizeMultiplier, width,
        connections, connectionDensity, noBounceH, noBounceV,
        speed, speedH, speedV, avoidMouse, hover } = config;
  // check opacity
  if(!(Number.isFinite(opacity) && (0 <= opacity && opacity <= 100))){
    opacity = canvasConfigDefault.opacity;
  }
  // check numParticles
  if(!Number.isFinite(numParticles)) {
    numParticles = canvasConfigDefault.numParticles;
  }
  // check sizeMultiplier
  if(!Number.isFinite(sizeMultiplier)) {
    sizeMultiplier = canvasConfigDefault.sizeMultiplier;
  }
  // check width
  if(!(Number.isInteger(width) && width > 0)) {
    width = canvasConfigDefault.width;
  }
  // check connections
  if(!(typeof connections === 'boolean')) {
    connections = canvasConfigDefault.connections;
  }
  // check connectionDensity
  if(!(Number.isFinite(connectionDensity) && connectionDensity > 1)) {
    connectionDensity = canvasConfigDefault.connectionDensity;
  }
  //check noBounceH
  if(!(typeof noBounceH === 'boolean')) {
    noBounceH = canvasConfigDefault.noBounceH; 
  }
  //check noBounceV
  if(!(typeof noBounceV === 'boolean')) {
    noBounceV = canvasConfigDefault.noBounceV;
  }
  //check speed
  if(!(Number.isInteger(speed) && (0 <= speed && speed <= 1000))){
    speed = canvasConfigDefault.speed;
  }
  //check speedH
  if(!(Number.isInteger(speedH) && (-1000 <= speedH && speedH <= 1000))){
    speedH = canvasConfigDefault.speedH;
  }
  //check speedV
  if(!(Number.isInteger(speedV) && (-1000 <= speedV && speedV <= 1000))){
    speedV = canvasConfigDefault.speedV;
  }
  //check avoidMouse
  if(!(typeof avoidMouse === 'boolean')) {
    avoidMouse = canvasConfigDefault.avoidMouse;
  }
  //check hover
  if(!(typeof hover === 'boolean')){
    hover = canvasConfigDefault.hover;
  }
  return { opacity, numParticles, sizeMultiplier, width,
        connections, connectionDensity, noBounceH, noBounceV,
        speed, speedH, speedV, avoidMouse, hover };
};

type canvasColorsDefaultProps = {
  particleColour: string,
  strokeColour: string,
  strokeHoverColour: string
};
const canvasColorsDefault: canvasColorsDefaultProps = {
  particleColour: '#000000',
  strokeColour: '#000000',
  strokeHoverColour: '#ff0000'
};
const checkAvailableColors = (config, flag): canvasColorsDefaultProps => {
  let currentElement;
  currentElement = document.documentElement;

  if(typeof flag === 'boolean') {
    currentElement = flag ? document.documentElement : document.body;
  }

  const getColorStyle = (varStyle) => getComputedStyle(currentElement).getPropertyValue(`--col-${varStyle}`);

  const colorParticle = getColorStyle('particle');
  const colorStroke = getColorStyle('particle-stroke'); 
  const ColorStrokeHover = getColorStyle('particle-stroke-hover'); 

  if(colorParticle.length) config.particleColour = colorParticle;
  if(colorStroke.length) config.strokeColour = colorStroke;
  if(ColorStrokeHover.length) config.strokeHoverColour = ColorStrokeHover;

  return config;
};

const canvasInit = (canvas, theme, config?: canvasConfigDefaultProps) => {
  // config canvas
  let { opacity, numParticles, sizeMultiplier, width,
        connections, connectionDensity, noBounceH, noBounceV,
        speed, speedH, speedV, avoidMouse, hover } = checkAvailableValues({...config, canvasConfigDefault});
  // config colors
  let { particleColour, strokeColour, strokeHoverColour } = checkAvailableColors(canvasColorsDefault, theme);

  // console.log(configCanvas, configColors);

  const canvasContext = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray;
  speed = (speed !== 0) ? (speed / 100) : 0; // index speed to base 100 = 1
  opacity = opacity / 100;

  // set overall canvas opacity
  canvas.style.opacity = opacity;

  // get mouse position
  let mousePosition = {
      x: undefined,
      y: undefined,
      radius: (canvas.height / 80) * (canvas.width / 80)
  };

  // add mouse position event listener
  window.addEventListener('mousemove', function (event) {
      mousePosition.x = event.x;
      mousePosition.y = event.y;
  });

  // create particle class
  class Particle{
    constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
    }
    // method to draw individual particles
    draw(){
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        canvasContext.fillStyle = particleColour;
        canvasContext.fill();
    }
    // check particle position, mouse position, move particle and draw it
    update(){
        // check if particle.x is still within canvas
        if (noBounceH === true && speedH > 0){
            if (this.x > canvas.width){
                this.x = 0;
            }
        }
        else if (noBounceH === true && speedH < 0){
            if (this.x < 0){
                this.x = canvas.width;
            }
        }
        else{
            if (this.x > canvas.width || this.x < 0){
                this.directionX = -this.directionX;
            }
        }

        // check if particle.y is still within canvas
        if (noBounceV === true && speedV > 0){
            if (this.y > canvas.height) {
                this.y = 0;
            }
        }
        else if (noBounceV === true && speedV < 0){
            if (this.y < 0){
                this.y = canvas.height;
            }
        }
        else{
            if (this.y > canvas.height || this.y < 0){
                this.directionY = -this.directionY;
            }
        }

        // avoid the mouse if avoidMouse = true (default)
        if (avoidMouse){
            let dx = mousePosition.x - this.x;
            let dy = mousePosition.y - this.y;
            let distance = Math.sqrt((dx * dx) + (dy * dy));
            if (distance < mousePosition.radius + this.size){
                if (mousePosition.x < this.x && this.x < canvas.width - this.size * 10){
                    this.x += 10;
                }
                if (mousePosition.x > this.x && this.x > this.size * 10){
                    this.x -= 10;
                }
                if (mousePosition.y < this.y && this.y < canvas.height - this.size * 10){
                    this.y += 10;
                }
                if (mousePosition.y > this.y && this.y > this.size * 10){
                    this.y -= 10;
                }
            }
        }

        // move particle
        if (speed !== 0) {
            this.x += this.directionX * speed * speedH;
            this.y += this.directionY * speed * speedV;
        }

        // draw particle
        this.draw();
    }
  }


    // create particle array
    function init(){
        particlesArray = [];
        let numberOfParticles = canvas.width * 0.01;
        let directionX;
        let directionY;
        for (let i = 0; i < numberOfParticles * numParticles; i++){
            let size = (Math.random() * sizeMultiplier) + 1;
            // set X
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            if (noBounceH){
                directionX = Math.random() * 5;
            }
            else{
                directionX = (Math.random() * 5) - 2.5;
            }
            // set Y
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            if (noBounceV){
                directionY = Math.random() * 5;
            }
            else{
                directionY = (Math.random() * 5) -2.5;
            }


            particlesArray.push(new Particle(x, y, directionX, directionY, size));
        }
    }

    // check if particles are close enough to connect to each other
    function connect(){
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++){
            for (let b = a; b < particlesArray.length; b++){
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / connectionDensity) * (canvas.height / connectionDensity)){
                    opacityValue = 1 - (distance / 20000);
                    // change colour on 'hover' if hover = true (default)
                    if(hover){
                        let dx = mousePosition.x - particlesArray[a].x;
                        let dy = mousePosition.y - particlesArray[a].y;
                        let mouseDistance = Math.sqrt((dx * dx) + (dy * dy));
                        if (mouseDistance < 200) {
                            // change colour if mouse is close
                            canvasContext.globalAlpha = opacityValue;
                            canvasContext.strokeStyle = strokeHoverColour;
                        }
                        else {
                            // use regular stroke colour
                            canvasContext.globalAlpha = opacityValue;
                            canvasContext.strokeStyle = strokeColour;
                        }
                    }
                    else {
                        canvasContext.globalAlpha = opacityValue;
                        canvasContext.strokeStyle = strokeColour;
                    }
                    canvasContext.lineWidth = width;
                    canvasContext.beginPath();
                    canvasContext.moveTo(particlesArray[a].x, particlesArray[a].y);
                    canvasContext.lineTo(particlesArray[b].x, particlesArray[b].y);
                    canvasContext.stroke();
                }
            }
        }
    }

    // animation loop
    function animate(){
        requestAnimationFrame(animate);
        canvasContext.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
        }
        if(connections){
            connect();
        }
    }
        // resize event
    window.addEventListener('resize', function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mousePosition.radius = ((canvas.height / 80) * (canvas.width / 80));
        init();
    });

    // mouse-out event (mouse leaving the window)
    window.addEventListener('mouseout', function(){
        mousePosition.x = undefined;
        mousePosition.y = undefined;
    });

    init();
    animate();
}

export { canvasInit };