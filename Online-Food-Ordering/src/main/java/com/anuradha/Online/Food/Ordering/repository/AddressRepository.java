package com.anuradha.Online.Food.Ordering.repository;

import com.anuradha.Online.Food.Ordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
