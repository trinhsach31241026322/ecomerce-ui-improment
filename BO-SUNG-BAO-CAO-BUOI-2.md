# Nội dung bổ sung báo cáo Buổi 2

## Chèn vào cuối mục 2 – Website tham khảo và khu vực cải tiến

Dựa trên ảnh chụp trang chủ Shopee, tôi tham khảo cách phân chia khu vực điều hướng, banner khuyến mãi và nội dung sản phẩm. Trong website Góc Mua Sắm, tôi chọn bố cục đơn giản hơn với màu nhấn cam đất, nền sáng và khoảng cách rõ ràng giữa các khu vực. Phạm vi cải tiến tập trung vào giao diện HTML5/CSS3, không triển khai chức năng mua hàng hoặc thanh toán.

## Bổ sung vào mục 3 – Kỹ thuật HTML5/CSS3 đã thực hành

- Sử dụng CSS custom properties để thống nhất màu sắc trong giao diện.
- Sử dụng CSS Grid với `minmax(0, 1fr)` để chia cột và tránh nội dung làm giãn thẻ.
- Sử dụng `clamp()` để điều chỉnh kích thước tiêu đề theo màn hình.
- Sử dụng `aspect-ratio` và `object-fit` để thống nhất kích thước ảnh sản phẩm.
- Sử dụng `details` và `summary` để mở/thu gọn nội dung sản phẩm mà không cần JavaScript.
- Sử dụng `:focus-visible` để hiển thị vị trí điều hướng bằng bàn phím và `prefers-reduced-motion` để giảm hiệu ứng theo thiết lập thiết bị.

## Thay mục 5 – Những thay đổi đã thực hiện

1. **Menu điều hướng:** Giữ menu ngang bằng Flexbox, cho phép xuống dòng khi thiếu chỗ; bổ sung nhãn điều hướng và sửa liên kết Trang chủ, Sản phẩm, Liên hệ trỏ đúng khu vực.
2. **Banner ưu đãi:** Thêm tiêu đề, nội dung giới thiệu, nhãn giảm đến 24% và liên kết “Khám phá ưu đãi” dẫn tới danh sách sản phẩm. Mức 24% là tỷ lệ giảm giá làm tròn của sản phẩm tai nghe trong dữ liệu minh họa.
3. **Phân cấp nội dung:** Tách khu vực giới thiệu, banner và danh sách sản phẩm; bổ sung nhãn “Gợi ý dành cho bạn” và số lượng 4 sản phẩm.
4. **Thẻ sản phẩm:** Loại bỏ các quy tắc CSS trùng lặp và khoảng margin/padding dư; đồng nhất tỷ lệ ảnh 1:1, khoảng cách, đường viền và kiểu chữ. Làm nổi bật giá bán, giữ giá gốc gạch ngang và nhãn giảm giá.
5. **Responsive:** Điều chỉnh lưới từ 4 cột trên màn hình lớn xuống 3 cột khi chiều rộng không quá 1000px, 2 cột khi không quá 760px và 1 cột khi không quá 340px. Khi màn hình không quá 480px, banner chuyển thành một cột và ẩn vòng tròn trang trí để ưu tiên nội dung.
6. **Tương tác:** Thay nút chưa có xử lý bằng `details/summary` để mở/thu gọn ghi chú minh họa. Bổ sung trạng thái hover và focus cho liên kết và phần tương tác.
7. **Khả năng truy cập:** Chỉnh mô tả ảnh tai nghe và máy ảnh cho phù hợp hình minh họa; bổ sung nhãn menu, viền focus và hỗ trợ giảm chuyển động.
8. **Trang gốc:** Đồng bộ giao diện tại `index.html` ở thư mục gốc với `my store/index.html`, sửa đường dẫn CSS để cả hai điểm truy cập dùng cùng kiểu trình bày.

## Bổ sung vào mục 6 – Công cụ AI và cách kiểm tra kết quả

**Prompt bổ sung:** Dựa trên ảnh chụp trang chủ Shopee và mã HTML/CSS hiện tại, hãy cải tiến menu, banner ưu đãi và thẻ sản phẩm cho website Góc Mua Sắm. Giữ phạm vi HTML5/CSS3, sửa các quy tắc CSS trùng lặp, điều chỉnh bố cục responsive và giải thích các thay đổi để tôi bổ sung vào báo cáo.

**Vai trò của AI trong lần cập nhật:** ChatGPT hỗ trợ chỉnh sửa mã HTML/CSS và soạn phần mô tả thay đổi. Sinh viên cần đọc lại mã, chạy website và xác nhận kết quả trước khi nộp bài; không ghi các thay đổi do AI thực hiện là phần tự chỉnh sửa nếu chưa tự thực hành.

**Kế hoạch kiểm tra:** Mở trang bằng Chrome, kiểm tra ở chiều rộng 1280px, 900px, 600px, 390px và 320px; đối chiếu số cột tương ứng 4, 3, 2, 2 và 1. Bấm từng liên kết menu, mở/thu gọn phần “Xem sản phẩm”, dùng phím Tab và Enter để kiểm tra focus, quan sát ảnh và kiểm tra không có thanh cuộn ngang. Chụp ảnh màn hình máy tính và điện thoại sau khi kiểm tra thực tế.

## Vị trí chèn hình minh chứng

Chèn sau mục 5 một tiểu mục **Hình ảnh giao diện sau cải tiến**, gồm ảnh toàn trang trên máy tính và ảnh trên điện thoại. Nếu có ảnh trước cải tiến, đặt cạnh ảnh sau cải tiến để so sánh menu, banner, giá sản phẩm và số cột. Chỉ đưa kết quả kiểm tra đã thực hiện vào mục 6.
