$(document).ready(function () {

   // Hide modal 
   $('.goods, .add , .edit, .class-edit, .class-add, .ord ,.users,.class').css('display', 'none');

   var $button1 = $('.goods__item-add')
   var $button2 = $('.goods__btn-edit')
   var $button3 = $('.header__btn-goods')
   var $button4 = $('.header__btn-odr')
   var $button5 = $('.header__btn-users')
   var $button6 = $('.header__btn-class')
   var $button7 = $('.class__btn-edit')
   var $button8 = $('.class__item-add')
   var $button9 = $('.class-add__btn-close')
   // Modal  show 

   //GOODS
   $button3.click(function () {
      $('.goods').show();
      $('.ord').hide();
      $('.users').hide()
      $('.class').hide();

   })

   // ADD продуктов modal
   $button1.click(function () {
      $('.add').show();
      $('html').css("overflow", "hidden");
   })
   $('.add__btn-close').click(function () {
      $('.add').hide();
      $('html').css("overflow-y", "scroll");
   })

   // EDIT продуктов modal
   $button2.click(function () {
      $('.edit').show();
      $('html').css("overflow", "hidden");
   })
   $('.edit__btn-close').click(function () {
      $('.edit').hide();
      $('html').css("overflow-y", "scroll");
   })


   // ADD Категорий modal
   $button8.click(function () {
      $('.class-add').show();
      $('html').css("overflow", "hidden");
   })
   $('.class-add__btn-close').click(function () {
      $('.class-add').hide();
      $('html').css("overflow-y", "scroll");
   })

   // EDIT Категорий modal
   $button7.click(function () {
      $('.class-edit').show();
      $('html').css("overflow", "hidden");
   })
   $('.class-edit__btn-close').click(function () {
      $('.class-edit').hide();
      $('html').css("overflow-y", "scroll");
   })

   //ODR
   //GOODS
   $button4.click(function () {
      $('.ord').show();
      $('.goods').hide();
      $('.users').hide()
      $('.class').hide();
   })

   //USERS 
   $button5.click(function () {
      $('.users').show();
      $('.ord').hide();
      $('.goods').hide();
      $('.class').hide();
   })

   //CLASS 
   $button6.click(function () {
      $('.class').show();
      $('.ord').hide();
      $('.goods').hide();
      $('.users').hide();

   })
});



$(document).ready(function () {
   $(".users-sale").each(function () {
      var $output = $(this).next(".users-sale-count");
      $output.text($(this).val());
      $(this).on("input", function () {
         $output.text($(this).val());
      });
   });
});



$(document).ready(function () {
   $(".goods-sale").each(function () {
      var $output = $(this).next(".goods-sale-count");
      $output.text($(this).val());
      $(this).on("input", function () {
         $output.text($(this).val());
      });
   });
});
