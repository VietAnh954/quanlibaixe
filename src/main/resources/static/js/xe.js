document.addEventListener("DOMContentLoaded", function () {
  loadXeData();
});

let xeData = [
  { id: 1, biensoxe: "51H-12345", loaixe: "Xe máy", chuxe: "Nguyễn Văn A" },
  { id: 2, biensoxe: "30G-56789", loaixe: "Ô tô", chuxe: "Trần Thị B" },
];
let editingId = null;

function loadXeData() {
  let tableBody = document.getElementById("xe-table-body");
  tableBody.innerHTML = "";

  xeData.forEach((xe) => {
    let row = `<tr>
          <td>${xe.id}</td>
          <td>${xe.biensoxe}</td>
          <td>${xe.loaixe}</td>
          <td>${xe.chuxe}</td>
          <td>
              <button onclick="editXe(${xe.id})">Sửa</button>
              <button onclick="deleteXe(${xe.id})">Xóa</button>
          </td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

// Hiện form thêm mới
function showAddForm() {
  editingId = null;
  document.getElementById("form-title").innerText = "Thêm Xe";
  document.getElementById("biensoxe").value = "";
  document.getElementById("loaixe").value = "";
  document.getElementById("chuxe").value = "";
  document.getElementById("xe-form").style.display = "block";
}

// Hiện form sửa với dữ liệu cũ
function editXe(id) {
  let xe = xeData.find((x) => x.id === id);
  if (xe) {
    editingId = id;
    document.getElementById("form-title").innerText = "Chỉnh sửa Xe";
    document.getElementById("biensoxe").value = xe.biensoxe;
    document.getElementById("loaixe").value = xe.loaixe;
    document.getElementById("chuxe").value = xe.chuxe;
    document.getElementById("xe-form").style.display = "block";
  }
}

// Lưu thông tin (Thêm mới hoặc cập nhật)
function saveXe() {
  let biensoxe = document.getElementById("biensoxe").value;
  let loaixe = document.getElementById("loaixe").value;
  let chuxe = document.getElementById("chuxe").value;

  if (!biensoxe || !loaixe || !chuxe) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editingId === null) {
    // Thêm mới
    let newId = xeData.length > 0 ? xeData[xeData.length - 1].id + 1 : 1;
    xeData.push({ id: newId, biensoxe, loaixe, chuxe });
  } else {
    // Cập nhật thông tin
    let xe = xeData.find((x) => x.id === editingId);
    if (xe) {
      xe.biensoxe = biensoxe;
      xe.loaixe = loaixe;
      xe.chuxe = chuxe;
    }
  }

  closeForm();
  loadXeData();
}

// Đóng form
function closeForm() {
  document.getElementById("xe-form").style.display = "none";
}

// Xóa xe
function deleteXe(id) {
  if (confirm("Bạn có chắc chắn muốn xóa xe này?")) {
    xeData = xeData.filter((x) => x.id !== id);
    loadXeData();
  }
}
