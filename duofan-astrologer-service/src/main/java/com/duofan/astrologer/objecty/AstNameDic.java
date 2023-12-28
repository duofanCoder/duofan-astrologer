package com.duofan.astrologer.objecty;

import ch.qos.logback.core.joran.action.PreconditionValidator;
import com.duofan.astrologer.persistence.entity.AstPhase;
import com.duofan.astrologer.service.AstPhaseService;
import com.duofan.fly.core.base.domain.common.FlyDictionary;
import com.duofan.fly.core.spi.DictExtension;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author duofan
 * @version 1.0
 * @email 2441051071@qq.com
 * @website duofan.top
 * @date 2023/12/28
 */
@Component
public class AstNameDic implements DictExtension {
    @Override
    public String getType() {
        return "astNameDic";
    }
    
    @Resource
    private AstPhaseService service;

    @Override
    public List<FlyDictionary> list() {
        return service.list().stream().map(this::convert).toList();
    }
    
    private FlyDictionary convert(AstPhase phase) {
        return new FlyDictionary("astNameDic", phase.getName(),
                phase.getId());
    }

    @Override
    public boolean isCacheable() {
        return false;
    }
}
