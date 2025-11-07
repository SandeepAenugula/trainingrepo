package AllPages;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import BaseP5.BaseC5;

public class LoginPageC5 extends BaseC5{
	
	public static By EmailId=By.id("email");
	public static By EmailPassword=By.name("pass");
	public static By ButtonLogin=By.name("login");
	public static SoftAssert so= new SoftAssert(); 
	public static By Errormessage=By.xpath("//a[text()='Find your account and log in.']");
	
	public static void EnterEmailId(String EmailInput) 
	{
	    
		driver.findElement(EmailId).sendKeys(EmailInput);
	}
	
	public static void EnterPassword(String PasswordInput) {
		driver.findElement(EmailPassword).sendKeys(PasswordInput);
	}
	
	public static void ClickLogin() {
		driver.findElement(ButtonLogin).click();

    }
	public static void	 Verify_title(String ExpectedTitle) {
		
	
		String ActualTitle=driver.getTitle();
		so.assertEquals(ActualTitle, ExpectedTitle, "actual title and expected title not matching");
	}    
		/*
		if (ActualTitle.equals(ExpectedTitle)) {
			System.out.println("Title is matching");
			return true;
		}
			else
			{
				System.out.println("Title is not matching");
				return false;
			}
		}*/
      public static boolean Verify_errorMessage(String Expectederrormessage)
      {
    	  String Actualerrormessage=driver.findElement(Errormessage).getText() ;    
    		Assert.assertEquals(Actualerrormessage,Expectederrormessage,"actual error message and expected error messaage is notmatching");
    		return true;
      }
}
	

