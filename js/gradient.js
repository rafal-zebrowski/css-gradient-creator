let isLinearMode;
let degree = document.querySelector("#degree-slider").value;
let colorHex1 = document.querySelector("#color1").value;
let colorHex2 = document.querySelector("#color2").value;
let colorRange1 = document.querySelector("#slider-color1").value;
let colorRange2 = document.querySelector("#slider-color2").value;

drawColors();
setLinearMode();
updateRangeInput1();
updateRangeInput2();

document.querySelector('#linear-button').addEventListener('click', setLinearMode);
document.querySelector('#radial-button').addEventListener('click', setRadialMode);
document.querySelector("#color1").addEventListener("input", updateGradient);
document.querySelector("#color2").addEventListener("input", updateGradient);
document.querySelector("#slider-color1").addEventListener("input", updateGradient);
document.querySelector("#slider-color1").addEventListener("input", updateRangeInput1);
document.querySelector("#slider-color2").addEventListener("input", updateGradient);
document.querySelector("#slider-color2").addEventListener("input", updateRangeInput2);
document.querySelector("#range-input1").addEventListener("input", updateSliderColor1);
document.querySelector("#range-input2").addEventListener("input", updateSliderColor2);
document.querySelector("#degree-slider").addEventListener("input", updateGradient);
document.querySelector("#degree-slider").addEventListener("input", updateDegreeNumber);
document.querySelector("#degree-number").addEventListener("input", updateDegreeSlider);
document.querySelector("#hexBtn").addEventListener("click", copyHexToClipboard);
document.querySelector("#rgbBtn").addEventListener("click", copyRGBAToClipboard);
document.querySelector("#draw-button").addEventListener("click", drawColors);
document.querySelector("#draw-button").addEventListener("click", updateGradient);

function setLinearMode() {
    document.querySelector("#linear-button").classList.add('styleActive');
    document.querySelector("#radial-button").classList.remove('styleActive');
    document.querySelector(".degree").style.display = 'flex';
    isLinearMode = true;
    updateGradient();
}

function setRadialMode() {
    document.querySelector("#radial-button").classList.add('styleActive');
    document.querySelector("#linear-button").classList.remove('styleActive');
    document.querySelector(".degree").style.display = 'none';
    isLinearMode = false;
    updateGradient();
}

function updateGradient() {
    degree = document.querySelector("#degree-slider").value;
    colorHex1 = document.querySelector("#color1").value;
    colorHex2 = document.querySelector("#color2").value;
    colorRange1 = document.querySelector("#slider-color1").value;
    colorRange2 = document.querySelector("#slider-color2").value;

    if(isLinearMode) {
        let linearGradientCSS = createLinearGradientCSSValue(degree, colorHex1, colorRange1, colorHex2, colorRange2);
        let linearGradientCSSMoz = createLinearGradientCSSValueMoz(degree, colorHex1, colorRange1, colorHex2, colorRange2);
        let linearGradientCSSWebKit = createLinearGradientCSSValueWebKit(degree, colorHex1, colorRange1, colorHex2, colorRange2);

        document.querySelector(".main").style.background = linearGradientCSS;
        document.querySelector(".main").style.background = linearGradientCSSMoz;
        document.querySelector(".main").style.background = linearGradientCSSWebKit;
    } else {
        let radialGradientCSS = createRadialGradientCSSValue(colorHex1, colorRange1, colorHex2, colorRange2);
        let radialGradientCSSMoz = createRadialGradientCSSValueMoz(colorHex1, colorRange1, colorHex2, colorRange2);
        let radialGradientCSSWebKit = createRadialGradientCSSValueWebKit(colorHex1, colorRange1, colorHex2, colorRange2);

        document.querySelector(".main").style.background = radialGradientCSS;
        document.querySelector(".main").style.background = radialGradientCSSMoz;
        document.querySelector(".main").style.background = radialGradientCSSWebKit;
    }
}

