package com.jayamaha.surge.repository;

import com.jayamaha.surge.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<User,Integer> {

    @Query("" +
            "SELECT CASE WHEN COUNT(us) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM User us " +
            "WHERE us.username = ?1"
    )
    Boolean selectExistsUserName(String username);


}
