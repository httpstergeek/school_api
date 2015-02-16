/**
 * Created by Bernardo on 2/15/2015.
 */
$(document).ready(function() {

    $('.title a').not('#zipcode, #zip').click(function(e){
        $('div .large-6').empty();
        e.preventDefault(); //stop default action of the link
        filter = 'type=' + $(this).attr('href');  //get category from URL
        console.log(filter);
        loadAJAX(filter);  //load AJAX and parse JSON file
    });
    $('#zip').change(function(){
        $('div .large-6').empty();
        filter = 'zip=' + $(this).val();
        console.log(filter);
        loadAJAX(filter);
    });
});

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

function parseJSON(data){
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
        $('div .large-6').append(row, $('<hr/>'))
    });
}