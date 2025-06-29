self.addEventListener('push', function (event) {
  const options = {
    body: 'You have a new message',
    icon: 'v8.png',
    badge: 'v8.png',
    data: { url: 'index.html' },
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification('Messenger', options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
