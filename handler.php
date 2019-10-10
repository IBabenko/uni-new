<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

if( $_POST ){

    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->Host = 'mail.adm.tools';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@universum-studio.agency'; // логин от вашей почты
    $mail->Password = '2019cjplfybtcfqnjd2019'; // пароль от почтового ящика
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'info@universum-studio.agency'; // адрес почты, с которой идет отправка
    $mail->Subject = 'Заполнена форма Universum-Studio';
    $mail->FromName = ''; // имя отправителя
    $mail->addAddress('info@universum-studio.agency', '');

    $mail->isHTML(true);

    /*$mail->Subject = $_POST['subject'];*/
    $mail->Body = "Источник: {$_POST['title']}<br> Имя: {$_POST['name']}<br> Телефон: {$_POST['phone']}<br> Email: {$_POST['email']}<br> Сайт: {$_POST['site']}<br> Консультация: {$_POST['consultation']}<br> Услуга: {$_POST['service']}";
    $mail->AltBody = "Источник: {$_POST['title']}\r\n Имя: {$_POST['name']}\r\n Phone: {$_POST['phone']}\r\n Email: {$_POST['email']}\r\n Сайт: {$_POST['site']}\r\n Консультация: {$_POST['consultation']}\r\n Услуга: {$_POST['service']}";

    if( $mail->send() ){
        $answer = '1';
    }else{
        $answer = '0';
    }
    die( $answer );
}

