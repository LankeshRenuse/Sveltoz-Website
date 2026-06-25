
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

    $data = json_decode(file_get_contents("php://input"), true);

    $name    = trim($data['user_name'] ?? '');
    $company = trim($data['company'] ?? '');
    $email   = trim($data['user_email'] ?? '');
    $phone   = trim($data['phone'] ?? '');
    $message = trim($data['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "Required fields missing"
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

    // Replace with Sveltoz Gmail App Password
    $mail->Password   = 'jrcgesglblawzefz';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender
    $mail->setFrom(
        'sveltozsolutionspvtltd@gmail.com',
        'Sveltoz Website'
    );

    // Receiver (HR / Sales Team)
    $mail->addAddress('dipalip@sveltoz.com');

    // Reply to customer
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = 'New Website Enquiry - Sveltoz';

    $mail->Body = "
    <h2>New Website Enquiry</h2>

    <table cellpadding='8' cellspacing='0' border='1'>
        <tr>
            <td><b>Name</b></td>
            <td>{$name}</td>
        </tr>

        <tr>
            <td><b>Company</b></td>
            <td>{$company}</td>
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

Company: {$company}

Email: {$email}

Phone: {$phone}

Message:

{$message}";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully"
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}

