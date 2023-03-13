package kr.ac.kopo.starcafe.Dao;

import java.util.List;

import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.Pager;

public interface ProductDao {

	List<Product> list(Pager pager);

	void add(Product item);

	Product item(int id);

	void update(Product item);

	void delete(int id);

	int total(Pager pager);

}
