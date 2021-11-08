package com.datingappspringboot.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datingappspringboot.models.Gender;
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

}
