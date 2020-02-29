package com.djamware.react.controllers;


import com.djamware.react.models.Point;
import com.djamware.react.repositories.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
public class PointController {

    @Autowired
    PointRepository pointRepository;

    @RequestMapping(method=RequestMethod.GET, value="/points")
    public Iterable<Point> point() {
        return pointRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/points")
    public Point save(@RequestBody Point point) {
        pointRepository.save(point);

        return point;
    }

    @RequestMapping(method=RequestMethod.GET, value="/points/{id}")
    public Optional<Point> show(@PathVariable String id) {
        return pointRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/points/{id}")
    public Point update(@PathVariable String id, @RequestBody Point point) {
        Optional<Point> optpoint = pointRepository.findById(id);
        Point p = optpoint.get();
        if(point.getName() != null)
            p.setName(point.getName());
        if(point.getAddress() != null)
            p.setAddress(point.getAddress());
        if(point.getHubServerURL() != null)
            p.setHubServerURL(point.getHubServerURL());
        if(point.getPhone() != null)
            p.setPhone(point.getPhone());

        pointRepository.save(p);
        return p;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/points/{id}")
    public String delete(@PathVariable String id) {
        Optional<Point> optpoint = pointRepository.findById(id);
        Point point = optpoint.get();
        pointRepository.delete(point);

        return "";
    }
}
