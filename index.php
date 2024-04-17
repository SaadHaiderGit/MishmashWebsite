<?php
    header("Content-Type:application/json");

    $_POST = json_decode(file_get_contents('php://input'), true);
    $db = $_POST["db"];


    //connect
    $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "mishmash_db");

    //check the connection
    if(mysqli_connect_error()) {
        echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
        die("There was an error connecting to the database");
    }

    //if we got here, the connection was successful
    if ($db == "mishmash_cards") {
        $query = "SELECT * FROM mishmash_cards ORDER BY mishmash_cards.ID ASC";
    }
    else {$query = "SELECT * FROM condition_cards ORDER BY condition_cards.ID ASC";}

    //capture the return value of mysqli_query
    //and if it isn't null, we can get the data
    $result = mysqli_query($mysqli, $query);

    $json_result = array();
    while($row = mysqli_fetch_assoc($result)) {
        $json_result[] = $row;
    }
    
    print_r(json_encode($json_result));
    $mysqli->close();
?>
