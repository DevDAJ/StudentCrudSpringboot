package net.tao.assignment.Entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "students")
public class Students {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private int id;

    @NotNull
    @Getter
    @Setter
    @Column(length = 45)
    private String name;

    @Getter
    @Setter
    @Column(columnDefinition = "VARCHAR(45) DEFAULT NULL")
    private String address;

    @Getter
    @Setter
    private char gender = 'M';

    @Getter
    @Setter
    @Column(columnDefinition = "DATETIME DEFAULT NULL")
    private Date dob;

    @Getter
    @Setter
    @Column(columnDefinition = "VARCHAR(45) DEFAULT NULL")
    private String email;

    @Getter
    @Setter
    @Column(columnDefinition = "VARCHAR(15) DEFAULT NULL")
    private String mobile;

    @Getter
    @Setter
    @Column(columnDefinition = "VARCHAR(15) DEFAULT NULL")
    private String phone;
}
