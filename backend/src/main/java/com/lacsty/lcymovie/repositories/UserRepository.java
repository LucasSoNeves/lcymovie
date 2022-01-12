package com.lacsty.lcymovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lacsty.lcymovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
}
