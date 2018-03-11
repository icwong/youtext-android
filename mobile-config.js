// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.herokuapp.youtext',
  name: 'guccichat',
  description: 'chat gucci style',
  author: 'gucci gang',
  email: 'aderakhs@sfu.ca',
  website: 'https://youtext.herokuapp.com/'
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_mdpi': 'public/assets/guccigang.png',
  'android_hdpi': 'public/assets/guccigang.png',
  'android_xhdpi': 'public/assets/guccigang.png',
  'android_xxhdpi': 'public/assets/guccigang.png',
  'android_xxxhdpi': 'public/assets/guccigang.png',
  // More screen sizes and platforms...
});

App.launchScreens({
  'android_mdpi_portrait': 'public/assets/guccigangmdpi.9.png',
  'android_hdpi_portrait': 'public/assets/gucciganghdpi.9.png',
  'android_xhdpi_portrait': 'public/assets/guccigangxhdpi.9.png',
  'android_xxhdpi_portrait': 'public/assets/guccigangxxhdpi.9.png',
  'android_xxxhdpi_portrait': 'public/assets/guccigangxxxhdpi.9.png',
  'android_mdpi_landscape': 'public/assets/guccigangmdpi.9.png',
  'android_hdpi_landscape': 'public/assets/gucciganghdpi.9.png',
  'android_xhdpi_landscape': 'public/assets/guccigangxhdpi.9.png',
  'android_xxhdpi_landscape': 'public/assets/guccigangxxhdpi.9.png',
  'android_xxxhdpi_landscape': 'public/assets/guccigangxxxhdpi.9.png',
  // More screen sizes and platforms...
});

// Set PhoneGap/Cordova preferences.
//App.setPreference('BackgroundColor', '0xff0000ff');
//App.setPreference('HideKeyboardFormAccessoryBar', true);
//App.setPreference('Orientation', 'default');
//App.setPreference('Orientation', 'all', 'ios');
