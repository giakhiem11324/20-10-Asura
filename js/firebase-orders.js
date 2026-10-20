import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';

const buttons = document.querySelectorAll('[data-order-select]');
const status = document.querySelector('.shop-order-status');
if (buttons.length && status) {
  let db = null;
  if (isFirebaseConfigured) {
    try { db = getFirestore(initializeApp(firebaseConfig)); }
    catch (error) { console.error('Firebase initialization failed', error); }
  }
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const card = button.closest('[data-product-id]');
      if (!card) return;
      if (!db) {
        status.textContent = 'Firebase chưa được kết nối. Đơn chưa gửi; hãy cấu hình Firebase trước nhé.';
        return;
      }
      button.disabled = true;
      status.textContent = 'Đang gửi lựa chọn…';
      try {
        await addDoc(collection(db, 'orders'), { productId: card.dataset.productId, createdAt: serverTimestamp() });
        status.textContent = 'Đã gửi lựa chọn “' + card.dataset.productTitle + '” thành công!';
      } catch (error) {
        console.error('Could not submit selection', error);
        status.textContent = 'Chưa gửi được. Vui lòng thử lại sau.';
      } finally { button.disabled = false; }
    });
  });
}
