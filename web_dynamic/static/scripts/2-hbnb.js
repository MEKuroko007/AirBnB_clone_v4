$(document).ready(function () {
  let selectedAmenities = {};
  
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      selectedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete selectedAmenities[$(this).data('id')];
    }
    let amenitiesList = Object.values(selectedAmenities);
    if (amenitiesList.length > 0) {
      $('div.amenities > h4').text(Object.values(selectedAmenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
