package com.anuradha.Online.Food.Ordering.service;

import com.anuradha.Online.Food.Ordering.model.Order;
import com.anuradha.Online.Food.Ordering.model.User;
import com.anuradha.Online.Food.Ordering.request.OrderRequest;

import java.util.List;

public interface OrderService {
    public Order createOrder(OrderRequest order, User user);
    public Order updateOrder(Long orderId, String orderStatus) throws Exception;
    public Void cancelOrder(Long orderId) throws Exception;
    public List<Order> getUserOrders(Long userId)throws Exception;
    public List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus)throws Exception;
}
