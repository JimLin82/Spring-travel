package SpringSql.model;

import java.util.List;

public class Page<T> {
		
	private Integer total;
	private List<T> results;
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}
	public List<T> getResults() {
		return results;
	}
	public void setResults(List<T> results) {
		this.results = results;
	}

	
	

	
	
 }
