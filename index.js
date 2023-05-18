(function setupToolTip() {
    /**
     * track down DOM node
     */
    let tooltip = "";
    const tooltipDiv = document.querySelector(".div-tooltip");
    const tooltipElements = Array.from(
        document.querySelectorAll(".hover-reveal")
    );
    let timer;

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
        fadeIn(tooltipDiv);
    };

    const fadeOut = function (ele) {
        let op = 1;
        clearInterval(timer);

        
            timer = setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(timer);
                    timer = null;
                    ele.style.opacity = 0;
                    ele.style.display = "none";
                } 
                ele.style.opacity = op;
                op -=  0.1 * op;
            
            }, 10);
        
    };

    const fadeIn = function (ele) {
        let op = 0.1;
        ele.style.display = "block";
        timer = setInterval(() => {
            if (op >= 1) {
                clearInterval(timer);
                ele.style.opacity = 0;
            }
            ele.style.opacity = op;
            op += op * 0.1;
        }, 10);
    };

    /**
     * for loop all element in array to apply action
     */

    tooltipElements.forEach(function (el) {
        let timeout;
        el.addEventListener("mouseenter", function (e) {
            timeout = setTimeout(() => {
                displayTooltip(e, this);
            }, 400);
        });
        el.addEventListener("mouseleave", function (e) {
            clearTimeout(timeout);
            fadeOut(tooltipDiv);
        });
    });
})();
