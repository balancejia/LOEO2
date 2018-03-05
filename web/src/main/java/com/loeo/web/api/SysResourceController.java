package com.loeo.web.api;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loeo.common.Result;
import com.loeo.entity.SysResource;
import com.loeo.service.SysResourceService;
import com.loeo.shiro.ShiroContextUtils;
import com.loeo.utils.validate.ValidateUtils;
import com.loeo.utils.validate.group.Add;
import com.loeo.utils.validate.group.Update;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author LT
 * @since 2017-05-25
 */
@RestController
@RequestMapping("/api/resources")
public class SysResourceController {
	@Resource
	private SysResourceService resourceService;

	@PostMapping("/list")
	public Result resources() {
		return Result.success(resourceService.getResourceTree());
	}

	@GetMapping("/{menuId}/buttons")
	public Result getChildren(@PathVariable String menuId) {
		return Result.success(resourceService.getAuthorisedButtonsByMenuId(menuId, ShiroContextUtils.getCurUserId()));
	}

	@PostMapping
	public Result add(SysResource sysResource) {
		ValidateUtils.validate(sysResource, Add.class);
		sysResource.setIsLeaf(1);
		resourceService.insert(sysResource);
		return Result.success("保存成功");
	}

	@PostMapping("/{resourceId}")
	public Result update(@PathVariable String resourceId, SysResource sysResource) {
		ValidateUtils.validate(sysResource, Update.class);
		resourceService.updateById(sysResource);
		return Result.success("修改成功");
	}

	@DeleteMapping("/{resourceId}")
	public Result delete(@PathVariable String resourceId) {
		resourceService.deleteById(resourceId);
		return Result.success("删除成功");
	}

}
