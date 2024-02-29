// where to manipulate element
const canvas = document.getElementById("kanvas");

// getContext() method to create 2d parameter
const context = document.getContext("2d");

const radius = canvas.tinggi / 2;

context.translate(radius, radius);
