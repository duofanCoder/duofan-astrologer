package com.duofan.astrologer.manage;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@MapperScan({"com.duofan.astrologer.persistence.mapper"})
@SpringBootApplication(scanBasePackages = {"com.duofan.fly", "com.duofan.astrologer"})
public class ManageApp {

    @SneakyThrows
    public static void main(String[] args) {
        SpringApplication.run(ManageApp.class, args);
    }


}
