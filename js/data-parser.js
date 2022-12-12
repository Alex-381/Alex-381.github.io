var refresherInterval;
$(function() {
  refresherInterval = setInterval(checkData, 1000);
});

function checkData() {
  $.ajax({
    url: 'https://alex-381.github.io/names.json',
    dataType: 'json',
    success: function(data){
		
		if (hasData(data)) {
			alert(readName(data));
			abortTimer();
		} else {
		}
    }
  });
}

function abortTimer() {
  clearInterval(interval);
}

function hasData(data) {
	return data.length > 0;
}

function readName(data) {
	return data[0].name;
}