package com.anuradha.Online.Food.Ordering.repository;

import com.anuradha.Online.Food.Ordering.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
