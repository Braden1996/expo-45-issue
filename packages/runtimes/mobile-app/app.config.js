const version = "1.0.0"
const binaryVersion = 1

// Importing from @attio/shared theme causes issues :(
const darkContent = "#1D1E1F"
const lightContent = "#FFFFFF"

const splash = {
    image: "./assets/splash.png",
    backgroundColor: lightContent,
    dark: {
        image: "./assets/splash.png",
        backgroundColor: darkContent,
    },
}

// Obtained by running: eas project:info
const projectId = "12345678-1234-1234-1234-123456789ABC"

export default {
    name: "Test",
    slug: "_SLUG_",
    owner: "_OWNER_",
    jsEngine: "hermes",
    version,
    icon: "./assets/icon.png",
    scheme: "attio",
    backgroundColor: lightContent,
    userInterfaceStyle: "automatic",
    updates: {
        fallbackToCacheTimeout: 0,
        url: `https://u.expo.dev/${projectId}`,
    },
    assetBundlePatterns: ["**/*", "node_modules/@react-navigation/stack/src/views/assets/**/*"],
    runtimeVersion: {policy: "nativeVersion"},
    ios: {
        supportsTablet: false,
        bundleIdentifier: "com.test",
        // 99.99.x used to demonstrate we only care about the third component.
        buildNumber: `99.99.${binaryVersion}`,
        config: {
            usesNonExemptEncryption: false,
        },
        splash,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: lightContent,
        },
        package: "com.test",
        // Note: our old format for Android versionCodes used a trimmed timestamp.
        // To keep our versionCodes in ascending order, we prepend the binary version with a bunch of 9s.
        versionCode: Number(`${9999999}${binaryVersion}`),
        // googleServicesFile: "./config/google-services.production.json",
        splash,
        softwareKeyboardLayoutMode: "pan",
    },
    web: {
        favicon: "./assets/favicon.png",
    },
    extra: {
        eas: {
            projectId,
        },
        flipperHack: "React Native packager is running",
    },
    plugins: [
        [
            "expo-community-flipper",
            {
                Flipper: "0.144.0",
                ios: {
                    "Flipper-Folly": "2.6.10",
                    "Flipper-RSocket": "1.4.3",
                    "Flipper-DoubleConversion": "3.2.0",
                    "Flipper-Glog": "0.5.0.4",
                    "Flipper-PeerTalk": "0.0.4",
                },
            },
        ],
    ],
}