function createLinearGradientCSSValue(degree, color1, range1, color2, range2) {
    return "linear-gradient(" + degree + "deg, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function createLinearGradientCSSValueWebKit(degree, color1, range1, color2, range2) {
    return "-webkit-linear-gradient(" + degree + "deg, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function createLinearGradientCSSValueMoz(degree, color1, range1, color2, range2) {
    return "-moz-linear-gradient(" + degree + "deg, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function createRadialGradientCSSValue(color1, range1, color2, range2) {
    return "radial-gradient(circle, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function createRadialGradientCSSValueWebKit(color1, range1, color2, range2) {
    return "-webkit-radial-gradient(circle, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function createRadialGradientCSSValueMoz(color1, range1, color2, range2) {
    return "-moz-radial-gradient(circle, " + color1 + " " + range1 + "%, " + color2 + " " + range2 + "%)";
}

function updateRangeInput1() {
    document.querySelector("#range-input1").value = document.querySelector("#slider-color1").value;
}

function updateSliderColor1() {
    document.querySelector("#slider-color1").value = document.querySelector("#range-input1").value;
    updateGradient();
}

function updateRangeInput2() {
    document.querySelector("#range-input2").value = document.querySelector("#slider-color2").value;
}

function updateSliderColor2() {
    document.querySelector("#slider-color2").value = document.querySelector("#range-input2").value;
    updateGradient();
}

function updateDegreeNumber() {
    document.querySelector("#degree-number").value = document.querySelector("#degree-slider").value;
}

function updateDegreeSlider() {
    document.querySelector("#degree-slider").value = document.querySelector("#degree-number").value;
    updateGradient();
}

function drawColors() {
    let charsArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let color1 = '#';
    let color2 = '#';
    for(var i=0; i<6; i++){
        color1 += charsArray[Math.floor(Math.random() * 16)];
        color2 += charsArray[Math.floor(Math.random() * 16)];
    }
    document.querySelector("#color1").value = color1;
    document.querySelector("#color2").value = color2;
}

function copyHexToClipboard() {
    let gradientCSS, gradientCSSMoz, gradientCSSWebKit;
    if(isLinearMode) {
        gradientCSS = createLinearGradientCSSValue(degree, colorHex1, colorRange1, colorHex2, colorRange2);
        gradientCSSMoz = createLinearGradientCSSValueMoz(degree, colorHex1, colorRange1, colorHex2, colorRange2);
        gradientCSSWebKit = createLinearGradientCSSValueWebKit(degree, colorHex1, colorRange1, colorHex2, colorRange2);
    } else {
        gradientCSS = createRadialGradientCSSValue(colorHex1, colorRange1, colorHex2, colorRange2);
        gradientCSSMoz = createRadialGradientCSSValueMoz(colorHex1, colorRange1, colorHex2, colorRange2);
        gradientCSSWebKit = createRadialGradientCSSValueWebKit(colorHex1, colorRange1, colorHex2, colorRange2);
    }

    let hex = 'background: ' + gradientCSS + ';\nbackground: ' + gradientCSSWebKit + ';\nbackground: ' + gradientCSSMoz + ';';
    navigator.clipboard.writeText(hex);
}

function copyRGBAToClipboard() {
    let rgba1 = getRgbaCSSValue(hexToRgb(colorHex1));
    let rgba2 = getRgbaCSSValue(hexToRgb(colorHex2));
    let gradientCSS, gradientCSSMoz, gradientCSSWebKit;

    if(isLinearMode) {
        gradientCSS = createLinearGradientCSSValue(degree, rgba1, colorRange1, rgba2, colorRange2);
        gradientCSSMoz = createLinearGradientCSSValueMoz(degree, rgba1, colorRange1, rgba2, colorRange2);
        gradientCSSWebKit = createLinearGradientCSSValueWebKit(degree, rgba1, colorRange1, rgba2, colorRange2);
    } else {
        gradientCSS = createRadialGradientCSSValue(rgba1, colorRange1, rgba2, colorRange2);
        gradientCSSMoz = createRadialGradientCSSValueMoz(rgba1, colorRange1, rgba2, colorRange2);
        gradientCSSWebKit = createRadialGradientCSSValueWebKit(rgba1, colorRange1, rgba2, colorRange2);
    }

    let rgba = 'background: ' + gradientCSS + ';\nbackground: ' + gradientCSSWebKit + ';\nbackground: ' + gradientCSSMoz + ';';
    navigator.clipboard.writeText(rgba);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getRgbaCSSValue(rgb) {
    return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
}