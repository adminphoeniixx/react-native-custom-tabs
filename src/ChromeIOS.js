/**
 * @private
 * @providesModule ChromeIOS
 * @flow
 */
"use strict";

import { NativeModules } from "react-native";
import type { TabOption } from "./TabOption";
import { isAvailable, show } from "./SafariController";

const NativeSafariViewManager = NativeModules.SafariViewManager;
const ChromeManager = NativeModules.DBChromeManager;

/**
 * To open the URL of the http or https in Chrome.
 * If Chrome is not installed, opens the URL in safari.
 */
export default class ChromeIOS {
  /**
   * Opens the URL on a Chrome.
   *
   * @param url the Uri to be opened.
   * @param option the Option to customize Custom Tabs of look & feel.
   */
  static openURL(url: string, option: TabOption = {}): Promise<boolean> {
    if (isAvailable) {
      return show({ url, ...option });
    } else {
      return ChromeManager.openURL(url);
    }
  }

  static dismiss() {
    NativeSafariViewManager.dismiss();
  }
}
