
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail-img");
  const mainImg = document.querySelector(".main-img");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function () {
      // Đổi ảnh chính
      mainImg.src = this.src;

      // Xóa active ở tất cả thumbnail
      thumbnails.forEach(t => t.classList.remove("active"));

      // Active cho ảnh đang chọn
      this.classList.add("active");
    });
  });
});

