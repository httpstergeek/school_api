<?php

$schools = file_get_contents("data/seattle_schools.js");
if (!empty($_REQUEST)) {
    $json_encoded = json_decode($schools, true);
    $matches = array();
    foreach ($json_encoded['schools'] as $school) {
        $filter = true;
        foreach ($_REQUEST as $key => $value) {
            if ($school[$key] != $value) {
                $filter = false;
                break;
            }
        }
        if ($filter) {
            array_push($matches, $school);
        }
    }
    $schools = array("school" => $matches);
}
echo json_encode($schools, JSON_PRETTY_PRINT);