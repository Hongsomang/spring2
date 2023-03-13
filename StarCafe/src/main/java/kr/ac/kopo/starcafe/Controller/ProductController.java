package kr.ac.kopo.starcafe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.Pager;
import kr.ac.kopo.starcafe.Pager.ProductPager;
import kr.ac.kopo.starcafe.Service.ProductService;

@Controller
@RequestMapping("/product")
public class ProductController {

	final String path="product/";
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/list")
	public String list(Model model, @ModelAttribute("pager") ProductPager pager) {//페이저라는 이름으로 모델에 집어넣음
		List<Product> list=productService.list(pager);
		model.addAttribute("list",list);
		return path+"list";
	}
	
	@GetMapping("/add")
	public String add() {
		
		return path+"add";
	}
	@PostMapping("/add")
	public String add(Product item) {
		productService.add(item);
		return "redirect:list";
	}
	@GetMapping("/update/{id}")
	public String update(@PathVariable int id, Model model) {
		Product item=productService.item(id);
		model.addAttribute("item",item);
		
		return path+"update";
	}
	@PostMapping("/update/{id}")
	public String update(@PathVariable int id, Product item) {
		item.setId(id);
		productService.update(item);
		return "redirect:../list";
	}
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		productService.delete(id);
		return "redirect:../list";
	}
	@GetMapping("/dummy")
	public String dummy(Model model , Pager pager) {
		productService.dummy();
		return "redirect:list";
	}
	
	@GetMapping("init")
	public String init(Model model ,Pager pager) {
		productService.init();
		return "redirect:list";
	}
}