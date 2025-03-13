package com.example.quanlibaixe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class NhanVienController {
    @GetMapping("/quanlynhanvien")

    public String quanLyNhanVien(Model model) {
        return "quanly_nhanvien";
    }
}
