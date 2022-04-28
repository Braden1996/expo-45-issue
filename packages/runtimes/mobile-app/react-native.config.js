/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
// File created by expo-dev-client/app.plugin.js

module.exports = {
    dependencies: {
        ...require("expo-dev-client/dependencies"),
        "react-native-pusher-push-notifications": {
            platforms: {
                android: null, // this skips autolink for android
            },
        },
    },
}
