package kr.ac.kopo.starcafe.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.ProductPager;
import kr.ac.kopo.starcafe.Service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductRestController {

	@Autowired
	ProductService service;
	
	@GetMapping
	public Map<String,Object> list( ProductPager pager){
		HashMap<String, Object>map=new HashMap<String, Object>();
		List<Product>list=service.list(pager);
		map.put("list", list);
		map.put("pager", pager);
		
		return map;
	}
}
