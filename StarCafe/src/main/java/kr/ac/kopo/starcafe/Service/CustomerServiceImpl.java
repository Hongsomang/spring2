package kr.ac.kopo.starcafe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.kopo.starcafe.Dao.CustomerDao;
import kr.ac.kopo.starcafe.Model.Customer;
import kr.ac.kopo.starcafe.Pager.Pager;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerDao dao;
	
	@Override
	public List<Customer> list(Pager pager) {
		// TODO Auto-generated method stub
		return dao.list(pager);
	}

	@Override
	public void add(Customer item) {
		// TODO Auto-generated method stub
		dao.add(item);
	}

	@Override
	public Customer item(int id) {
		// TODO Auto-generated method stub
		return dao.item(id);
	}

	@Override
	public void update(Customer item) {
		// TODO Auto-generated method stub
		dao.update(item);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	

}
