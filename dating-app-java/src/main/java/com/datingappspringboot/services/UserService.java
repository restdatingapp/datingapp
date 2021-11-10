package com.datingappspringboot.services;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.NamedQuery;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.datingappspringboot.models.Gender;

import com.datingappspringboot.exceptions.UserDoesNotExistException;

import com.datingappspringboot.models.User;
import com.datingappspringboot.repository.GenderRepo;
import com.datingappspringboot.repository.UserRepo;

import net.bytebuddy.implementation.attribute.FieldAttributeAppender;

@Service
public class UserService {

	private UserRepo uDao;
	private GenderRepo rDao;

	@Autowired
	public UserService(UserRepo u, GenderRepo r) {
		this.uDao = u;
		this.rDao = r;
	}

	public User createUser(User f) {
		try {

			uDao.save(f);
			return f;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public List<User> getAllUser() {
		try {
			return uDao.findAll();
		} catch (Exception e) {
			return new ArrayList<User>();
		}
	}
	
	
	
	//Attempting to give back all users except for the 
	//the current user, first later will implement
	//a list of users that matches interested in genders

	public List<User>getDates(User u){
		int userId = u.getId();
		int interestedgender = u.getInterestedgender().getId();
		System.out.println("This user is interested in: " +interestedgender);
		System.out.println("This user's Id is: " + userId);
	return  uDao.getDates(userId, interestedgender);
		
		
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
