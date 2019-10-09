<?php

require_once __DIR__ . '/mailer/Validator.php';
require_once __DIR__ . '/mailer/ContactMailer.php';

if (!Validator::isAjax() || !Validator::isPost()) {
	echo 'Доступ запрещен!';
	exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : null;
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;
/*$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : null;*/

if (empty($name) || empty($phone)) {
	echo 'Все поля обязательны для заполнения.';
	exit;
}

if (!Validator::isValidEmail($email)) {
	echo 'E-mail не соответствует формату.';
	exit;
}

if (!Validator::isValidPhone($phone)) {
	echo 'Телефон не соответствует формату.';
	exit;
}

if (ContactMailer::send()) {
    $answer = 1;
    /*header("Location: sendok.html");*/
} else {
    $answer = 0;
    /*header("Location: senderr.html");*/
}
die($answer);