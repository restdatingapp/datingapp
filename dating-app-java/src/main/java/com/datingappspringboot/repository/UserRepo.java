package com.datingappspringboot.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.datingappspringboot.models.User;

@Repository
public  interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findByFirstname(String username);
	public User findByEmail(String email);

}
