<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
   
	$headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: noreply <Почтовый сервер RA Media>\r\n";
    if(mail("aisilunya@gmail.com", "Заявка из сайта Лендинги", "Имя: $name<br/>Телефон: $phone<br/>Email:$email</br>", $headers)) {
    	echo "Сообщение успешно отправлено!";
    };
?>