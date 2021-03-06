package com.loeo.admin.domain.dto;

import java.util.List;

import com.loeo.admin.domain.entity.SysResource;

/**
 * @author ：Tony.L(286269159@qq.com)
 * @create ：2016/11/05 11:40
 * @version ：2018 Version：1.0
 */
public class SysResourceTreeNode extends SysResource {
	private String checkState;
	private List<SysResourceTreeNode> children;

	public SysResourceTreeNode(SysResource resource) {
		this.setId(resource.getId());
		this.setName(resource.getName());
		this.setApi(resource.getApi());
		this.setMethod(resource.getMethod());
		this.setType(resource.getType());
		this.setPid(resource.getPid());
		this.setDescp(resource.getDescp());
		this.setIconCls(resource.getIconCls());
		this.setScript(resource.getScript());
		this.setCreated(resource.getCreated());
		this.setCreator(resource.getCreator());
		this.setUpdated(resource.getUpdated());
		this.setUpdater(resource.getUpdater());
		this.setEnable(resource.getEnable());
		this.setLeaf(resource.isLeaf());
		this.setOrde(resource.getOrde());
		this.setDataPermission(resource.getDataPermission());
		this.setChecked(resource.isChecked() == null ? Boolean.FALSE : resource.isChecked());
		if (this.isChecked()) {
			if (this.isLeaf()) {
				this.checkState = "indeterminate";
				this.setChecked(false);
			} else {
				this.checkState = "checked";
			}
		} else {
			this.checkState = "unchecked";
		}
	}

	public List<SysResourceTreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<SysResourceTreeNode> children) {
		this.children = children;
	}

	public String getCheckState() {
		return checkState;
	}

	public void setCheckState(String checkState) {
		this.checkState = checkState;
	}
}
