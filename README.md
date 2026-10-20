# Sự thức giấc của 666・Asura

Trang trải nghiệm tương tác, tách CSS, JavaScript và tài nguyên thành các file riêng.

## Chạy trên máy
Mở thư mục bằng VS Code và chạy Live Server từ index.html, hoặc dùng npm run dev.

## Deploy trên Vercel
Vercel phục vụ trực tiếp `index.html`, `css/`, `js/` và `assets/` từ thư mục gốc; không cần bước build. `npm run build` vẫn có thể dùng để tạo `dist/` cho bản preview.

## Cấu trúc
- index.html: nội dung trang.
- css/styles.css: giao diện.
- js/: logic theo nhóm chức năng.
- assets/: ảnh, âm thanh và video.
- build.mjs: đóng gói site tĩnh vào dist/.

## Đơn chọn sản phẩm (Firebase Firestore)

Nút **Chọn** lưu `productId` và thời gian tạo vào collection `orders`. Web config cho project `shop-ca90f` đã được điền trong `js/firebase-config.js`. Nút lựa chọn lưu mã sản phẩm và thời gian vào Firestore collection `orders`.

1. Project Firebase đã được tạo và cấu hình Web App.
2. Đảm bảo Cloud Firestore đã bật và quy tắc trong `firestore.rules` đã được Publish.
3. Xem các đơn trong Firebase Console > Firestore Database > Data > `orders`.

Quy tắc chỉ cho phép tạo đơn cho 4 mã sản phẩm được định sẵn; người truy cập không thể đọc/sửa/xóa đơn qua website. `npm run build` đóng gói các module vào `dist` để Vercel phục vụ.
