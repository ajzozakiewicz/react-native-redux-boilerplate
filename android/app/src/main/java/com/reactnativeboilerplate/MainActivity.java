package com.reactnativeboilerplate;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.xeodou.rctplayer.ReactPlayerManager;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdaterPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeBoilerplate";
    }
}
