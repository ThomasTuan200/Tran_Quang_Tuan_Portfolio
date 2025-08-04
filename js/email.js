/* function sendMail(event){
    let parms = {
        lastname : document.getElementById("First name").value,
        company: document.getElementById("Company").value,
        email: document.getElementById("Email").value,
        subject: document.getElementById("Message").value,
        note: document.getElementById("Note").value,
    }

    emailjs.send("service_rruz3bf","template_v2hm5wn",parms).then(alert("Email Sent Successfully!"))
} */

// Khởi tạo EmailJS
(function() {
    emailjs.init('rvpiPzkW3CuNRiTqz'); // Thay YOUR_USER_ID bằng User ID từ EmailJS
  })();
  
  // Xử lý khi form được submit
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form tự động reload trang
  
    // Lấy dữ liệu từ form
    const serviceID = 'service_rruz3bf'; // Thay bằng Service ID của bạn
    const templateID = 'template_v2hm5wn'; // Thay bằng Template ID của bạn
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(function() {
        alert('Email đã được gửi thành công!');
      }, function(error) {
        alert('Gửi email thất bại. Lỗi: ' + JSON.stringify(error));
      });
  });
  