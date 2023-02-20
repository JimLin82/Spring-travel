package SpringSql.dao;

import java.util.List;

import org.springframework.data.domain.Page;

import SpringSql.dto.TravelQueryParams;
import SpringSql.model.Travel;
import SpringSql.model.jpaTravel;

public interface TravelDao {
		

	Travel getTravelById(Integer travelId);
	
	List<Travel> getTravelByTown(TravelQueryParams travelQueryParams);

	List<Travel> getTravelAll();
	
	Integer countTravel(TravelQueryParams travelQueryParams);
	
}
