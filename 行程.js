$(function () {
    $("#datepicker").datepicker({
      showAnim: "clip"
    });
    displaySelectedOptions(); // 日曆選擇時顯示選項內容
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
    displaySelectedOptions(); // 選擇時顯示選項內容
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
    output += '<p>早上行程: ' + itinerary1 + '</p>';
    output += '<p>下午行程: ' + itinerary2 + '</p>';
    output += '<p>晚上行程: ' + itinerary3 + '</p>';// 新增
  
    $('#outputDiv').html(output);
    $(function () {
        $("#datepicker").datepicker({
          showAnim: "clip"
        });
        displaySelectedOptions(); // 日曆選擇時顯示選項內容
      });
  }
  