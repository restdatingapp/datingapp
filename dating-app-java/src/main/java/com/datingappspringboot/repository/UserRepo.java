package com.datingappspringboot.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.hibernate.annotations.NamedQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.datingappspringboot.models.User;

@Repository
public  interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findByFirstname(String username);
	public User findByEmail(String email);
	public User findByNickname(String nickname);
	
	@Modifying
	@Query("update User u set u.firstname = :firstname, u.lastname = :lastname, u.email = :email, u.nickname = :nickname, u.password = :password where u.id = :id ")
	void updateUserSetAllForId(@Param("firstname") String firstname,@Param("lastname") String lastname, @Param("email") String email,
			@Param("nickname") String nickname,@Param("password") String password, @Param("id") int id);
	
	@Modifying
	@Query("update User u set u.photourl = :photoURL where u.id = :id")
	void updateUserSetPhotoForId(@Param("photoURL") String photoURL, @Param("id") int id); 
	
	@Query("SELECT u FROM User u WHERE u.id = :id")
	User selectUpdatedUser(@Param("id") int id);
	
	//Trying first with just id
	//later we'll add a param for the interested gender
	
	@Query("SELECT u from User u where u.id != :userid and u.gender.id = :interested")
	public List<User>getDates(@Param("userid")int userid, @Param("interested") int interested);
	
	//this one down here works to get everyone that's not the user
//	@Query("SELECT u from User u where u.id !=?1")
//	public List<User> getDates( int id);
//	
//	
//	
}
