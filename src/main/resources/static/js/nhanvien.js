document.addEventListener("DOMContentLoaded", function () {
  loadNhanVienData();
});

let nhanVienData = [
  {
    id: 1,
    tennv: "Nguyễn Văn An",
    sdt: "02344456789",
    chucvu: "Nhân Viên",
    maquanliduyet: "QL001",
  },
  {
    id: 2,
    tennv: "Nguyễn Minh An",
    sdt: "099906789",
    chucvu: "Nhân Viên",
    maquanliduyet: "QL001",
  },
];
let editingId = null;

function loadNhanVienData() {
  let tableBody = document.getElementById("nhanvien-table-body");
  tableBody.innerHTML = "";
  nhanVienData.forEach((nhanvien) => {
    let row = `<tr>
          <td>${nhanvien.id}</td>
          <td>${nhanvien.tennv}</td>
            <td>${nhanvien.sdt}</td>
            <td>${nhanvien.chucvu}</td>
          <td>${nhanvien.maquanliduyet}</td>
         
          <td>
              <button onclick="editNhanVien(${nhanvien.id})">Sửa</button>
              <button onclick="deleteNhanVien(${nhanvien.id})">Xóa</button>
          </td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

// Hiện form thêm mới
function showAddForm() {
  editingId = null;
  document.getElementById("form-title").innerText = "Thêm Nhân Viên";

  document.getElementById("tennv").value = "";
  document.getElementById("sdt").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("maquanliduyet").value = "";

  document.getElementById("nhanvien-form").style.display = "block";
}

// Hiện form sửa với dữ liệu cũ
function editNhanVien(id) {
  let nhanvien = nhanVienData.find((n) => n.id === id);
  if (nhanvien) {
    editingId = id;
    document.getElementById("form-title").innerText = "Chỉnh sửa Nhân Viên";

    document.getElementById("tennv").value = nhanvien.tennv;
    document.getElementById("sdt").value = nhanvien.sdt;
    document.getElementById("chucvu").value = nhanvien.chucvu;
    document.getElementById("maquanliduyet").value = nhanvien.maquanliduyet;

    document.getElementById("nhanvien-form").style.display = "block";
  }
}

// Lưu thông tin (Thêm mới hoặc cập nhật)
function saveNhanVien() {
  let tennv = document.getElementById("tennv").value;
  let sdt = document.getElementById("sdt").value;
  let chucvu = document.getElementById("chucvu").value;
  let maquanliduyet = document.getElementById("maquanliduyet").value;

  if (!tennv || !sdt || !chucvu || !maquanliduyet) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editingId === null) {
    // Thêm mới
    let newId =
      nhanVienData.length > 0
        ? nhanVienData[nhanVienData.length - 1].id + 1
        : 1;
    nhanVienData.push({ id: newId, tennv, sdt, chucvu, maquanliduyet });
  } else {
    // Cập nhật thông tin
    let nhanvien = nhanVienData.find((n) => n.id === editingId);
    if (nhanvien) {
      nhanvien.tennv = tennv;
      nhanvien.sdt = sdt;
      nhanvien.chucvu = chucvu;
      nhanvien.maquanliduyet = maquanliduyet;
    }
  }

  closeForm();
  loadNhanVienData();
}

// Đóng form
function closeForm() {
  document.getElementById("nhanvien-form").style.display = "none";
}

// Xóa NhanVien
function deleteNhanVien(id) {
  if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
    nhanVienData = nhanVienData.filter((n) => n.id !== id);
    loadNhanVienData();
  }
}
