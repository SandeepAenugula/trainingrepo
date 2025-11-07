package RunnerP5;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;



	@CucumberOptions
	(features = {"featuresP5/loginp5.feature"},
	glue =     {"stepdefinitionP5"},
	plugin =    { "pretty","html:target/cucumber-reports",
	"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
	"rerun:target/failedrerun.txt"},
		tags="@reg",               	
	 monochrome = true )

	public class RunnerC5 extends AbstractTestNGCucumberTests
	{

	}

