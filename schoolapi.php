<?php
// retrieves json data from file
$schools = file_get_contents("data/seattle_schools.js");
// checking for filter arguments
if (!empty($_REQUEST)) {
    // decoding local file
    $json_encoded = json_decode($schools, true);
    // creating array will uses as associative
    $matches = array();
    // foreach element in json object
    foreach ($json_encoded['schools'] as $school) {
        // setting filter to true if any filter is found break and return object
        $filter = true;
        foreach ($_REQUEST as $key => $value) {
            if ($school[$key] != $value) {
                $filter = false;
                break;
            }
        }
        // pushes match into array
        if ($filter) {
            array_push($matches, $school);
        }
    }
    // adds key to top level.
    $schools = array("schools" => $matches);
}
// encodes object as json with pretty print
echo json_encode($schools, JSON_PRETTY_PRINT);