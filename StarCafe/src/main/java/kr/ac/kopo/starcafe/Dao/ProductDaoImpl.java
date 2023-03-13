package kr.ac.kopo.starcafe.Dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.kopo.starcafe.Model.Product;
import kr.ac.kopo.starcafe.Pager.Pager;

@Repository
public class ProductDaoImpl implements ProductDao {

	@Autowired
	SqlSession sql;

	@Override
	public List<Product> list(Pager pager) {
		// TODO Auto-generated method stub
		return sql.selectList("product.list",pager);
	}

	@Override
	public void add(Product item) {
		// TODO Auto-generated method stub
		sql.insert("product.add",item);
	}

	@Override
	public Product item(int id) {
		// TODO Auto-generated method stub
		return sql.selectOne("product.item",id);
	}

	@Override
	public void update(Product item) {
		// TODO Auto-generated method stub
		sql.update("product.update",item);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		sql.delete("product.delete",id);
	}

	@Override
	public int total(Pager pager) {
		// TODO Auto-generated method stub
		return sql.selectOne("product.total", pager);
	}
	
	
}
