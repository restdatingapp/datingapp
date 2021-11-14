package com.datingappspringboot.controller;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datingappspringboot.exceptions.UserDoesNotExistException;
import com.datingappspringboot.models.Gender;
import com.datingappspringboot.models.User;
import com.datingappspringboot.services.UserService;
import com.datingappspringboot.utils.Util;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*")
public class UserController {

	private UserService uServ;

	@Autowired
	public UserController(UserService u) {
		this.uServ = u;
	}

	@GetMapping(value = "/get")
	public List<User> getAll() {
		System.out.println("In the /get method");
		return uServ.getAllUser();
	}

	
	//Lets see if we can get these folks some dates
	@PostMapping(value="/dashboard")
	public List<User>getDates(@RequestBody User u){
		System.out.println(u);
		System.out.println("In dashboard controller");
		try {
		return uServ.getDates(u);
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println("We have an error");
			return null;
		}
	}
	
	
	
	@PostMapping(value = "/login")
	public User getUserEmail(@RequestBody User u) {
		System.out.println("I'm getting your request!");
		System.out.println(u.getNickname());
		System.out.println(u.getPassword());
		try {
			User user =  uServ.login(u);
			Util util= new Util();
			util.sendEmail(user.getEmail());
		return  user;
		} catch(UserDoesNotExistException e) {
			e.printStackTrace();
			return null;			
		}
		/*
		 * System.out.println("email:  "+ u.getEmail()); return
		 * uServ.getUserEmail(u.getEmail());
		 */
	}

	/*
	 * @GetMapping(value = "/login/{email}") public User
	 * getUserEmail(@PathVariable("email") String email) {
	 * 
	 * return uServ.getUserEmail(email); }
	 */

	/*
	 * @GetMapping(value="/{firstname}") public User
	 * getFoodByName(@PathVariable("firstname") String firstname) { return
	 * uServ.getByFirstName(firstname); }
	 */

	@PostMapping(value = "/create")
	public User createUser(@RequestBody User u) {
		System.out.println(u.getPhotourl());
		return uServ.createUser(u);
	}

	
	@PostMapping(value = "/addlike")
	public ResponseEntity<User> createUser(@RequestBody LinkedHashMap<String, String> u) {
	
		System.out.println(u);
		
		   
		User user = uServ.getUserById(Integer.parseInt(u.get("userid")));
		User user2 = uServ.getUserById(Integer.parseInt(u.get("likeid")));
		
	 boolean b = user.getLikeelist().add(user2);
	 
		 
		 return new ResponseEntity<User>(uServ.updateUser(user), HttpStatus.ACCEPTED);
	}
	
	@PostMapping(value = "/update")
	public User updateUser(@RequestBody User u) {
		return uServ.updateUser(u);
	}
	
	@PostMapping(value = "/updatephoto")
	public User updatePhoto(@RequestBody User u) {
		System.out.println(u);
		return uServ.updatePhoto(u);
	}

}
