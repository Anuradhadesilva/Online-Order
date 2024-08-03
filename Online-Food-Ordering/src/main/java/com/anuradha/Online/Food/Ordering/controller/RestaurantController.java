package com.anuradha.Online.Food.Ordering.controller;

import com.anuradha.Online.Food.Ordering.dto.RestaurantDto;
import com.anuradha.Online.Food.Ordering.model.Restaurant;
import com.anuradha.Online.Food.Ordering.model.User;
import com.anuradha.Online.Food.Ordering.repository.RestaurantRepository;
import com.anuradha.Online.Food.Ordering.service.RestaurantService;
import com.anuradha.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurants(
            @RequestHeader("Authorization") String jwt,
            @RequestParam String keyword
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Restaurant> restaurant = restaurantService.searchRestaurant(keyword);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping( )
    public ResponseEntity<List<Restaurant>> getAllRestaurants(
            @RequestHeader("Authorization") String jwt

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Restaurant> restaurant = restaurantService.getAllRestaurant();
        return new ResponseEntity<>(restaurant, HttpStatus.OK   );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addFavorite(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        RestaurantDto restaurant = restaurantService.addFavourites(id,user);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

}
