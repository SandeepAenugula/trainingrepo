package stepdefinitionP5;

import java.io.IOException;

import com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter;

import AllPages.LoginPageC5;
import GenericMethod.GenericMethod;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinitionC5 extends LoginPageC5{
	
	@Given ("user should be in login page")
	public static void  user_should_be_in_login_page() throws IOException
	{
		browserIntialization();
		ExtentCucumberAdapter.addTestStepLog("Browser initialized sucessfully");
		ExtentCucumberAdapter.addTestStepScreenCaptureFromPath(GenericMethod.captureScreenShot(), "Browser screenprint");
		Verify_title("Facebook – log in or sign up");
		ExtentCucumberAdapter.addTestStepLog("Title is matched");
		ExtentCucumberAdapter.addTestStepScreenCaptureFromPath(GenericMethod.captureScreenShot(), "title screenprint");
	}
	@When("user enters valid username{string}")
	public static void user_enters_valid_username(String username) throws IOException
	{
		EnterEmailId(username);
		ExtentCucumberAdapter.addTestStepLog("User able to enter username sucessfully"+username);
		ExtentCucumberAdapter.addTestStepScreenCaptureFromPath(GenericMethod.captureScreenShot());
		
		
	}
	@And("user enters  valid password{string}")
	public static void user_enters_valid_password(String password) throws IOException
	{
		EnterPassword(password);
		ExtentCucumberAdapter.addTestStepLog("User able to enter password sucessfully"+password);
		ExtentCucumberAdapter.addTestStepScreenCaptureFromPath(GenericMethod.captureScreenShot());
	}
	@Then ("click on login button")
	public static void click_on_login_button()
	{
		ClickLogin();
	}
	@When("^user enters valid multipleusernames\"([^\"]*)\"$")
	public static void user_enters_valid_multipleusernames(String username)
	{
		EnterEmailId(username);
	}
    @And("^user enters valid multiplepasswords\"([^\"]*)\"$")
    public static void user_enters_valid_multiplepasswords(String password)
    {
    	EnterPassword(password);
    }
    @Then("verify the error messsage")
    public static void verify_the_error_messsage() throws IOException
    {
    	if (Verify_errorMessage("Find your account and log in.")==true)
    	
    	
    	{
    		System.out.println("error message is matching");
    	}
    	else
    	{
    		System.out.println("error message is not matching");
    	}
    	ExtentCucumberAdapter.addTestStepLog("Error is generated successfully");
    	ExtentCucumberAdapter.addTestStepScreenCaptureFromPath(GenericMethod.captureScreenShot());
    }
}
