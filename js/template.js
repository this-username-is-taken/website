function loadTemplate() {
  var d1 = new $.Deferred();
  var d2 = new $.Deferred();

  $.when(d1, d2).then(function() {
    selectNav();
    $("body").css("display", "inline");
  });

  $('header').load('templates/header.html', function() { d1.resolve(); });
  $('footer').load('templates/footer.html', function() { d2.resolve(); });
}

function selectNav() {
  var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  if (filename.length === 0) {
    filename = "index.html";
  }
  $(".nav li a").each(function() {
    if ($(this).attr("href") === filename) {
      $($(this).parent()).addClass("active");
    }
  });
}
