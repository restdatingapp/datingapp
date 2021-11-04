package com.datingapp.models;

public class User {

	private int id;
	private String firstname;
	private String lastname;
	private String email;
	private String description;
	private int genderid;
	private String nickname;
	
	
	
	public User(int id, String firstname, String lastname, String email, String description, int genderid,
			String nickname) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.description = description;
		this.genderid = genderid;
		this.nickname = nickname;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", description=" + description + ", genderid=" + genderid + ", nickname=" + nickname + "]";
	}
	
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getGenderid() {
		return genderid;
	}
	public void setGenderid(int genderid) {
		this.genderid = genderid;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}
