// 行程.js
//日期選擇
$( function() {
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );


  
$(document).ready(function () {
  $('#themeSelect').change(function () {
    var days = $(this).val();
    $('#itinerary1Select, #itinerary2Select, #itinerary3Select').addClass('hidden');

    if (days >= 1) {
      $('#itinerary1Select').removeClass('hidden');
    }
    if (days >= 2) {
      $('#itinerary2Select').removeClass('hidden');
    }
    if (days == 3) {
      $('#itinerary3Select').removeClass('hidden');
    }
  });

  // Initialize datepicker
  $('#datepicker').datepicker({
    dateFormat: 'yy-mm-dd'
  });
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
  
    var output = '<br><h3>您選擇的行程:</h3><br>';
    output += '<p>地點: ' + location + '</p>';
    output += '<p>出遊天數: ' + theme + '</p>';
    output += '<p>出發日期: ' + $('#from').val() + '</p>';
    output += '<p>結束日期: ' + $('#to').val() + '</p>';
    output += '<p>第一天: ' + itinerary1 + '</p>';
    output += '<p>第二天: ' + itinerary2 + '</p>';
    output += '<p>第三天: ' + itinerary3 + '</p> <br>';
  
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
  