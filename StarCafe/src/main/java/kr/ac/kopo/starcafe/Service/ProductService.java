package kr.ac.kopo.starcafe.Service;

import java.util.List;

import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.Pager;

public interface ProductService {

	List<Product> list(Pager pager);

	void add(Product item);

	Product item(int id);

	void update(Product item);

	void delete(int id);

	void dummy();

	void init();

}