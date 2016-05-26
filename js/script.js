

$(document).ready(function () {

	 $("input").keyup(function(event){
	 	if (event.which == 13){
      var value = $("#search").val();
       $("#search_results").hide();

    
	 $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+ value,
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
    	var result ="";
    	for(var i=0; i<data.query.search.length; i++){
    			var title = data.query.search[i].title;
    		var url= "http://en.wikipedia.org/wiki/" + title;

    		 result +=  "<a  href='" + url + "' target='_blank' class=' ' ><div class='col-md-10 hvr-grow' id='search_result'><h3>" + data.query.search[i].title +
    		"</h3><p>" + data.query.search[i].snippet+ "</p></div> </a>" ;
    		
    	}
    	$("#search_results").html(result);
    	$("#search_results").show( "slow", function(){});
    	$("footer").removeClass("footer");

}

})
	}
	 });
})