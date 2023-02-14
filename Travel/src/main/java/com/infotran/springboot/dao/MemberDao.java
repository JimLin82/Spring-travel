package com.infotran.springboot.dao;

import java.util.List;

import com.infotran.springboot.dto.MemberRegisterRequest;
import com.infotran.springboot.model.Member;

public interface MemberDao {
	
	Member getMemberById(Integer memberId);
	
	Member getMemberByEmail(String email);

	Integer createMember(MemberRegisterRequest memberRegisterRequest);
	
	
	
//	void save(Member member);
//	List<Member> findAll();
//	Member findById(Integer id);
//	Member findByMemberId(String memberId);
//	void deleteById(Integer id);
//	Member update(Member member);
//	void detach(Member member);
}
