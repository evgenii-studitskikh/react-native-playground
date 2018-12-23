import {
  detailConstants,
  SET_DATA_IMAGES
} from "../constants";

export type setDataImagesType = (images: any) => ({ 
  type: SET_DATA_IMAGES, 
  payload: any 
});

export const setDataImages: setDataImagesType = (images: any) => ({
  type: detailConstants.SET_DATA_IMAGES,
  payload: images
});
