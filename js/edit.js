/*global $ */

$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});


(function($) {
    'use strict';

    $('.top-header .show-list').on('click', function () {
        $(this).parent().find('.list').toggleClass('list-open');
    });

    $('.notification .show-noti').on('click', function (e) {
        e.stopPropagation();
        $(this).parent().find('.notifications-box').toggleClass('open');
    });

    $('.user-block .head').on('click', function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.droplist').toggleClass('open');
    });

    $(document).on('click',function(){
        $('.notifications-box').removeClass('open');
        $('.user-block').removeClass('active');
        $('.droplist').removeClass('open');
    });

    $('.side-menu .head').on('click',function(){
        $('.side-menu li').removeClass('open');
        $('.side-menu .collapse-box').slideUp();       
        $('.side-menu .head').removeClass('active');
        $(this).addClass('active');
        if($(this).siblings('.collapse-box').is(':visible')){
            $(this).siblings('.collapse-box').slideUp();
        }else{
            $(this).siblings('.collapse-box').slideDown();
        }
    });
    

    $('.top-header .pc-btn').on('click',function(){
        $('.side-menu ').toggleClass('small');
        $('.side-menu li').removeClass('open');
        $('.content').toggleClass('full-width');    
    });

    $('.top-header .mobile-btn').on('click',function(){
        $('.side-menu ').toggleClass('no-translate');  
    });


    $('.tabs-list .link').click(function (e) {
        e.preventDefault();   
        var itemId = $(this).attr("href");
        
        $('.single-tab').removeClass('active-tab'); 
        $(itemId).addClass('active-tab');
        
        $('.tabs-list .link').removeClass('active-link');
        $(this).addClass('active-link');
    });

    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });

    $('select').select2();

    $('.show-adv-search').click(function(e){
        e.stopPropagation();
        $('.advanced-search').toggle();
    });
    $('.advanced-search').click(function(e){
        e.stopPropagation();
    });
    $(document).on('click',function(){
        $('.advanced-search').hide();
    });


    $('.show-search-categ ').click(function(e){
        e.stopPropagation();
        $('.search-categ li ul').slideUp();
        $('.search-categ').toggle();
    });
    $('.search-categ').click(function(e){
        e.stopPropagation();
    });
    $(document).on('click',function(){
        $('.search-categ').hide();
    });

    $('.search-categ p span').click(function(){
        $(this).parent().next().slideToggle();
        $(this).toggleClass('minus');
    });

    $('.search-categ .expand').click(function(){
        $('.search-categ li ul').slideDown();
        $('.search-categ p span').addClass('minus');
    });

    $('.search-categ .colapse').click(function(){
        $('.search-categ li ul').slideUp();
        $('.search-categ p span').removeClass('minus');
    });

    $('.details .tabslist .link').click(function (e) {
        e.preventDefault();   
        var itemId = $(this).attr("href");
        
        $('.tabs-data .single-tab').removeClass('active-tab'); 
        $(itemId).addClass('active-tab');
        
        $('.details .tabslist .link').removeClass('active');
        $(this).addClass('active');
    });

    $('.check_all').click(function() {
        if ($(this).is(':checked')) {
            $('.items-table input').attr('checked', true);
        } else {
            $('.items-table input').attr('checked', false);
        }
    });

    $(".items-table input").click(function () {
        if ($(this).is(":checked")){
          var isAllChecked = 0;
          $(".items-table input").each(function(){
            if(!this.checked)
               isAllChecked = 1;
          })              
          if(isAllChecked == 0){ $(".check_all").prop("checked", true); }     
        }else {
          $(".check_all").prop("checked", false);
        }
    });

    $('.screen-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='icofont icofont-thin-right'></i>", "<i class='icofont icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".tag-link").on("click", function (e) {
        e.preventDefault();
        $('.content').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    var cw = $('.Listing-cats-page .cats-wrapper .cat-box img').width();
    $('.Listing-cats-page .cats-wrapper .cat-box img').css({'height':cw+'px'});

    // var mh = $('.account-locations-page .address-box .data').height();
    // $('.account-locations-page .address-box').css({'min-height':mh+'px'});
    // alert(mh);
})(jQuery);



var array = [];
    function myCatSelect(myEl){
    var value = myEl.value;
    if(myEl.checked){
        array.push(myEl.id);
    }else{
    array.splice(array.indexOf(myEl.id) ,1 );
    }

    if(array.length === 1){
        var name = $('#'+array[0]).val();
        $('#result').html(name);
    }else if(array.length === 0){
        $('#result').html('Shop by category');
    }
    else{
        $('#result').html(array.length + ' category');
    }
}

$(".profile-input-file").change(function () {
    var input = (this);
    var image = $(this).siblings('.profile-input-image');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            image.attr('src', e.target.result);
            console.log(this);
        }
        reader.readAsDataURL(input.files[0]);
    }
});

