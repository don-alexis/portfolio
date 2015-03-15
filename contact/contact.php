<?php


// make a change

// initialize variables
$uname = '';
$uemail = '';
$umessage = '';
$email_message = '';

if (isset( $_POST['uname'] )) // if form is submitted
{
	// get posted values
	$uname = $_POST['uname'];
	$uemail = $_POST['uemail'];	
	$umessage = $_POST['umessage'];


	// compose email message
	$email_message = '
		<p>Hello Client</p>

		<p>You have a message from <a href="mailto:' . $uemail . '">' . $uname . '</a></p>

		<p>Here is that message:</p>

		<p>' . $umessage . '</p>

		<p>
			Rock on,<br>
			Your Web Team
		</p>
	';

	// Adding Headers
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= 'From: <don.alexis.martirez@gmail.com>' . "\r\n";
	$headers .= 'Cc: dmartirez@student.mtsierra.edu' . "\r\n";

	// sending email
	$recip = 'don.alexis.martirez@gmail.com';
	$subject = 'This is an email from your website';

	$success = mail($recip, $subject, $email_message, $headers);

	if ($success == true)
	{
		$email_message = 'Great Work! Email sent from our servers. Hope it gets there.';
	}
	else
	{
		$email_message = 'Our servers are lame. We could not even send your message.';
	}


}


?>


<div id="formHolder">
					<?php echo $email_message; ?>

					<form class="myForm" action="contact.php" method="post">
						<div class="row">
							<label>Name: </label>
							<input type="text" name="uname" value="<?php echo $uname; ?>">
						</div>
						<div class="row">
							<label>Email: </label>
							<input type="text" name="uemail" value="<?php echo $uemail; ?>">
						</div>
						<div class="row">
							<label>Message: </label>
							<textarea name="umessage"><?php echo $umessage; ?></textarea>
						</div>
						<div class="row">
							<input type="submit" value="HOLLER">
						</div>
					</form>
</div>