function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url =
    "https://api.whatsapp.com/send?phone=6285198995587&text=halo%20kak%0Asaya%20*" +
    name +
    "*%0Aemail%20saya%20*" +
    email +
    "*%0A%0A*" +
    message +
    "*";

  window.open(url);
  document.getElementById("form").reset();
  return true;
}
