package net.tao.assignment.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.tao.assignment.Entities.Students;

@Repository
public interface StudentsRepo extends JpaRepository<Students, Integer> {
}
