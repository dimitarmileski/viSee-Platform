package com.djamware.react.repositories;


import com.djamware.react.models.Point;
import org.springframework.data.repository.CrudRepository;

public interface PointRepository extends CrudRepository<Point, String> {
    @Override
    void delete(Point deleted);
}
