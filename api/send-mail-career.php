<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {

    // Form fields
    $name     = trim($_POST['user_name'] ?? '');
    $position = trim($_POST['position'] ?? '');
    $email    = trim($_POST['user_email'] ?? '');
    $phone    = trim($_POST['phone'] ?? '');
    $message  = trim($_POST['message'] ?? '');

    // Validation
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "Required fields are missing."
        ]);
        exit;
    }

    $mail = new PHPMailer(true);

    $mail->CharSet = 'UTF-8';

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'sveltozsolutionspvtltd@gmail.com';

    // Put your Gmail App Password here
    $mail->Password   = 'jrcgesglblawzefz';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender
    $mail->setFrom(
        'sveltozsolutionspvtltd@gmail.com',
        'Sveltoz Careers'
    );

    // HR Email
    $mail->addAddress('dipalip@sveltoz.com');

    // Reply To Applicant
    $mail->addReplyTo($email, $name);

    // Resume Attachment
    if (
        isset($_FILES['resume']) &&
        $_FILES['resume']['error'] === 0
    ) {

        $allowed = ['pdf', 'doc', 'docx'];

        $extension = strtolower(
            pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION)
        );

        if (!in_array($extension, $allowed)) {

            http_response_code(400);

            echo json_encode([
                "success" => false,
                "message" => "Only PDF, DOC and DOCX files are allowed."
            ]);

            exit;
        }

        // Max file size = 5 MB
        if ($_FILES['resume']['size'] > 5 * 1024 * 1024) {

            http_response_code(400);

            echo json_encode([
                "success" => false,
                "message" => "Resume size must be less than 5 MB."
            ]);

            exit;
        }

        $mail->addAttachment(
            $_FILES['resume']['tmp_name'],
            $_FILES['resume']['name']
        );
    }

    // Email Content
    $mail->isHTML(true);

    $mail->Subject = 'New Career Application - Sveltoz';

    $mail->Body = "
    <h2>New Career Application</h2>

    <table cellpadding='8' cellspacing='0' border='1'>
        <tr>
            <td><b>Name</b></td>
            <td>{$name}</td>
        </tr>

        <tr>
            <td><b>Position</b></td>
            <td>{$position}</td>
        </tr>

        <tr>
            <td><b>Email</b></td>
            <td>{$email}</td>
        </tr>

        <tr>
            <td><b>Phone</b></td>
            <td>{$phone}</td>
        </tr>

        <tr>
            <td><b>Message</b></td>
            <td>{$message}</td>
        </tr>
    </table>
    ";

    $mail->AltBody =
"Name: {$name}

Position: {$position}

Email: {$email}

Phone: {$phone}

Message:

{$message}";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);
}