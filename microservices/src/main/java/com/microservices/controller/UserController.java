package com.microservices.controller;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservices.service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/users")
@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor
public class UserController {

	private UserService uServ;

@PostMapping("/register")
public ResponseEntity<String> createUser(@RequestBody LinkedHashMap<String, String>user){
	User u = new User(user.get("firstName"), user.get("lastName"))
			
			return new ResponseEntity<String("Just Testing", HttpStatus.OK)>
}

}
