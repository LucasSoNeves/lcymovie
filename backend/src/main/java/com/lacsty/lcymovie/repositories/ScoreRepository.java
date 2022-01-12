package com.lacsty.lcymovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lacsty.lcymovie.entities.Score;
import com.lacsty.lcymovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
