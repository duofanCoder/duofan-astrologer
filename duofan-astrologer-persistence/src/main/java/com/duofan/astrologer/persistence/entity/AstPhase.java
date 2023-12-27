package com.duofan.astrologer.persistence.entity;

import com.duofan.fly.core.base.entity.abstact.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * @author duofan
 * @version 1.0
 * @email 2441051071@qq.com
 * @website duofan.top
 * @date 2023/12/27
 */
@Setter
@Getter
@Entity
@Table
@Accessors(chain = true)
public class AstPhase extends BaseEntity {

    private String name;

    private String analysisContent;
}
