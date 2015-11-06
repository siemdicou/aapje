<?php 
    $result = $mysqli->query("SELECT * FROM fotoboek");
    while($pictures=$result->fetch_assoc()){
    echo '<div class=pictures>';
    echo '<img src="'.$pictures['img'].'">';
         echo "<div class=textKopen>";
		 	echo '<h3>'.$pictures['coins'];
		 	echo '<br><button class="kopen">kopen</button>';
            echo "</h3>";
		 echo '</div>';
    echo '</div>';
    }
    // if ($pictures['img']= ) {
    //     # code...
    // }
 ?>
