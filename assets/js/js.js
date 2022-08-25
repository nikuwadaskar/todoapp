$("#add").click(function () {
  if ($("#add").text() == "add") {
    $("#add").html("close");
  } else {
    $("#add").html("add");
  }
  const text = $("#input").attr("class");
  if (text.search("none") == -1) {
    $("#input").attr("class", "main animate__bounceOut");
    setTimeout(() => {
      $("#input").attr("class", "main none");
    }, 700);
  } else {
    $("#input").attr("class", "main animate__bounceIn");
  }
});
