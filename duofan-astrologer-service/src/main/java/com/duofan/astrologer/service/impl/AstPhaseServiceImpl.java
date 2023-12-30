package com.duofan.astrologer.service.impl;

import cn.hutool.core.stream.StreamUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.extension.conditions.query.QueryChainWrapper;
import com.duofan.astrologer.persistence.entity.AstPhase;
import com.duofan.astrologer.persistence.mapper.AstPhaseMapper;
import com.duofan.astrologer.service.AstPhaseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.duofan.fly.core.base.domain.common.FlyPageInfo;
import com.duofan.fly.core.utils.QueryUtils;
import jakarta.annotation.Resource;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.sql.Struct;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author duofan
 * @since 2023-12-27
 */
@Service
public class AstPhaseServiceImpl extends ServiceImpl<AstPhaseMapper, AstPhase> implements AstPhaseService {
    @Resource
    private AstPhaseMapper mapper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean save(AstPhase entity) {
        entity.setId(null);
        return super.save(entity);
    }
    
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(AstPhase entity) {
        return updateById(entity);
    }

    @Override
    public FlyPageInfo<AstPhase> page(FlyPageInfo<AstPhase> pageInfo, AstPhase user) {
        Page<AstPhase> page = QueryUtils.buildPage(pageInfo, AstPhase.class);
        if (StrUtil.isNotBlank(user.getAnalysisContent())) {
            user.setName(":" + user.getAnalysisContent());
        }
        QueryWrapper<AstPhase> wp = QueryUtils.buildQueryWrapper(user, List.of("name", "analysisContent","id"), AstPhase.class);
        Page<AstPhase> data = page(page, wp);
        wp.orderByDesc("update_time");
        return FlyPageInfo.of(data);
    }


    @Override
    public boolean switchStatus(String id, String status) {
        AstPhase model = new AstPhase();
        model
                //.setStatus(status)
                .setId(id);
        return this.updateById(model);
    }
}
