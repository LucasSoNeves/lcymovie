package com.lacsty.lcymovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lacsty.lcymovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
