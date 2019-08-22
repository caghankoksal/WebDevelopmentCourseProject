$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});

$('.card-group').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
    enabled:true
  }
});
$('.card').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
    enabled:true
  }
});

$('.feature-content').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
    enabled:true
  }
});