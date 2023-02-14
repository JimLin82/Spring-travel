package com.infotran.springboot.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.infotran.springboot.dao.MemberDao;
import com.infotran.springboot.dto.MemberLoginRequest;
import com.infotran.springboot.dto.MemberRegisterRequest;
import com.infotran.springboot.model.Member;
import com.infotran.springboot.service.MemberService;

@Service
@Transactional
public class MemberServiceImpl implements MemberService {
	
	
	private final static Logger log = LoggerFactory.getLogger(MemberServiceImpl.class);
	
	@Autowired
	private MemberDao memberDao;
	
	@Autowired
	public MemberServiceImpl(MemberDao memberRepository) {
		this.memberDao = memberRepository;
	}

	
	
	@Override
	public Member getMemberById(Integer memberId) {
		
		return memberDao.getMemberById(memberId);
	}


	@Override
	public Integer register(MemberRegisterRequest memberRegisterRequest) {
		Member member = memberDao.getMemberByEmail(memberRegisterRequest.getEmail());
		
		if(member != null) {
			log.warn("該 email {} 已經被註冊",memberRegisterRequest.getEmail());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		return memberDao.createMember(memberRegisterRequest);
	}



	@Override
	public Member login(MemberLoginRequest memberLoginRequest) {
		Member member = memberDao.getMemberByEmail(memberLoginRequest.getEmail());
		
		if(member == null) {
			log.warn("該 email {} 尚未註冊",memberLoginRequest.getEmail());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		if(member.getPassword().equals(memberLoginRequest.getPassword())) {
			return member;
		}else {			
			log.warn("該 email {} 的密碼不正確",memberLoginRequest.getEmail());
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
	}
	
	
}
