package com.loeo.service.impl;

import java.io.Serializable;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.loeo.entity.SysPrivilege;
import com.loeo.entity.SysResource;
import com.loeo.entity.SysRole;
import com.loeo.entity.SysUser;
import com.loeo.service.ShiroService;
import com.loeo.service.SysPrivilegeService;
import com.loeo.service.SysResourceService;
import com.loeo.service.SysUserService;
import com.loeo.shiro.ShiroContextUtils;

/**
 * 功能：
 *
 * @author：LT(286269159@qq.com)
 * @create：2018-02-07 11:51:38
 * @version：2018 Version：1.0
 * @company：创海科技 Created with IntelliJ IDEA
 */
@Service
public class ShiroServiceImpl implements ShiroService {
	@Resource
	private SysUserService sysUserService;
	@Resource
	private SysResourceService sysResourceService;
	@Resource
	private SysPrivilegeService sysPrivilegeService;

	@Override
	public Map<String, String> initUrlPerms() {
		SysResource sysResource = new SysResource();
		sysResource.setType("1");
		List<SysResource> sysResources = sysResourceService.selectList(new EntityWrapper<>(sysResource));
		Map<String, String> permMap = new HashMap<>(sysResources.size());
		sysResources.forEach(sr -> permMap.put(sr.getLink(), "perms[\"" + sr.getType() + ShiroService.PART_DIVIDER_TOKEN + sr.getId() + "\"]"));
		return permMap;
	}

	@Override
	public Set<String> findPermByRoles(Set<String> roles) {
		SysPrivilege sysPrivilege = new SysPrivilege();
		sysPrivilege.setMaster("role");
		Set<String> permSet = new HashSet<>();
		roles.forEach(role -> {
			sysPrivilege.setMasterValue(role);
			List<SysPrivilege> sysPrivileges = sysPrivilegeService.selectList(new EntityWrapper<>(sysPrivilege));
			permSet.addAll(sysPrivileges.stream().map(sp -> sp.getAccess() + ShiroService.PART_DIVIDER_TOKEN + sp.getAccessValue()).collect(Collectors.toSet()));
		});
		return permSet;
	}

	@Override
	public Set<String> findRolesByUserId(Serializable id) {
		List<SysRole> sysRoleList = sysUserService.findRolesById(ShiroContextUtils.getCurUser().getId());
		return sysRoleList.stream().map(sysRole -> sysRole.getId().toString()).collect(Collectors.toSet());
	}

	@Override
	public SysUser findUserByUserName(String username) {
		return sysUserService.findByUserName(username);
	}
}
