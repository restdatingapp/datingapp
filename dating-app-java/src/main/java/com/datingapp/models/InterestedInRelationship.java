package com.datingapp.models;

public class InterestedInRelationship {
	
	private int id;
	private int userid;
	private String relationshiptype;
	
	
	
	
	
	public InterestedInRelationship(int id, int userid, String relationshiptype) {
		super();
		this.id = id;
		this.userid = userid;
		this.relationshiptype = relationshiptype;
	}
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getRelationshiptype() {
		return relationshiptype;
	}
	public void setRelationshiptype(String relationshiptype) {
		this.relationshiptype = relationshiptype;
	}
	

}
