self.addEventListener('push', function (event) {
  const options = {
    body: 'You have a new message',
    icon: 'icon.png',
    badge: 'icon.png',
    data: { url: 'index.html' },
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification('Friend Messenger', options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
