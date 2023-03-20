package kr.ac.kopo.starcafe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.ac.kopo.starcafe.Model.Customer;
import kr.ac.kopo.starcafe.Pager.Pager;
import kr.ac.kopo.starcafe.Service.CustomerService;

@Controller
@RequestMapping("/customer")
public class CustomerController {

	final String path="customer/";
	
	@Autowired
	CustomerService service;
	
	@GetMapping("/list")
	public String list(Pager pager,Model model) {
		List<Customer> list =service.list(pager);
		model.addAttribute("list", list);
		
		return path+"list";
	}
	
	@GetMapping("/add")
	public String add() {
		return path+"add";
	}
	@PostMapping("/add")
	public String add(Customer item ) {
		service.add(item);
		return "redirect:list";
	}
	
	@GetMapping("/update/{id}")
	public String update(@PathVariable int id , Model model) {
		Customer item=service.item(id);
		model.addAttribute("item",item);
		return path+"update";
	}
	
	@PostMapping("/update/{id}")
	public String update(Customer item) {
		service.update(item);
		return "redirect:../list";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		service.delete(id);
		return "redirect:../list";
	}
}
