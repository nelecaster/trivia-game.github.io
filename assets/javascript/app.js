// selection from radio buttons must be compared to correct answer

// if radio button clicked === correct answer, +1 correct, if not +1 incorrect

// correct/incorrect are to be on a seperate card or other div

var correct = "";

var incorrect = "";

var answers = ['Atreides', 'Landsraad', '15', 'Red Duke', 'Agamemnon', 'Golden Lion', 'Duncan Idaho', 'desert power', 'Shadout Mapes', 'Rabban and Feyd-Rautha']

window.onload = function() {
    $('input[name="group1"]').prop('checked', false);
    $('input[name="group2"]').prop('checked', false);
    $('input[name="group3"]').prop('checked', false);
    $('input[name="group4"]').prop('checked', false);
    $('input[name="group5"]').prop('checked', false);
    $('input[name="group6"]').prop('checked', false);
    $('input[name="group7"]').prop('checked', false);
    $('input[name="group8"]').prop('checked', false);
    $('input[name="group9"]').prop('checked', false);
    $('input[name="group10"]').prop('checked', false);
}
// timer counts down


$(document).ready(function() {

    

$('.results').hide();
$('.correct').html(correct);
$('.incorrect').html(incorrect);

    function counter($el, n) {
        (function loop() {
           $el.html(n);
           if (n--) {
               setTimeout(loop, 1000);
           } if (n < 0) {
            console.log('done');
            $('.main').hide();
            $('.results').show();
        }
        })();

        
    }
    
    counter($('#time'), 45);

    $('input[name = "group1"]').click(function() {
        if($('#1-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#1-1').is(':checked') || $('#1-2').is(':checked') || $('#1-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group2"]').click(function() {
        if($('#2-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#2-1').is(':checked') || $('#2-2').is(':checked') || $('#2-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group3"]').click(function() {
        if($('#3-2').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#3-1').is(':checked') || $('#3-3').is(':checked') || $('#3-4').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group4"]').click(function() {
        if($('#4-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#4-1').is(':checked') || $('#4-2').is(':checked') || $('#4-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group5"]').click(function() {
        if($('#5-2').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#5-1').is(':checked') || $('#5-3').is(':checked') || $('#5-4').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group6"]').click(function() {
        if($('#6-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#6-1').is(':checked') || $('#6-2').is(':checked') || $('#6-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group7"]').click(function() {
        if($('#7-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#7-1').is(':checked') || $('#7-2').is(':checked') || $('#7-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group8"]').click(function() {
        if($('#8-2').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#8-1').is(':checked') || $('#8-3').is(':checked') || $('#8-4').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group9"]').click(function() {
        if($('#9-1').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#9-2').is(':checked') || $('#9-3').is(':checked') || $('#9-4').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });

     $('input[name = "group10"]').click(function() {
        if($('#10-4').is(':checked')) {
            console.log("worked!");
            correct++;
            $('.correct').html(correct);
        } else if ($('#10-1').is(':checked') || $('#10-2').is(':checked') || $('#10-3').is(':checked')) {
            console.log("borked...")
            incorrect++;
            $('.incorrect').html(incorrect);
        }
     });



     
    
    


    
});





