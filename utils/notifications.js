import * as Notifications from 'expo-notifications';

export function scheduleNotification(title, body, hours, minutes, route) {

    const notificationPermission = true

    if (notificationPermission) {
        const notificationDate = new Date();
        notificationDate.setHours(hours, minutes, 0, 0)

        Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: body,
                data: {
                    screen: route
                }
            },
            trigger: {
                hour: notificationDate.getHours(),
                minute: notificationDate.getMinutes(),
                repeats: true, // Repetir diariamente
            },
        });

        console.log('Notificação agendada com sucesso!');
    } else {
        console.log('Permissões de notificação não concedidas.');
    }
};

export function setupNotificationHandling(navigation) {
    Notifications.addNotificationResponseReceivedListener((response) => {
      const routeName = response.notification.request.content.data.screen;
      navigation.navigate(routeName);
    });
};