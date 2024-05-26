package net.tao.assignment.Config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import net.tao.assignment.Entities.Students;
import net.tao.assignment.Repos.StudentsRepo;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentsRepo repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(new Students(0, "Ririn", null, 'M', null, null, null, null));
            } else {
            }

        };
    }

}