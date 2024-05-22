package net.tao.assignment.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.tao.assignment.Entities.Students;
import net.tao.assignment.Services.StudentsService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/student")
public class StudentsController {
    private StudentsService studentService;

    public StudentsController(StudentsService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/list")
    public List<Students> getStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/:id")
    public Students getStudentById(@RequestParam int id) {
        return studentService.getStudent(id);
    }

    @PostMapping("/add")
    public String postStudent(@RequestBody Students students) {
        studentService.addStudent(students);
        return "Student sucessfully added";
    }

    @PatchMapping("/:id")
    public Students patchStudent(@RequestParam int id, @RequestBody Students students) {
        return studentService.updateStudemts(id, students);
    }

    @DeleteMapping("/:id")
    public String deleteStudent(@RequestParam int id) {
        studentService.deleteStudents(id);
        return "Successfully sent student to the void realm";
    }
}
