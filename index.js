export function performanceTest() {
    window.addEventListener("load", () => {
        const sonic = document.querySelector(".sonic");
        
        if (!sonic) {
            console.error("Element not found. Please add .sonic classe to your element.");
            return false;
        }
        if (sonic) {
            const pageLoad = performance.mark("pageLoad"); 
            const loadTime = pageLoad.startTime / 1000;
            const roundedTime = loadTime.toFixed(4);
            sonic.innerHTML = `Load time is ${roundedTime}`;
        }
    })
}

