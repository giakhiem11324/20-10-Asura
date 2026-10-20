# Sự thức giấc của Tiny

Trang trải nghiệm tương tác, tách CSS, JavaScript và tài nguyên thành các file riêng.

## Chạy trên máy
Mở thư mục bằng VS Code và chạy Live Server từ index.html, hoặc dùng npm run dev.

## Build cho Vercel
Chạy npm run build để tạo thư mục dist.

## Cấu trúc
- index.html: nội dung trang.
- css/styles.css: giao diện.
- js/: logic theo nhóm chức năng.
- assets/: ảnh, âm thanh và video.
- build.mjs: đóng gói site tĩnh vào dist/.

## Đơn chọn sản phẩm (Firebase Firestore)

Nút **Chọn** lưu `productId` và thời gian tạo vào collection `orders`. Khi Firebase chưa cấu hình, giao diện sẽ báo rõ rằng đơn chưa được gửi.

1. Tạo Firebase project tại [Firebase Console](https://console.firebase.google.com/), thêm Web App và bật Cloud Firestore.
2. Sao chép Web config vào `js/firebase-config.js` (apiKey, authDomain, projectId, appId). Đây là Web SDK config, không dùng service-account/private key.
3. Dán nội dung `firestore.rules` vào Firestore Database > Rules rồi Publish.
4. Triển khai lại trang. Xem đơn tại Firestore Database > Data > `orders`.

Quy tắc chỉ cho phép tạo đơn cho 4 mã sản phẩm được định sẵn; người truy cập không thể đọc/sửa/xóa đơn qua website. `npm run build` đóng gói các module vào `dist` để Vercel phục vụ.
