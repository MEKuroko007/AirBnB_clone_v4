$(document).ready(function () {
  let selectedFeatures = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      selectedFeatures[$(this).data('id')] = $(this).data('name');
    } else {
      delete selectedFeatures[$(this).data('id')];
    }
    let featureList = Object.values(selectedFeatures);
    if (featureList.length > 0) {
      $('div.features > h4').text(Object.values(selectedFeatures).join(', '));
    } else {
      $('div.features > h4').html('&nbsp;');
    }
  });
});
