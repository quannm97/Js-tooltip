(function setupToolTip() {
    let tooltip = "";
    let tooltipDiv = document.querySelector(".div-tooltip")
    let tooltipElements = Array.from(document.querySelectorAll(".hover-reveal"));

    const displayTooltip = function (e, this) {
        
    }

    tooltipElements.forEach(function (el) {
        el.addEventListener("click", function (e, this) {
            displayTooltip(e, this);
        })
    })
})();