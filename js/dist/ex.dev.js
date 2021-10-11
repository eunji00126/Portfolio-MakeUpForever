"use strict";

$(function () {
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });
  setCheckList('#face_container', 8);

  function setCheckList(selector, number) {
    var listLength = 0;
    var listShown = number; //보여줄 개수
    //초기화

    showMore();
    $(selector).find('a.more').on('click', function () {
      showMore();
    });

    function showMore() {
      listLength = $(selector).find('ul.product-ul li.on').length;

      if (listShown >= listLength) {
        listShown = listLength;
        $(selector).find('a.more').hide();
      } else {
        $(selector).find('a.more').show();
      }

      $(selector).find('ul.product-ul li.on:lt(' + listShown + ')').addClass('show');
      listShown += number;
    }
  }

  ;
});