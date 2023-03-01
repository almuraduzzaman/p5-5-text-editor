// reset button 
document.getElementById('btn-reset').addEventListener('click', function () {
    const inputField = document.getElementById('textarea');
    inputField.value = '';
})

// bold button 
document.getElementById('btn-bold').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    const hoverObj = document.getElementById('btn-bold');

    if (obj.style.fontWeight === 'bold' && hoverObj.style.backgroundColor === "gray") {
        obj.style.fontWeight = 'normal';
        hoverObj.style.backgroundColor = "transparent";
    } else {
        obj.style.fontWeight = 'bold';
        hoverObj.style.backgroundColor = "gray";
    }

})

// italic button 
document.getElementById('btn-italic').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    const hoverObj = document.getElementById('btn-italic');

    if (obj.style.fontStyle === 'italic' && hoverObj.style.backgroundColor === "gray") {
        obj.style.fontStyle = 'normal';
        hoverObj.style.backgroundColor = "transparent";
    } else {
        obj.style.fontStyle = "italic";
        hoverObj.style.backgroundColor = "gray";
    }

})

// underline button 
document.getElementById('btn-underline').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    const hoverObj = document.getElementById('btn-underline');

    if (obj.style.textDecoration === 'underline' && hoverObj.style.backgroundColor === "gray") {
        obj.style.textDecoration = "none";
        hoverObj.style.backgroundColor = "transparent";
    } else {
        obj.style.textDecoration = 'underline';
        hoverObj.style.backgroundColor = "gray";
    }

})

// ----------------------------
const left = document.getElementById('btn-left');
const justify = document.getElementById('btn-justify');
const center = document.getElementById('btn-center');
const right = document.getElementById('btn-right');
// ----------------------------

// Align left button 
document.getElementById('btn-left').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    obj.style.textAlign = 'left';

    if (left.style.backgroundColor === "gray") {
        left.style.backgroundColor = "transparent";
    } else {
        left.style.backgroundColor = "gray";
        justify.style.backgroundColor = "transparent";
        right.style.backgroundColor = 'transparent';
        center.style.backgroundColor = 'transparent';
    }

})


// Align justify button 
document.getElementById('btn-justify').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    obj.style.textAlign = 'justify';



    if (justify.style.backgroundColor === "gray") {
        justify.style.backgroundColor = "transparent";
    } else {
        justify.style.backgroundColor = "gray";
        right.style.backgroundColor = 'transparent';
        center.style.backgroundColor = 'transparent';
        left.style.backgroundColor = 'transparent';
    }

})


// Align center button 
document.getElementById('btn-center').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    obj.style.textAlign = 'center';

    if (center.style.backgroundColor === "gray") {
        center.style.backgroundColor = "transparent";
    } else {
        center.style.backgroundColor = "gray";
        justify.style.backgroundColor = "transparent";
        right.style.backgroundColor = 'transparent';
        left.style.backgroundColor = 'transparent';
    }

})

// Align right button 
document.getElementById('btn-right').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    obj.style.textAlign = 'right';

    if (right.style.backgroundColor === "gray") {
        right.style.backgroundColor = "transparent";
    } else {
        right.style.backgroundColor = "gray";
        center.style.backgroundColor = "transparent";
        justify.style.backgroundColor = "transparent";
        left.style.backgroundColor = 'transparent';
    }
})


// text re-sizing
document.getElementById('text-sizing').addEventListener('change', function (e) {
    if (e.target.value < 14) {
        e.target.value = 14;
    }

    const obj = document.getElementById('textarea');
    obj.style.fontSize = `${e.target.value}px`;

});


// Capitalization 
document.getElementById('capitalization').addEventListener('click', function () {
    const obj = document.getElementById('textarea');
    const hoverObj = document.getElementById('capitalization');

    if (obj.style.textTransform === "uppercase" && hoverObj.style.backgroundColor === "gray") {
        obj.style.textTransform = "none";
        hoverObj.style.backgroundColor = "transparent";
    } else {
        obj.style.textTransform = "uppercase";
        hoverObj.style.backgroundColor = "gray";
    }


});


// text color change
document.getElementById('color-change').addEventListener('change', function (e) {
    const obj = document.getElementById('textarea');
    obj.style.color = e.target.value;

});

