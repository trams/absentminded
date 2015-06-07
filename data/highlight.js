console.log("Highlight good fields");

var ids = self.options["ids"]

console.log(ids);

$("input:text").each(function(index, arg) {
  text = $(arg).val();
  if (text == ids) {
    console.log("Id is correct");
    $(arg).css("color", "green");
  } else if (levenshtein(text, ids) == 1) {
    console.log("Id is almost corrent");
    $(arg).css("color", "red");
  }
});
