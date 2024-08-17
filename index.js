function toggleClass(elements, classToAdd, classToRemove) {
    elements.forEach(element => {
        element.classList.add(classToAdd);
        element.classList.remove(classToRemove);
    });
}

function ToggleMode() {
    const box = document.getElementById("toggle-box");
    const allDivs = document.querySelectorAll('.g'); // Select all divs with the class 'g'
    const allD1 = document.querySelectorAll(".g .name");
    const allD2 = document.querySelectorAll(".g .followers");
    const allD3 = document.querySelector("p");
    const body = document.getElementById("body");
    const grid2 = document.querySelectorAll(".grid-item");
    const grid2Title = document.querySelectorAll(".grid-item .title");

    if (box.checked) {
        toggleClass(allDivs, 'grid-con2', 'grid-con1');
        toggleClass(allD1, 'color-dark', 'color-light');
        toggleClass(allD2, 'color-dark', 'color-light');
        toggleClass(grid2, "grid-con2", "grid-con1");
        toggleClass(grid2Title, 'color-dark', 'color-light');
        body.classList.add("toggle-on");
        allD3.classList.add("color-dark");
        allD3.classList.remove("color-light");
    } else {
        toggleClass(allDivs, 'grid-con1', 'grid-con2');
        toggleClass(allD1, 'color-light', 'color-dark');
        toggleClass(allD2, 'color-light', 'color-dark');
        toggleClass(grid2, "grid-con1", "grid-con2");
        toggleClass(grid2Title, 'color-light', 'color-dark');
        body.classList.remove("toggle-on");
        allD3.classList.add("color-light");
        allD3.classList.remove("color-dark");
    }
}

function init() {
    const allDivs = document.querySelectorAll('.g'); // Select all divs with the class 'g'
    const grid2 = document.querySelectorAll(".grid-item");
    toggleClass(grid2, "grid-con1", "grid-con2");
    toggleClass(allDivs, 'grid-con1', 'grid-con2');
}
