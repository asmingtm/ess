document.querySelectorAll(".range").forEach(range => {

    const input = range.querySelector("input");

    let thumb = range.querySelector(".thumb");

    if (!thumb) {
        thumb = document.createElement("span");
        thumb.className = "thumb";
        range.appendChild(thumb);
    }

    function update() {

        const min = Number(input.min || 0);
        const max = Number(input.max || 100);

        const percent = ((input.value - min) / (max - min)) * 100;

        range.style.setProperty("--percent", `${percent}%`);
    }

    input.addEventListener("input", update);

    update();
});