$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(1000).fadeOut("slow");


        $(document).ready(function () {

            var links = document.getElementById('links');

            if (links) {
                links.onclick = function (event) {
                    event = event || window.event;
                    var target = event.target || event.srcElement,
                        link = target.src ? target.parentNode : target,
                        options = { index: link, event: event },
                        links = this.getElementsByTagName('a');
                    blueimp.Gallery(links, options);
                };
            }


        })

    });


    /* ==========================================================================
   Background Slideshow images
   ========================================================================== */

    $(".main").backstretch([
        "images/bg-1.jpg",
        "images/bg-2.jpg",
        "images/bg-3.jpg",
        "images/bg-4.jpg"
    ], {
        fade: 750,
        duration: 3500
    });


    /* ==========================================================================
   On Scroll animation
   ========================================================================== */
    
    if ($(window).width() > 992) {
        new WOW().init();
    };
    

    /* ==========================================================================
   Fade On Scroll
   ========================================================================== */
    
    
    if ($(window).width() > 992) {
        
        $(window).on('scroll', function() {
            $('.main').css('opacity', function() {
                return 1 - ($(window).scrollTop() / $(this).outerHeight());
            });
        });
    };

    /* ==========================================================================
   countdown
   ========================================================================== */
    
    $('.countdown').downCount({
        date: '07/07/2018 12:00:00' // m/d/y
    });


    /* ==========================================================================
     sub form
     ========================================================================== */
    
    var $form = $('#mc-form');
    
    $('#mc-subscribe').on('click', function(event) {
        if (event)
            event.preventDefault();
        register($form);
    });
    
    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                $('#mc-notification').hide().html('<span class="alert">Could not connect to server. Please try again later.</span>').fadeIn("slow");
            
            },
            success: function(data) {
                
                if (data.result != "success") {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="alert"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>').fadeIn("slow");
                
                } else {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="success"><i class="fa fa-envelope"></i>' + 'Awesome! We sent you a confirmation email.' + '</span>').fadeIn("slow");
                
                }
            }
        });
    }


    /* ==========================================================================
     Textrotator
     ========================================================================== */
    
    
    
    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 4000
    });

    /* ==========================================================================
       Contact Form
       ========================================================================== */
    
    
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Molimo unesite ime.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>Molimo unesite e-mail adresu",
                email: "<i class='fa fa-exclamation-triangle'></i>Molimo unesite validnu e-mail adresu."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Molimo unesite poruku."
        }/*,
        submitHandler: function (form) {

            var name = $("#name").val();
            var mail = $("#mail").val();
            var message = $("#message").val();

           /* var mailViewModel = {
                Name: name,
                Email: mail,
                Message: message
            };*//*

            var model = {
                body: name,
                mail: mail,
                message: message
            };

         /*   var x = {
                "MailViewModel": mailViewModel
            }*/

         /*   var url = "Home/ContactMail";

            $.post(url, model, function (res) {
                //res contains the markup returned by the partial view
                //You probably want to set that to some Div.
                
            });*/

          /*  $(form).ajaxSubmit({
                type: "GET",
                data: JSON.stringify(x),
                url: "Home/ContactMail",
                //datatype: "json",
                contentType: "application/json",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.error-cf').fadeIn();
                    });
                }
            });*//*
        }*/
    });

    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });
    
    
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(document).ready(function () {
        $('#users').DataTable({
            ordering: false,
            language: {
                emptyTable: "Nema podataka u tablici",
                info: "Prikazano _START_ do _END_ od _TOTAL_ rezultata",
                infoEmpty: "Prikazano 0 do 0 od 0 rezultata",
                infoFiltered: "(filtrirano iz _MAX_ ukupnih rezultata)",
                infoPostFix: "",
                infoThousands: ",",
                loadingRecords: "Dohvaćam...",
                processing: "Obrađujem...",
                search: "Pretraži:",
                infoEmpty: "Nema rezultata",
                zeroRecords: "Nema rezultata",
                lengthMenu: "Prikaži _MENU_ rezultata",
                paginate: {
                    first: "Prva",
                    previous: "Prethodna",
                    next: "Slijedeća",
                    last: "Zadnja"
                }
            }
        });
    });
});
