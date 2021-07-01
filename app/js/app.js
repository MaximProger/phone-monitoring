$(document).ready(function () {
  // Инициализация селекта
  $("select").select2({
    minimumResultsForSearch: -1,
  });

  // Маска для телефона
  $("input[type=tel]").mask("+7 (999) 999-99-99");

  // Контролллеры
  $(".info__controll").click(function (evt) {
    evt.preventDefault();
    $(".info__controll").removeClass("info__controll--active");
    $(this).addClass("info__controll--active");
  });

  // Модальные окна
  function closeModals() {
    $(".modal").slideUp();
    $(".mask").fadeOut();
    overlay(false);
  }

  function openModal(modalId) {
    $(modalId).slideDown();
    $(".mask").fadeIn();
    overlay(true);
  }

  function overlay(show) {
    if (show) {
      var top = $(window).scrollTop();
      var left = $(window).scrollLeft();
      $(window).scroll(function () {
        $(this).scrollTop(top).scrollLeft(left);
      });
    } else {
      $(window).unbind("scroll");
    }
  }

  $(".mask").click(function (evt) {
    evt.preventDefault();

    closeModals();
  });

  $(".modal__close").click(function (evt) {
    evt.preventDefault();

    closeModals();
  });

  $(document).keydown((evt) => {
    if (evt.keyCode == 27) {
      closeModals();
    }
  });

  $("[data-modal]").click(function (evt) {
    const modalId = $(this).data("modal");
    openModal(modalId);
  });

  // Копирование текста в буффер обмена
  function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
  }

  $(".info__pannel__copy").click(function (evt) {
    evt.preventDefault();

    const phoneValue = $(this)
      .parent(".info__pannel__phone")
      .find(".info__pannel__phone__value");
    copytext(phoneValue);
  });
});
