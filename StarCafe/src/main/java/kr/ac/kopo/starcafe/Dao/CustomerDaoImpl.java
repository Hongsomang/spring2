package kr.ac.kopo.starcafe.Dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.starcafe.Model.Customer;
import kr.ac.kopo.starcafe.Pager.Pager;

@Repository
public class CustomerDaoImpl implements CustomerDao {

	@Autowired
	SqlSession sql;
	
	@Override
	public List<Customer> list(Pager pager) {
		// TODO Auto-generated method stub
		return sql.selectList("customer.list",pager);
	}

	@Override
	public void add(Customer item) {
		// TODO Auto-generated method stub
		sql.insert("customer.add",item);
	}

	@Override
	public Customer item(int id) {
		// TODO Auto-generated method stub
		return sql.selectOne("customer.item",id);
	}

	@Override
	public void update(Customer item) {
		// TODO Auto-generated method stub
		sql.update("customer.update", item);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		sql.delete("customer.delete",id);
	}

}
