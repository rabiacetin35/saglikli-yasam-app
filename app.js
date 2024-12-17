if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker başarıyla kayıt edildi."))
    .catch((error) => console.error("Service Worker hatası:", error));
}
// Kamerayı açmak için getUserMedia API kullanıyoruz
const video = document.getElementById('camera');

// Kullanıcıdan kameraya erişim izni isteniyor
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;  // Videoyu ekrana yansıtıyoruz
  })
  .catch(function(error) {
    console.log("Kamera açılırken bir hata oluştu: ", error);
  });
