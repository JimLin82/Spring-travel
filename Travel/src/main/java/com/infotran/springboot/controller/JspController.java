package com.infotran.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.infotran.springboot.Travel;

 

@Controller
public class JspController {
	
	@Autowired
	private  MemberController memberController;
	

	@GetMapping("/index")
	public String home () {
	
		
		return "index";
	}
	
	
	@GetMapping("/login")
	public String Member () {	
		return "login";
	}
	@GetMapping("/members/register")
	public String register () {	
		return "register";
	}
	

				
	
}
	
	

	
	
	
