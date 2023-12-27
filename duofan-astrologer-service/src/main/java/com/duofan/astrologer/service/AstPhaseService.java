package com.duofan.astrologer.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.duofan.astrologer.persistence.entity.AstPhase;
import com.duofan.fly.core.base.domain.common.FlyPageInfo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author duofan
 * @since 2023-12-27
 */
public interface AstPhaseService extends IService<AstPhase> {
    boolean save(AstPhase entity);

    boolean edit(AstPhase entity);

    FlyPageInfo<AstPhase> page(FlyPageInfo<AstPhase> pageInfo,AstPhase entity);

    boolean switchStatus(String id, String status);
}
