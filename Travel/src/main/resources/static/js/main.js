(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

//????????????
function register() {
    // Form fields, see IDs above
    const params = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    const http = new XMLHttpRequest();
    http.withCredentials = true;
    http.open('POST', '/travel/register', true);//'https://cors-anywhere.herokuapp.com/'+
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(params));// Make sure to stringify //JSON.stringify(params)
    http.onreadystatechange = function () {
        if (http.status >= 200 && http.status < 400) {
            swal("????????????!", "?????????????????????!", "success");
            document.location.href = "/travel/index";

        } else {
            swal("????????????!", "????????????Email??????????????????", "error");
        }
    }
};

//????????????
$(function () {
    $("#datepicker,#datepicker1").datepicker();
});

function upMember() {
    const data = {
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        birthday: document.getElementById('birthday').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value
    };
    $.ajax({
        type: "PUT",
        url: "/travel/memberCentre",

        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json;charset:UTF-8",
        success: () => {

            swal("????????????!", "????????????????????????!", "success");
            document.location.href = "/travel/memberCentre";
            console.log("ok");
        },
        error: () => {

            swal("????????????!", "???????????????????????????????????????!", "error");

            console.log("NO");
        }
    });
};

//????????????
function login() {
    // Form fields, see IDs above
    const params = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    $.ajax({
        type: "POST",
        url: "/travel/login",

        data: JSON.stringify(params),
        dataType: "json",
        contentType: "application/json;charset:UTF-8",
        success: () => {
            document.location.href = "/travel/index";
        },
        error: () => {
            swal("????????????!", "?????????????????????????????????!", "error");
        }
    });
};

//??????????????????
const buttonElement = document.getElementById('email');

buttonElement.addEventListener('click', function () {
    const params = {
        email: document.getElementById('email').value
    }

    var xml = new XMLHttpRequest();
    xml.withCredentials = true;
    xml.open('POST', '/travel/members/checkEmail', true);
    xml.onreadystatechange = function () {

        if (xml.status >= 200 && xml.status < 400) {
            if (document.getElementById('email').value === "") {
                var myVar = 4;
                document.body.className = (myVar == 5 ? "yes" : "no");
                document.getElementById("textEmail").innerText = "???????????????/Email";
            } else {
                console.log(document.getElementById('email').value);
                var myVar = 4;
                document.body.className = (myVar == 5 ? "yes" : "no");
                document.getElementById("textEmail").innerText = "???Email????????????";
            }
        } else {
            console.log("XX");
            var myVar = 5;
            document.body.className = (myVar == 5 ? "yes" : "no");
            document.getElementById("textEmail").innerText = "???Email?????????";
        };
    };
    xml.setRequestHeader("Content-Type", "application/json");
    xml.send(JSON.stringify(params));

});

//???????????????????????????
function findAll(){
    setCookie("city", "", 365);
    document.location.href = "/travel/find";
    datalist();
}