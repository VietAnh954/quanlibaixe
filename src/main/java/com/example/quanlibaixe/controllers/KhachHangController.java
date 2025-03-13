package com.example.quanlibaixe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class KhachHangController {
    @GetMapping("/quanlykhachhang")
    public String quanLyXe(Model model) {
        return "quanly_khachhang";
    }
}
