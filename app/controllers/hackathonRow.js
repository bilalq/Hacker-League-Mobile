var args = arguments[0] || {};

$.name.text = args.name;
$.dateRange.text = args.display_date;

function openDetailWindow(e) {
  var detailView = Alloy.createController('hackathonDetail', args).getView();
  detailView.open();
}
$.hackathon.addEventListener('click', openDetailWindow);
$.name.addEventListener('click', openDetailWindow);
$.location.addEventListener('click', openDetailWindow);
$.dateRange.addEventListener('click', openDetailWindow);
