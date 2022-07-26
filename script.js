$(document).ready(function () {
    $("#blue").click(function () {
      $("#text").css("backgroundColor","blue");
      $("#txt").css("color","white");
      $("#txt").css("backgroundColor","blue");
      $("#txt").css("borderColor","white");
    });
    $("#green").click(function () {
        $("#text").css("backgroundColor","green");
        $("#txt").css("color","black");
        $("#txt").css("backgroundColor","green");
        $("#txt").css("borderColor","black");
      });
    $("#yellow").click(function () {
      $("#text").css("backgroundColor","yellow");
      $("#txt").css("color","black");
      $("#txt").css("backgroundColor","yellow");
      $("#txt").css("borderColor","black");
    });
    $("#black").click(function () {
        $("#text").css("backgroundColor","black");
        $("#txt").css("color","white");
        $("#txt").css("backgroundColor","black");
        $("#txt").css("borderColor","white");
      });
  });