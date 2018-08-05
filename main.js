const BODY = document.body;
const OPENMENU = document.getElementById("open-menu");
const CANVAS_WRAPPER = document.getElementById("off-canvas-wrapper");

OPENMENU.addEventListener("click",click());
CANVAS_WRAPPER.addEventListener("click",remove());


    function click(){
        BODY.classList.toggle("off-canvas-active");   
    };

    function remove(){
        BODY.classList.remove("off-canvas-active");
    }
