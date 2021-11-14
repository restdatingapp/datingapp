package com.datingappspringboot.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@Column(name = "photo_url")
	private String photourl;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "gender_id")
	private Gender gender;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "interested_gender")
	private Gender interestedgender;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "likes", joinColumns = {

			@JoinColumn(name = "likeeid", referencedColumnName = "userid", nullable = false) }, inverseJoinColumns = {

					@JoinColumn(name = "likedid", referencedColumnName = "userid", nullable = false) })

	@JsonIgnore
	private Set<User> likeelist = new HashSet<User>();

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "likes", joinColumns = {
			@JoinColumn(name = "likedid", referencedColumnName = "userid", nullable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "likeeid", referencedColumnName = "userid", nullable = false) })
	@JsonIgnore
	private Set<User> likedlist = new HashSet<User>();
	
	
	
	

	public User() {
		super();
	}
	
	public User(int id, String firstname, String lastname, String email, String password, String description,
			String nickname, String photourl, Gender gender, Gender interestedgender) {

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
		this.photourl = photourl;
	}

	public User(int id, String firstname, String lastname, String email, String password, String description,
			String nickname, Gender gender, Gender interestedgender, Set<User> l1, Set<User> l2) {

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
		this.likeelist = l1;
		this.likedlist = l2;
	}

	public User(String firstname, String lastname, String email, String password, String description, String nickname,
			Gender gender, Gender interestedgender, Set<User> l1, Set<User> l2) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.description = description;
		this.password = password;
		this.nickname = nickname;
		this.gender = gender;
		this.interestedgender = interestedgender;
		this.likeelist = l1;
		this.likedlist = l2;
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

	public Set<User> getLikeelist() {
		return likeelist;
	}

	public void setLikeelist(Set<User> likeelist) {
		this.likeelist = likeelist;
	}

	public Set<User> getLikedlist() {
		return likedlist;
	}

	public void setLikedlist(Set<User> likedlist) {
		this.likedlist = likedlist;
	}

	
	public String getPhotourl() {
		return photourl;
	}

	public void setPhotourl(String photourl) {
		this.photourl = photourl;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + ", description=" + description + ", nickname=" + nickname + ", photourl="
				+ photourl + ", gender=" + gender + ", interestedgender=" + interestedgender + ", likeelist="
				+ likeelist + ", likedlist=" + likedlist + "]";
	}
}
