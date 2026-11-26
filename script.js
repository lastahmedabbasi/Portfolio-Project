// contact form: check that everything is filled in, then open the email app
var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all the fields");
    return;
  }

  if (email.indexOf("@") == -1) {
    alert("Please enter a valid email");
    return;
  }

  var subject = "Message from " + name;
  var body = message + "\n\nFrom: " + name + " (" + email + ")";
  window.location.href = "mailto:ahmedabbasiyt@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
