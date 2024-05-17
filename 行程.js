$(function () {
    $("#datepicker").datepicker({
      showAnim: "clip"
    });
    displaySelectedOptions(); 
  });
  
  function displaySelectedOptions() {
    var location = $('#locationSelect option:selected').text();
    var theme = $('#themeSelect option:selected').text();
    var itinerary1 = $('#itinerary1Select option:selected').text();
    var itinerary2 = $('#itinerary2Select option:selected').text(); 
  }
  $(document).ready(function () {
    $('#locationSelect, #themeSelect, #itinerary1Select, #itinerary2Select, #itinerary3Select').change(function () {
      displaySelectedOptions();
    });
    displaySelectedOptions(); 
  });
  
  function displaySelectedOptions() {
    var location = $('#locationSelect option:selected').text();
    var theme = $('#themeSelect option:selected').text();
    var itinerary1 = $('#itinerary1Select option:selected').text();
    var itinerary2 = $('#itinerary2Select option:selected').text();
    var itinerary3 = $('#itinerary3Select option:selected').text();
  
    var output = '<h4>您選擇的行程:</h4>';
    output += '<p>地點: ' + location + '</p>';
    output += '<p>出遊天數: ' + theme + '</p>';
    output += '<p>出發日期: ' + $('#datepicker').val() + '</p>';
    output += '<p>第一天: ' + itinerary1 + '</p>';
    output += '<p>第二天: ' + itinerary2 + '</p>';
    output += '<p>第三天: ' + itinerary3 + '</p>';
  
    $('#outputDiv').html(output);
    $(function () {
        $("#datepicker").datepicker({
          showAnim: "clip"
        });
        displaySelectedOptions(); 
      });
  }

  $(document).ready(function() {
    $('#themeSelect').change(function() {
        var days = $(this).val();
        $('#additional-selects select').addClass('hidden');

        if (days >= 1) {
            $('#select1').removeClass('hidden');
        }
        if (days >= 2) {
            $('#select2').removeClass('hidden');
        }
        if (days == 3) {
            $('#select3').removeClass('hidden');
        }
    });
});
  