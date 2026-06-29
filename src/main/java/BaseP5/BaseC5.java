package BaseP5;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseC5 {
	
	public static String browser="Chrome";
	public static String url="https://WWW.fb.com";
	public static WebDriver driver; 
	
	
	public static void browserIntialization()
	{
		switch(browser)
		{
		case "Chrome":
			WebDriverManager.chromedriver().setup();
			driver=new ChromeDriver();
			try 
			{
			if (url.length()==0)
			{
				throw new URLexception("URL is incorrect");
				
			}
			driver.get(url);
			break;
			}
			catch(URLexception E)
			{
				driver.get("https://fb.com");
				break;
			}
		case "IE":
			
			WebDriverManager.iedriver().setup();
			driver= new InternetExplorerDriver();
			break;
		
		}
		
	}
	public static void browser_close()
	{
		driver.close();
	}

}
