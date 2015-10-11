<?php 
    $result = $mysqli->query("SELECT * FROM fotoboek");
    while($pictures=$result->fetch_assoc()){
    echo '<div id=pictures>';
     echo '<img src="'.$pictures['img'].'">';
    echo '<input type="button" value="kopen" id="koopButton">';
    echo '</div>';
 

    }
 ?>