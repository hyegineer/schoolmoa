function openHdSearch() {
  $('.header-search-wrap').addClass('active');
  $('.header-overlay').addClass('active');
}

function closeHdSearch() {
  $('.header-search-wrap').removeClass('active');
  $('.header-overlay').removeClass('active');
  $('.bottom-bd-inp-wrap .inp').val('');
  $('.bottom-bd-inp-wrap .del-btn').removeClasS('active');
}

function toggleHdMenu() {
  $('.header-btn-wrap').toggleClass('active');
}

// 헤더 검색: 검색어 입력시 지우기 버튼 활성화
$('.bottom-bd-inp-wrap .inp').on('input', function () {
  if ($(this).val()) {
    $(this).siblings('.del-btn').addClass('active');
  } else {
    $(this).siblings('.del-btn').removeClass('active');
  }
})

// 헤더 검색: 검색어 입력시 지우기 버튼 작동
$('.bottom-bd-inp-wrap .del-btn').on('click', function () {
  $(this).siblings('.inp').val('');
})

// 헤더 검색: 검색어 포커스할 때 보더 효과 적용
$('.bottom-bd-inp-wrap .inp').on('focus', function () {
  $(this).parent('.bottom-bd-inp-wrap').addClass('active');
})

// 헤더 검색: 검색어 포커스 뗄 때 보더 효과 해제
$('.bottom-bd-inp-wrap .inp').on('blur', function () {
  $(this).parent('.bottom-bd-inp-wrap').removeClass('active');
})