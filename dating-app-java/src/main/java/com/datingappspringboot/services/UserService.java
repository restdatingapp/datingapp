	package com.datingappspringboot.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datingappspringboot.exceptions.UserDoesNotExistException;
import com.datingappspringboot.models.User;
import com.datingappspringboot.repository.UserRepo;

@Service
public class UserService {
	
	

	private UserRepo uDao;
	
	@Autowired
	public UserService(UserRepo u) {
		this.uDao = u;
	}
	
	public User createUser(User f) {
		try {
			uDao.save(f);
			return f;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public List<User> getAllUser(){
		try {
			return uDao.findAll();
		} catch(Exception e) {
			return new ArrayList<User>();
		}
	}
	
	public User getByFirstName(String first_name) {
		return uDao.findByFirstname(first_name);
	}
	
	
	public void deleteUser(User f) {
		uDao.delete(f);
	}
	
	public User updateFood(User f) {
		return uDao.save(f);
	}
	
	public User getUserEmail(String email) {
		return uDao.findByEmail(email);
	}
	
	public User login(User u) throws UserDoesNotExistException {
		User newUser = new User();
		newUser = uDao.findByNickname(u.getNickname());
		if(newUser == null) {
			throw new UserDoesNotExistException();
		} else {
			System.out.println("You are signed in " + newUser.getNickname());
			return newUser;
		}
	}
	

}
