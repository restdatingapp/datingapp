package com.datingappspringboot.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "gender")
public class Gender {

	@Id
	@Column(name = "gender_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "gender")
	private String gender;

	@OneToMany(mappedBy = "users")
	private User user;

	public Gender(String gender) {
		super();

		this.gender = gender;
	}

	public Gender(int id, String gender) {
		super();
		this.id = id;
		this.gender = gender;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

}