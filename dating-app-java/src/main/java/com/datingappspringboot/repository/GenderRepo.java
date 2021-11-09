package com.datingappspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.datingappspringboot.models.Gender;
import com.datingappspringboot.models.User;

public interface GenderRepo  extends JpaRepository<Gender, Integer> {
	
	

}
