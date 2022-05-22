window.onbeforeunload = function () {
    window.scrollTo(0, window.scrollY);
  }
  $('.w3-modal-content').click(function (event) {event.stopPropagation();});