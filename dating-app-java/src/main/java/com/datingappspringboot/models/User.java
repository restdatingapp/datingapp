package com.datingappspringboot.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	@Id
	@Column(name = "userid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "first_name", nullable = false)
	private String firstname;
	@Column(name = "last_name", nullable = false)
	private String lastname;
	@Column(name = "email", nullable = false)
	private String email;
	@Column(name = "password", nullable = false)
	private String password;
	@Column(name = "description", nullable = true)
	private String description;
	@Column(name = "nickname", nullable = false)
	private String nickname;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "gender_id")
	private Gender gender;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "interested_gender")
	private Gender interestedgender;

	public User() {
		super();
	}

	public User(int id, String firstname, String lastname, String email, String password, String description,
			String nickname, Gender gender, Gender interestedgender) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.description = description;
		this.nickname = nickname;
		this.gender = gender;
		this.interestedgender = interestedgender;
	}

	public User(String firstname, String lastname, String email, String password, String description, String nickname,
			Gender gender, Gender interestedgender) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.description = description;
		this.password = password;
		this.nickname = nickname;
		this.gender = gender;
		this.interestedgender = interestedgender;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Gender getInterestedgender() {
		return interestedgender;
	}

	public void setInterestedgender(Gender interestedgender) {
		this.interestedgender = interestedgender;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", description=" + description + ", nickname=" + nickname + ", gender=" + gender + "interestedgender="
				+ interestedgender + "]";
	}
}
