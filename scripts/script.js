// $(document).ready(function() {
//         $('#terms').load('disclaimer.html');
//         console.log('test');
//                         alert("Please read the disclaimer.");

//     });


$( "#button1" ).click(function() {
$('#terms-header').load('disclaimer.html');
        console.log('homepage');

        $(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $("#section-one").height();
    var viewPortSize = $(window).height();

    var triggerAt = 250;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.quote').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
    });
                        // alert("This is the homepage");
});

$( "#button2" ).click(function() {
$('#terms-header').load('disclaimertwo.html');
        console.log('team page');
                        // alert("This is the team page");
});

$( "#button3" ).click(function() {
        $('#gifSpinner').show();


$('#terms-header').load('about.html', function (){   $('#gifSpinner').hide();
    console.log('loader shown');
});
        console.log('contact us');
                        // alert("This is the contact us page");
                        $(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $("#section-one").height();
    var viewPortSize = $(window).height();

    var triggerAt = 250;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.quote').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
    });
});

 // $('#loading').show();

 //    $("#content").load("example.html", function () { //calback function
 //         $('#loading').hide();
 //    });

