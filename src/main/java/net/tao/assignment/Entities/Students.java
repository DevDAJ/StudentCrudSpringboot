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
    private int id;

    @NotNull
    @Getter
    @Setter
    @Column(length = 45)
    private String name;

    @Getter
    @Setter
    @Column(length = 45)
    private String address;

    @Getter
    @Setter
    private char gender = 'M';

    @Getter
    @Setter
    private Date dob;

    @Getter
    @Setter
    @Column(length = 45)
    private String email;

    @Getter
    @Setter
    @Column(length = 15)
    private String mobile;

    @Getter
    @Setter
    @Column(length = 15)
    private String phone;
}

// TABLE Student (
// id int(10) unsigned NOT NULL AUTO_INCREMENT,

// name varchar(45) NOT NULL,

// address varchar(45) DEFAULT NULL,
// gender char(1) DEFAULT 'M',
// dob datetime DEFAULT NULL,

// email varchar(45) DEFAULT NULL,

// mobile varchar(15) DEFAULT NULL,

// phone varchar(15) DEFAULT NULL,

// PRIMARY KEY (id)
// )