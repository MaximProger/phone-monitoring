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
    evt.preventDefault();
    const modalId = $(this).data("modal");
    openModal(modalId);
  });

  $(".modalEdit").click((evt) => {
    evt.preventDefault();
    openModal("#modalEdit");
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

  // Добавление/удаление строк
  $(".number__minus").click(function (evt) {
    evt.preventDefault();
    const numberSectionLine = $(this).parents(".number__section__line");
    numberSectionLine.hide();
  });

  $(".number__plus").click(function (evt) {
    evt.preventDefault();
    const selectId_1 = Date.now() + Math.random();
    const selectId_2 = selectId_1 + 1;
    const numberSection = $(this).parents(".number__section");
    const numberSectionLine = `
    <div class="number__section__line">
  										<div class="custom__input__item number__input__item">
  											<div class="custom__input__title number__input__title">
  												с
  											</div>
  											<div class="number__select__item custom__select__item custom__select__item--small">
  												<select class="custom__select select__new js-example-basic-single" name="time_${selectId_1}" id="time_${selectId_1}">
  													<option value="14">14:00</option>
  													<option value="15">15:00</option>
  												</select>
  											</div>
  										</div>

  										<div class="custom__input__item number__input__item">
  											<div class="custom__input__title number__input__title">
  												до
  											</div>
  											<div class="number__select__item custom__select__item custom__select__item--small">
  												<select class="custom__select select__new js-example-basic-single" name="time_${selectId_2}" id="time_${selectId_2}">
  													<option value="19">19:00</option>
  													<option value="20">20:00</option>
  												</select>
  											</div>
  										</div>

  										<button type="button" class="number__minus number__minus--new btn btn--outline btn--small btn--onlyicon">
  											<i class="fas fa-minus"></i>
  										</button>
  									</div>
    `;

    // numberSection.append(numberSectionLine);

    $(numberSectionLine).insertBefore($(this));

    $(".select__new").select2({
      minimumResultsForSearch: -1,
    });

    $(".number__minus--new").click(function (evt) {
      evt.preventDefault();
      const numberSectionLine = $(this).parents(".number__section__line");
      numberSectionLine.hide();
    });
  });

  // Частота проверок
  // $(".number__range__circle__item").hover(function () {
  //   const numberRangeCircle = $(this).parents(".number__range__circle");
  //   numberRangeCircle.toggleClass("number__range__circle--active");
  // });

  $(".number__range__circle__item").click(function () {
    $(".number__range__circle").removeClass("number__range__circle--active");
    const numberRangeCircle = $(this).parents(".number__range__circle");
    numberRangeCircle.addClass("number__range__circle--active");
  });
});
