package com.techworm.app.daoimpl;

import org.springframework.data.repository.CrudRepository;

import com.techworm.app.model.Employee;

public interface EmployeeRepo extends CrudRepository<Employee, Integer>{
	
	public Employee findById(int id);
	
}
