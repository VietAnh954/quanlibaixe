document.addEventListener("DOMContentLoaded", function () {
  loadKhachHangData();
});

let khachHangData = [
  {
    id: 1,
    tenkh: "Nguyễn Minh Kiên",
    sdt: "02344456789",
    maxe: "XM001",
    manhanvienduyet: "NV001",
  },
  {
    id: 2,
    tenkh: "Nguyễn Thanh Tùng",
    sdt: "099906789",
    maxe: "OT001",
    manhanvienduyet: "NV001",
  },
];
let editingId = null;

function loadKhachHangData() {
  let tableBody = document.getElementById("khachhang-table-body");
  tableBody.innerHTML = "";
  khachHangData.forEach((kh) => {
    let row = `<tr>
          <td>${kh.id}</td>
          <td>${kh.tenkh}</td>
            <td>${kh.sdt}</td>
            <td>${kh.maxe}</td>
          <td>${kh.manhanvienduyet}</td>
         
          <td>
              <button onclick="editKhachHang(${kh.id})">Sửa</button>
              <button onclick="deleteKhachHang(${kh.id})">Xóa</button>
          </td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

// Hiện form thêm mới
function showAddForm() {
  editingId = null;
  document.getElementById("form-title").innerText = "Thêm Khách Hàng";

  document.getElementById("tenkh").value = "";
  document.getElementById("sdt").value = "";
  document.getElementById("maxe").value = "";
  document.getElementById("manhanvienduyet").value = "";

  document.getElementById("khachhang-form").style.display = "block";
}

// Hiện form sửa với dữ liệu cũ
function editKhachHang(id) {
  let kh = khachHangData.find((y) => y.id === id);
  if (kh) {
    editingId = id;
    document.getElementById("form-title").innerText = "Chỉnh sửa Khách Hàng";

    document.getElementById("tenkh").value = kh.tenkh;
    document.getElementById("sdt").value = kh.sdt;
    document.getElementById("maxe").value = kh.maxe;
    document.getElementById("manhanvienduyet").value = kh.manhanvienduyet;

    document.getElementById("khachhang-form").style.display = "block";
  }
}

// Lưu thông tin (Thêm mới hoặc cập nhật)
function saveKhachHang() {
  let tenkh = document.getElementById("tenkh").value;
  let sdt = document.getElementById("sdt").value;
  let maxe = document.getElementById("maxe").value;
  let manhanvienduyet = document.getElementById("manhanvienduyet").value;

  if (!tenkh || !sdt || !maxe || !manhanvienduyet) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editingId === null) {
    // Thêm mới
    let newId =
      khachHangData.length > 0
        ? khachHangData[khachHangData.length - 1].id + 1
        : 1; //
    khachHangData.push({ id: newId, tenkh, sdt, maxe, manhanvienduyet });
  } else {
    // Cập nhật thông tin
    let kh = khachHangData.find((n) => n.id === editingId);
    if (kh) {
      kh.tenkh = tenkh;
      kh.sdt = sdt;
      kh.maxe = maxe;
      kh.manhanvienduyet = manhanvienduyet;
    }
  }

  closeForm();
  loadKhachHangData();
}

// Đóng form
function closeForm() {
  document.getElementById("khachhang-form").style.display = "none";
}

// Xóa KhachHang
function deleteKhachHang(id) {
  if (confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
    khachHangData = khachHangData.filter((y) => y.id !== id);
    loadKhachHangData();
  }
}
