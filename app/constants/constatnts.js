import {Dimensions, Platform} from 'react-native';
import imagePath from './imagePath';

//CONSTANTS USED IN APP
export const APP_NAME = 'share Slate';
export const PLATFORM = Platform.OS;
export const isIOS = Platform.OS == 'ios' ? true : false;

export const carImg ='https://cdn.pixabay.com/photo/2017/03/27/14/58/car-wash-2179231_960_720.jpg';
export const staticUserImageUrl = 'https://admin.flogapp.com//storage/uploads/images/thumb_1586605939.';


export  const DOTS_Size =12;
export const Slides = [
  {
    id: 1,
    image: imagePath.onBoard1,
    title: 'Welcome to Our Learning Platform',
    description:
      'Discover a world of knowledge and endless learning possibilities.',
  },
  {
    id: 2,
    image: imagePath.onBoard2,
    title: 'Explore a Variety of Courses',
    description:
      'Browse and choose from a wide range of courses on different subjects.',
  },
  {
    id: 3,
    image: imagePath.onBoard3,
    title: 'Get Certified!',
    description:
      'Earn certificates of completion to showcase your skills and knowledge.',
  },
];
