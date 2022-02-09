package com.jayamaha.surge;

import static org.assertj.core.api.Assertions.assertThat;

import com.jayamaha.surge.model.User;
import com.jayamaha.surge.repository.userRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



@DataJpaTest
public class RegisterRepoTest {

    @Autowired
    private userRepository underTest;

    @Test
    void CheckValueselectExistsUserName() {

        String UserName="username";

        User job = new User( 1,"Nadun Jaymaha","nadunjayamaha@gmail.com",UserName,"jayamaha");

        underTest.save(job);

        boolean exists = underTest.selectExistsUserName(UserName);

        assertThat(exists).isTrue();

    }




}
