package com.infotran.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Travel {

	public static void main(String[] args) {
		SpringApplication.run(Travel.class, args);
	}

}
