(function () {
  var WHATSAPP_NUMBER = "972524744452"; // international format, no + or leading 0
  var CONTACT_EMAIL = "info@sh-webcraft.online";

  var form = document.getElementById("lead-form");
  var successBox = document.getElementById("form-success");

  function buildWhatsAppMessage(data) {
    var lines = [
      "היי, אשמח לתאם פגישה דרך אתר S.H Webcraft.",
      "שם: " + data.name,
      "טלפון: " + data.phone,
    ];
    if (data.email) lines.push("אימייל: " + data.email);
    if (data.message) lines.push("מה תרצו ללמוד / פרטים נוספים: " + data.message);
    return lines.join("\n");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };

      if (!data.name || !data.phone) {
        return;
      }

      var text = encodeURIComponent(buildWhatsAppMessage(data));
      var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;

      form.style.display = "none";
      if (successBox) successBox.style.display = "block";

      window.open(waUrl, "_blank", "noopener");
    });
  }

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
