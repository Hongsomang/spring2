package kr.ac.kopo.starcafe.Dao;

import java.util.List;

import kr.ac.kopo.starcafe.Model.Customer;
import kr.ac.kopo.starcafe.Pager.Pager;

public interface CustomerDao {

	List<Customer> list(Pager pager);

	void add(Customer item);

	Customer item(int id);

	void update(Customer item);

	void delete(int id);

}
