package com.duofan.astrologer.manage.controller.api.v1.astro;

import com.duofan.astrologer.manage.controller.request.AstPhaseRequest;
import com.duofan.astrologer.persistence.entity.AstPhase;
import com.duofan.astrologer.service.AstPhaseService;

import org.springframework.web.bind.annotation.*;
import com.duofan.fly.core.base.domain.common.FlyPageInfo;
import com.duofan.fly.core.base.domain.common.FlyResult;
import com.duofan.fly.core.base.domain.permission.access.FlyAccessInfo;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;

import java.util.Arrays;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author duofan
 * @since 2023-12-27
 */
@RestController
@RequestMapping("/api/v1/astPhase")
@FlyAccessInfo(opName = "AstPhase模块")
public class AstPhaseController {
    @Resource
    private AstPhaseService service;

    @GetMapping("/page")
    @FlyAccessInfo(opName = "AstPhase-分页")
    public FlyResult page(FlyPageInfo<AstPhase> pageInfo, AstPhase entity) {
        return FlyResult.success(service.page(pageInfo, entity));
    }

    @GetMapping("/detail")
    @FlyAccessInfo(opName = "AstPhase-详细信息")
    public FlyResult detail(String id) {
        return FlyResult.success(service.getById(id));
    }

    @DeleteMapping("/remove")
    @FlyAccessInfo(opName = "AstPhase-删除信息")
    public FlyResult remove(String id) {
        return FlyResult.success(service.removeById(id));
    }

    @PutMapping("/update")
    @FlyAccessInfo(opName = "AstPhase-修改信息")
    public FlyResult updateById(@RequestBody @Valid AstPhase request) {
        service.updateById(request);
        return FlyResult.SUCCESS;
    }

    @PostMapping("/save")
    @FlyAccessInfo(opName = "AstPhase-添加信息")
    public FlyResult save(@RequestBody @Valid AstPhase request) {
        return FlyResult.success(service.save(request));
    }

    @DeleteMapping("/remove/batch")
    @FlyAccessInfo(opName = "AstPhase-批量删除")
    public FlyResult removeByIds(@RequestParam("ids") String[] ids) {
        service.removeByIds(Arrays.asList(ids));
        return FlyResult.SUCCESS;
    }

    @PutMapping("/switch/status")
    @FlyAccessInfo(opName = "AstPhase-切换状态")
    public FlyResult switchVisible(@RequestBody @Valid AstPhaseRequest.SwitchStatus request) {
        return FlyResult.success(service.switchStatus(request.getId(), request.getStatus()));
    }
}
