package kr.ac.kopo.starcafe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.kopo.starcafe.Dao.ProductDao;
import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.Pager;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;
	
	@Override
	public List<Product> list(Pager pager) {
		// TODO Auto-generated method stub
		int total=productDao.total(pager);
		pager.setTotal(total);
		return productDao.list(pager);
	}

	@Override
	public void add(Product item) {
		// TODO Auto-generated method stub
		productDao.add(item);
	}

	@Override
	public Product item(int id) {
		// TODO Auto-generated method stub
		return productDao.item(id);
	}

	@Override
	public void update(Product item) {
		// TODO Auto-generated method stub
		productDao.update(item);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		productDao.delete(id);
	}

	@Override
	public void dummy() {
		// TODO Auto-generated method stub
		for(int index=0;index<100;index++) {
			Product item=new Product();
			item.setName("제품명"+index);
			item.setPrice(index+100);
			item.setCategory(1);
			
			productDao.add(item);
		}
	}

	@Override
	public void init() {
		while(true) {
			List<Product> list= productDao.list(new Pager());
			if(list.size()<1)
				break;
			
			for(Product item: list) {
				productDao.delete(item.getId());
			}
		}
		
	}

}
