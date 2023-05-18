(function setupToolTip() {
    /**
     * track down DOM node
     */
    let tooltip = "";
    const tooltipDiv = document.querySelector(".div-tooltip");
    const tooltipElements = Array.from(
        document.querySelectorAll(".hover-reveal")
    );

    /**
     *
     * @param {Event} e
     * @param {object} elem
     */

    /**
     * Display the tooltip
     */

    const displayTooltip = function (e, elem) {
        // tooltip = elem.getAttribute("data-tooltip");
        tooltip = elem.dataset.tooltip;
        tooltipDiv.innerHTML = tooltip;
        tooltipDiv.style.top = e.pageY + "px";
        tooltipDiv.style.left = e.pageX + "px";
        tooltipDiv.style.opacity = 1;
    };

    /**
     * for loop all element in array to apply action
     */

    tooltipElements.forEach(function (el) {
        el.addEventListener("mouseenter", function (e) {
            displayTooltip(e, this);
        });
    });
})();
