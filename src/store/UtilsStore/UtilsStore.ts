/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { AesirxPimUtilApiService } from 'aesirx-lib';
import { runInAction } from 'mobx';

export default class UtilsStore {
  async getListPublishStatus(callbackOnSuccess: any, callbackOnError: any) {
    try {
      const getAesirxPimUtilApiService = new AesirxPimUtilApiService();
      const respondedData = await getAesirxPimUtilApiService.getListPublishStatus();
      if (respondedData) {
        runInAction(() => {
          callbackOnSuccess(respondedData);
        });
      } else {
        callbackOnError({
          message: 'Something went wrong from Server response',
        });
      }
      return respondedData;
    } catch (error) {
      // no error throw
    }

    return false;
  }
  async getListContentType(callbackOnSuccess: any, callbackOnError: any) {
    try {
      const getAesirxPimUtilApiService = new AesirxPimUtilApiService();
      const respondedData = await getAesirxPimUtilApiService.getListContentType();
      if (respondedData) {
        runInAction(() => {
          callbackOnSuccess(respondedData);
        });
      } else {
        callbackOnError({
          message: 'Something went wrong from Server response',
        });
      }
      return respondedData;
    } catch (error) {
      // no error throw
    }

    return false;
  }
  async getListFieldType(callbackOnSuccess: any, callbackOnError: any) {
    try {
      const getAesirxPimUtilApiService = new AesirxPimUtilApiService();
      const respondedData = await getAesirxPimUtilApiService.getListFieldType();
      if (respondedData) {
        runInAction(() => {
          callbackOnSuccess(respondedData);
        });
      } else {
        callbackOnError({
          message: 'Something went wrong from Server response',
        });
      }
      return respondedData;
    } catch (error) {
      // no error throw
    }

    return false;
  }
}
