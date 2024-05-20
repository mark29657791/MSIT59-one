document.getElementById('custom-trip-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // 在這裡處理表單提交的邏輯
});

document.getElementById('region').addEventListener('change', function() {
  // 在這裡根據選擇的地區動態生成相應的景點圖片
});

document.getElementById('category').addEventListener('change', function() {
  // 在這裡根據選擇的類別動態生成相應的景點圖片
});

document.getElementById('days').addEventListener('change', function() {
  // 在這裡根據選擇的天數動態生成相應的行程安排欄位
});
