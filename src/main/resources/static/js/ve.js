document.addEventListener("DOMContentLoaded", function () {
  loadVeData();
});

let veData = [
  {
    id: 1,
    loaive: "Vé Ngày",
    gia: "6000",
  },
  {
    id: 2,
    loaive: "Vé Tháng",
    gia: "180000",
  },
];
let editingId = null;

function loadVeData() {
  let tableBody = document.getElementById("ve-table-body");
  tableBody.innerHTML = "";
  veData.forEach((ve) => {
    let row = `<tr>
          <td>${ve.id}</td>
          <td>${ve.loaive}</td>
            <td>${ve.gia}</td>
            
         
          <td>
              <button onclick="editVe(${ve.id})">Sửa</button>
              <button onclick="deleteVe(${ve.id})">Xóa</button>
          </td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

// Hiện form thêm mới
function showAddForm() {
  editingId = null;
  document.getElementById("form-title").innerText = "Thêm Vé";

  document.getElementById("loaive").value = "";
  document.getElementById("gia").value = "";

  document.getElementById("ve-form").style.display = "block";
}
// Hiện form sửa với dữ liệu cũ
function editVe(id) {
  let ve = veData.find((v) => v.id === id);
  if (ve) {
    editingId = id;
    document.getElementById("form-title").innerText = "Chỉnh sửa Vé";
    document.getElementById("loaive").value = ve.loaive;
    document.getElementById("gia").value = ve.gia;
    document.getElementById("ve-form").style.display = "block";
  }
}
// Lưu thông tin (Thêm mới hoặc cập nhật)
function saveVe() {
  let loaive = document.getElementById("loaive").value;
  let gia = document.getElementById("gia").value;

  if (!loaive || !gia) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editingId === null) {
    // Thêm mới
    let newId = veData.length > 0 ? veData[veData.length - 1].id + 1 : 1;
    veData.push({
      id: newId,
      loaive,
      gia,
    });
  } else {
    // Cập nhật thông tin
    let ve = veData.find((v) => v.id === editingId);
    if (ve) {
      ve.loaive = loaive;
      ve.gia = gia;
    }
  }
  closeForm();
  loadVeData();
}

// Đóng form
function closeForm() {
  document.getElementById("ve-form").style.display = "none";
}
// Xóa thông tin ve
function deleteVe(id) {
  if (confirm("Bạn có chắc chắn muốn xóa vé này?")) {
    veData = veData.filter((v) => v.id !== id);
    loadVeData();
  }
}
// // Search
// function searchVe() {
//   let searchValue = document.getElementById("search").value;
//   let searchResults = veData.filter((v) => {
//     return (
//       v.loaive.toLowerCase().includes(searchValue.toLowerCase()) ||
//       v.gia.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   });
//   let tableBody = document.getElementById("ve-table-body");
//   tableBody.innerHTML = "";
//   searchResults.forEach((ve) => {
//     let row = `<tr>
//           <td>${ve.id}</td>
//           <td>${ve.loaive}</td>
//           <td>${ve.gia}</td>
//           <td>
//               <button onclick="editVe(${ve.id})">Sửa</button>
//               <button onclick="deleteVe(${ve.id})">Xóa</button>
//           </td>
//       </tr>`;
//     tableBody.innerHTML += row;
//   });
// }
// // Sort
// function sortVe() {
//   veData.sort((a, b) => {
//     let nameA = a.loaive.toUpperCase();
//     let nameB = b.loaive.toUpperCase();
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });
//   loadVeData();
// }
// // Filter
// function filterVe() {
//   let filterValue = document.getElementById("filter").value;
//   let filterResults = veData.filter((v) => {
//     return v.loaive.toLowerCase().includes(filterValue.toLowerCase());
//   });
//   let tableBody = document.getElementById("ve-table-body");
//   tableBody.innerHTML = "";
//   filterResults.forEach((ve) => {
//     let row = `<tr>
//           <td>${ve.id}</td>
//           <td>${ve.loaive}</td>
//           <td>${ve.gia}</td>
//           <td>
//               <button onclick="editVe(${ve.id})">Sửa</button>
//               <button onclick="deleteVe(${ve.id})">Xóa</button>
//           </td>
//       </tr>`;
//     tableBody.innerHTML += row;
//   });
// }
// // Reset
// function resetVe() {
//   document.getElementById("search").value = "";
//   loadVeData();
// }

// // Validate
// function validateVe() {
//   let loaive = document.getElementById("loaive").value;
//   let gia = document.getElementById("gia").value;
//   if (!loaive || !gia) {
//     alert("Vui lòng nhập đầy đủ thông tin!");
//     return false;
//   }
//   return true;
// }
