package net.tao.assignment.Services;

import net.tao.assignment.Entities.Students;
import net.tao.assignment.Repos.StudentsRepo;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StudentsService {

    private StudentsRepo repo;

    public StudentsService(StudentsRepo repo) {
        this.repo = repo;
    }

    public List<Students> getAllStudents() {
        return repo.findAll();
    }

    public Students getStudent(int id) {
        return repo.findById(id).orElseThrow();
    }

    public void addStudent(Students students) {
        repo.save(students);
    }

    public Students updateStudemts(int id, Students student) {
        // Retrieve the entity by its id
        Optional<Students> studentById = repo.findById(id);
        if (studentById.isPresent()) {
            Students newStudent = studentById.get();

            // Update the properties of the existing entity with the values from the updated
            // entity
            newStudent.setAddress(student.getAddress());
            newStudent.setDob(student.getDob());

            // Save the updated entity back to the database
            return repo.save(newStudent);
        } else {
            // Entity with the given id not found
            throw new EntityNotFoundException("Entity with id " + id + " not found");
        }
    }

    public void deleteStudents(int id) {
        Optional<Students> studentById = repo.findById(id);
        repo.delete(studentById.get());
    }
}
