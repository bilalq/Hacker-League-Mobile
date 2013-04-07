var args = arguments[0] || {};

$.name.text = args.name;
$.dateRange.text = args.display_date;

$.hackathon.addEventListener('click', function(e) {
  var detailView = Alloy.createController('hackathonDetail', args).getView();
  detailView.open();
});
