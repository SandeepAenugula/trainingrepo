package GenericMethod;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import BaseP5.BaseC5;

public class GenericMethod 
{
public static void Select_ByIndex(int index,WebElement ele) 
{
	Select obj = new Select(ele);
	obj.selectByIndex(index);
}
	public static String captureScreenShot() throws IOException 
	{
		
		TakesScreenshot tc=(TakesScreenshot)BaseC5.driver;
		//we are Takescreenshot as interface and converting driver as TakesScreenshot.
			
		File scrfile=tc.getScreenshotAs(OutputType.FILE);
			
		File destfile=new File("D://"+"ScreenCaptue"+System.currentTimeMillis()+".png");
		
		FileUtils.copyFile(scrfile, destfile);
			
		return destfile.getAbsolutePath();
	}	
	
}

