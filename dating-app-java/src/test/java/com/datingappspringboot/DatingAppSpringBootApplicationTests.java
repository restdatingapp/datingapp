package com.datingappspringboot;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.datingappspringboot.models.Gender;
import com.datingappspringboot.models.User;
import com.datingappspringboot.repository.UserRepo;
import com.datingappspringboot.services.UserService;

@SpringBootTest
public class DatingAppSpringBootApplicationTests {

	@InjectMocks
	public UserService uServ;
	
	@Mock
	public UserRepo uDao;
	
	@Before
	public void initMocks() {
		MockitoAnnotations.initMocks(this);
	}
	
	
	@Test
    public void getUser() {
		
	Gender uGender= new Gender(1, "male");
	Gender iGender= new Gender(2, "female");	
        User testUser = new User(11, "Emanuel", "PIres", "emanuelpires11@gmail.com", "password", "What a guy!", "Eman", uGender, iGender);
User user = uServ.login(testUser);


	when(uDao.findByNickname(anyString())).thenReturn(testUser);
assertEquals(user.getId(), testUser.getId());

    }
	
	
}
