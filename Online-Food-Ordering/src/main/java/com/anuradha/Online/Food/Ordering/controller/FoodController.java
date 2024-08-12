package com.anuradha.Online.Food.Ordering.controller;

import com.anuradha.Online.Food.Ordering.model.Food;
import com.anuradha.Online.Food.Ordering.model.Restaurant;
import com.anuradha.Online.Food.Ordering.model.User;
import com.anuradha.Online.Food.Ordering.request.CreateFoodRequest;
import com.anuradha.Online.Food.Ordering.service.FoodService;
import com.anuradha.Online.Food.Ordering.service.RestaurantService;
import com.anuradha.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping ("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,
                                           @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<Food> food = foodService.searchFood(name);
        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @GetMapping ("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(
            @RequestParam (required = false) boolean vegetarian,
            @RequestParam (required = false) boolean seasonal,
            @RequestParam (required = false) boolean   nonVeg,
            @RequestParam( required = false) String food_category,
            @PathVariable  Long restaurantId,
            @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        List<Food> foods = foodService.getRestaurantFoods(restaurantId,vegetarian,seasonal,nonVeg,food_category);
        return new ResponseEntity<>(foods, HttpStatus.OK );
    }
}
