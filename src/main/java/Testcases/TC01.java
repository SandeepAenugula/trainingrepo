package Testcases;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.asserts.SoftAssert;

import AllPages.LoginPageC5;


public class TC01 extends LoginPageC5 {
	
	
	public static void main(String[] args) throws IOException {
	
		
		String Emailid="";
		String Password="";
		String Path ="D:\\test data.xlsx";
		
		FileInputStream fis= new FileInputStream(Path);
		XSSFWorkbook workbook = new XSSFWorkbook(fis);
		XSSFSheet sheet= workbook.getSheet("test data");
		
		int rows=sheet.getLastRowNum();
		for(int i=1;i<=rows;i++) {
			XSSFRow row	=sheet.getRow(i);
			Emailid= row.getCell(0).getStringCellValue();
			Password=row.getCell(1).getStringCellValue();
			browserIntialization();
			Verify_title("Facebook – log in or sign up");
			EnterEmailId(Emailid);
			EnterPassword(Password);
			ClickLogin();
			int cellCount=sheet.getRow(i).getLastCellNum();
			XSSFCell cell =sheet.getRow(i).createCell(cellCount);
			if (Verify_errorMessage("Find your account and log in.")==true)
			{
				cell.setCellValue("Pass");
			}
			else
			{
				cell.setCellValue("Fail");
			}
			fis.close();
			FileOutputStream fos = new FileOutputStream(Path);
			workbook.write(fos);
			fos.close();
			
			
			
			
			browser_close();
			so.assertAll();
			
			
		}
		
		
		
		
	}

}
