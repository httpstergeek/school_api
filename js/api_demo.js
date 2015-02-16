/**
 * Created by Bernardo on 2/15/2015.
 */
$(document).ready(function() {

    // on click make request
    $('.title a').not('#zipcode, #zip').click(function(e){
        $('div .large-6').empty(); // removes existing elements
        e.preventDefault(); //stop default action of the link
        filter = 'type=' + $(this).attr('href');  //get category from URL
        loadAJAX(filter);  //load AJAX and parse JSON file
    });
    // onchange of text in make request
    $('#zip').change(function(){
        $('div .large-6').empty(); // removes existing elements
        filter = 'zip=' + $(this).val(); // gets value from text input
        loadAJAX(filter);
    });
});

// ajax function that accepts filter arguments
function loadAJAX(filter)
{
    console.log('schoolapi.php?' + filter);
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "schoolapi.php?" + filter,
        success: parseJSON
    });

}
// parses json data, creates new DOM elements, and adds them to page.
function parseJSON(data){
    // for each object creates new Div with data for school.
    $.each(data.schools, function(i,item){
        var row = $("<div></div>").addClass('row').append(
            $('<div></div>').addClass('large-2 columns small-3').append(
                $('<img></img>').attr('src', 'images/' + item.type + ".png")
            ),
            $('<br/>'),
            $('<p></p>').attr('class', 'stitle').text(item.name + ':'),
            $('<div></div>').attr('class', 'schoolData').append(
                $('<ul></ul>').append(
                    $('<li></li>').append(
                        $('<strong></strong>').text('type: '),
                        $('<span></span>').text(item.type)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('grades: '),
                        $('<span></span>').text(item.grade)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('city: '),
                        $('<span></span>').text(' '+ item.city)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('address: '),
                        $('<span></span>').text(' '+ item.address)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('zipcode: '),
                        $('<span></span>').text(' '+ item.zip)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('phone: '),
                        $('<span></span>').text(' '+ item.phone)
                    ),
                    $('<li></li>').append(
                        $('<strong></strong>').text('website:  '),
                        $('<a></a>').attr('href', item.website).text(item.website)
                    )
                )
            )
        );
        // appends new DOM element to page
        $('div .large-6').append(row, $('<hr/>'))
    });
}