document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("expanded");

            // Collapse other expanded items
            carouselItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("expanded");
                }
            });
        });
    });
});
