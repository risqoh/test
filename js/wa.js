//wa box obral
var boxes = document.querySelectorAll(".box-obral");
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    window.open(
      "https://api.whatsapp.com/send?phone=6285198995587&text=halo%20kak%2C%20saya%20ingin%20membeli%20produk%20box%20obral",
      "_blank"
    );
  });
});
