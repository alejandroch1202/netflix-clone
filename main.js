const lang = document.getElementById("lang");

lang.addEventListener("change", () => {
  if (lang.value === "en") {
    window.location = "/en";
  } else {
    window.location = "/es";
  }
});
