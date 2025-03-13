package com.example.quanlibaixe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VeXeController {

    @GetMapping("/quanlyvexe")
    public String quanLyVeXe(Model model) {
        return "quanly_vexe";
    }
}
