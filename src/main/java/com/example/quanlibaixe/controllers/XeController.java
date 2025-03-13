package com.example.quanlibaixe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class XeController {
    @GetMapping("/quanlyxe")
    public String quanLyXe(Model model) {
        return "quanly_xe";
    }
}
