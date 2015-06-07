console.log("Highlight good fields");

var ids = self.options["ids"]

console.log(ids);

$("input:text").each(function(index, arg) {
  if ($(arg).val() == ids) {
    console.log("Id is correct");
    $(arg).css("color", "green");
  }
});
