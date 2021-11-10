package com.microservices.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservices.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{
public List<User> findAll();
public User findByUsername(String username);
	
}
