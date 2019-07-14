package com.techworm.app.serviceinterface;

import java.util.List;

import com.techworm.app.model.Employee;

public interface EmployeeInterface {
	public Employee saveEmployee(Employee employee);
	public Employee updateEmployee(Employee employee);
	public  void deleteEmployee(int id);
	public List<Employee> getAllEmployee();
}
