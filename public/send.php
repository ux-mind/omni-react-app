<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$company = $_POST['company'];

$title = "Website register";
$body = "
<b>Email:</b> $email<br>
<b>Name:</b> $name<br>
<b>Company:</b> $company<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    // $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    // $mail->SMTPAuth   = true;
    $mail->SMTPAuth   = false;
    $mail->Debugoutput = function($str, $level) {
        $GLOBALS['status'][] = $str;
    };
    
    // Настройки вашей почты
    // $mail->Host       = 'mail.visual-layer.com'; // SMTP сервера вашей почты
        $mail->Host       = 'relay-hosting.secureserver.net';
    // $mail->Username   = 'hello@visual-layer.com'; // Логин на почте
    // $mail->Password   = '#M=sSEL*WCn,'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
        $mail->Port = 25;
        $mail->setFrom('help@visual-layer.com', 'Visual Layer - Website register'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress('amir@visual-layer.com');
    $mail->addCC('danny@visual-layer.com');
    $mail->addAddress('info@ux-mind.pro');
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    }
    else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode([
    "result" => $result,
    "status" => $status,
    "mail" => $mail->ErrorInfo
]);

?>