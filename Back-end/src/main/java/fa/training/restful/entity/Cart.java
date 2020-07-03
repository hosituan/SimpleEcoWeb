//package fa.training.restful.entity;
//
//import javax.persistence.Entity;
//
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import fa.training.restful.entity.Product;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity @Table(name="Cart") 
//public class Cart {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO) 
//	private long id;
//	private String username;
//	private List<Product> listProduct = new ArrayList<>();
//	public long getId() { return id;
//	}
//	public void setId(long id) {
//	this.id = id;
//	}
//	public List<Product> getList() { return listProduct;
//	
//	}
//	public void setList(List<Product> listProduct) { 
//		this.listProduct = listProduct;
//	} 
//
//}