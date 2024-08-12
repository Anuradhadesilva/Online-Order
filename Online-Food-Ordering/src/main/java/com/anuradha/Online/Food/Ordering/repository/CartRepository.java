package com.anuradha.Online.Food.Ordering.repository;

import com.anuradha.Online.Food.Ordering.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    public Cart findByCustomerId(Long userId);
}
