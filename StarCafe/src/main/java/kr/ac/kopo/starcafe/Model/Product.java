package kr.ac.kopo.starcafe.Model;

import java.util.ArrayList;
import java.util.List;

public class Product {
	private int id;
	private String name;
	private int price;
	private int category; //1-음료2-푸드3-상품
	private int status; //0-판매금지 1-판매중
	
	
	public String getCategory_(){
		if(category==1) {
			return"음료";
		}
		else if(category==2) {
			return"푸드";
		}
		else if(category==3) {
			return"상품";
		}
		if(category==4) {
			return"카드";
		}
		else {
			return"알수없음";
		}
	}
	
	public String getStatus_() {
		if(status==0) {
			return"판매중지";
		}
		else if(status==1) {
			return"판매중";
		}
		else{
			return"알수없음";
		}
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getCategory() {
		return category;
	}
	public void setCategory(int category) {
		this.category = category;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	
}
