package com.datingappspringboot.utils;

import com.aspose.email.MailAddress;
import com.aspose.email.MailMessage;
import com.aspose.email.SmtpClient;

public class Util {

	
	public int sendEmail(String email) {
		//Create a new instance of MailMessage class
		int randomCode = (int) Math.floor(Math.random()*(100000-10000+1) + 10000);
		MailMessage message = new MailMessage();
		
		//Set subject of the message
		message.setSubject("Welcome back to Dating app");
		
		//Set HTML body
		message.setHtmlBody("<h3>Welcome back to Rest Dating app, we hope you find your love of life here!</h3><br><p><b>Rest Dating app team</b></p>");
		
		// Specify From address
		message.setFrom(new MailAddress("jonesftwingp@outlook.com"));
		
		// Add TO recipients
		message.getTo().addMailAddress(new MailAddress(email));
		
		//Create an instance of SmtpClient Class and specify your mailing host server, username, password, port
		SmtpClient client = new SmtpClient();
		client.setHost("smtp-mail.outlook.com");
		client.setUsername("jonesftwingp@outlook.com");
		client.setPassword("Unhackable9651");
		client.setPort(587);
		
		try {
			//Client.Send will send this message
			client.send(message);
			System.out.println("Message Sent!");
		} catch(Exception e)
		{
			e.printStackTrace();
		}
		System.out.println(randomCode);
		return randomCode;
	}
}
