
function levenshtein(left, right) {
  var table = new Array(left.length + 1);
  for (i = 0; i < table.length; ++i) {
    table[i] = new Array(right.length + 1);
  }

  for (i = 0; i < table.length; ++i) {
    for (j = 0; j < table[i].length; ++j) {
	  if ((i == 0) || (j == 0)) {
	  	table[i][j] = Math.max(i, j);
	  } else {
	  	var result = Math.min(
	  	  table[i][j - 1] + 1,
	  	  table[i - 1][j] + 1,
	  	  table[i - 1][j - 1] + (left[i] == right[j]? 0 : 1));

	  	if ((i > 1) && (j > 1) && (left[i] == right[j-1]) && (left[i-1] == right[j])) {
	  	  result = Math.min(
	  	  	result,
	  	  	table[i - 2][j - 2] + 1);
	  	}
	  	table[i][j] = result;
	  }
    }
  }
  return table[left.length][right.length];
}

exports.levenshtein = levenshtein