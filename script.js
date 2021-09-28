function remove(str) {
  document.querySelector(".textarea--after").innerHTML = str.replace(
    /\s+/g,
    ""
  );
}
