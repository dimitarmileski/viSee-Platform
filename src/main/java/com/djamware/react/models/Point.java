package com.djamware.react.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "points")
public class Point {
    @Id
    String id;
    String name;
    String address;
    String hubServerURL;
    String phone;

    public Point() {
    }

    public Point(String name, String address, String hubServerURL, String phone) {
        this.name = name;
        this.address = address;
        this.hubServerURL = hubServerURL;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHubServerURL() {
        return hubServerURL;
    }

    public void setHubServerURL(String hubServerURL) {
        this.hubServerURL = hubServerURL;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
