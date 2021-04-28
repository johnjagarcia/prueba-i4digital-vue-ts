import Photo from './Photo';

export default interface Album {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}
