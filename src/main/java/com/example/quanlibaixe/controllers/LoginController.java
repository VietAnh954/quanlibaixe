package com.example.quanlibaixe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    // @GetMapping("/login")
    // public String showLoginForm() {
    //     return "login";
    // }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, Model model) {
        // TODO: Xử lý đăng nhập, kiểm tra username & password
        // Nếu đăng nhập thành công thì chuyển hướng về trang chủ
        // Nếu đăng nhập thất bại thì hiển thị thông báo lỗi
        if ("admin".equals(username) && "123456".equals(password)) {
            return "redirect:/home"; // Chuyển hướng đến trang chính
        } else {
            model.addAttribute("error", "Tên đăng nhập hoặc mật khẩu không đúng!");
            return "login"; // Quay lại trang login với thông báo lỗi
        }
       
    }
}
