$(document).ready(function() {
   $('input.submit').click(function() {
   var singleValues = $( ".cmp_txt" ).val();
   
   window.location.href = "https://www.sec.gov/cgi-bin/browse-edgar?company="+singleValues; 
   });
 });
 
  $(document).ready(function() {
   $('input.submit1').click(function() {
   var singleValues1 = $( ".fin_txt" ).val();
   
   window.location.href = "https://search.cnbc.com/rs/search/view.html?source=CNBC.com&categories=exclude&partnerId=2000&keywords="+singleValues1;
   });
 });