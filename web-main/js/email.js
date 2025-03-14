function emailSend() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    console.log("Sending with params:", params);

    emailjs.send("service_1li1vmh","template_n0jmp3u", params)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("ส่งสำเร็จแล้ว!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.error("FAILED...", error);
            alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        });
}
