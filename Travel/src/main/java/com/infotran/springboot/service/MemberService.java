package com.infotran.springboot.service;

import java.util.List;

import com.infotran.springboot.dto.MemberLoginRequest;
import com.infotran.springboot.dto.MemberRegisterRequest;
import com.infotran.springboot.model.Member;

public interface MemberService {

	Member getMemberById(Integer memberId);
	
	Integer register(MemberRegisterRequest memberRegisterRequest);
	
	Member login(MemberLoginRequest memberLoginRequest);
	
//	void save(Member member);
//	List<Me mber> findAll();
//	Member findById(Integer id);
//	Member findByMemberId(String memberId);
//	void deleteById(Integer id);
//	Member update(Member member);
//	void detach(Member member);	
}