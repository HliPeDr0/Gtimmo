// Resize Menu
$(document).on("scroll", function () {
    if ($(window).width() > 400) {
        if ($(document).scrollTop() > 20) {
            $("header").removeClass("#desktop-nav").addClass("small");
        } else {
            $("header").removeClass("small").addClass("#desktop-nav");
        }
    }
});

//Responsive menu
$(document).ready(function () {
    $('#hamburger, #close').click(function () {
        $('#hamburger, #close').toggle();
        $('header #desktop-nav ul').toggleClass('visible');
    });
});

// Fade Black
$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        if ($(window).width() > 568) {
            $('.blackOverlay').css('opacity', currentScrollTop / $('.blackOverlay').height());
        }
    });
});

// Scroll arrow
$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});

// Highlight Menu Item on Scroll
var lastId;
var topMenu = $("#desktop-nav");
var topMenuHeight = topMenu.outerHeight();
var menuItems = topMenu.find("a");

scrollItems = menuItems.map(function () {
    if ($(window).width() > 568) {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    }
});

menuItems.click(function (e) {
    var href = $(this).attr("href");
    var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;

    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();

});

$(window).scroll(function () {

    var fromTop = $(this).scrollTop() + topMenuHeight;

    var current = scrollItems.map(function () {
        if ($(this).offset().top <= fromTop)
            return this;
    });

    current = current[current.length - 1];
    var id = current && current.length ? current[0].id : "";
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }

});