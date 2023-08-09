import { Dispatch } from "redux";
import { allActionTypes, TActionPhaseOfGame } from '../../type/type';

export default function getImg() {
  let urlArr: string[] = [];

  for (let i = 1; i < 51; i++) {
    urlArr.push(`https://source.unsplash.com/random/400x625?sig=${i}`);
    // urlArr.push(`1`); тестовая строка на обработку ошибки
  }

  async function getImgBlob(url: string) {
    let error:boolean = false
    let imgUrl = await fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new TypeError('Не удалось загурзить картинку')
        } else {
          return res
        }
      })
      .then(url => fetch(`${url.url}`))
      .then(res => res.blob())
      .then(imageBlob => {
        const imageObjectUrl = URL.createObjectURL(imageBlob);
        return imageObjectUrl;
      })
      .catch(err => {
        error = true;
      })
      
      
      if (!error && imgUrl) {
        return imgUrl
      } else {
        return ''
      }
  }

  return async (dispatch: Dispatch<TActionPhaseOfGame>) => {

    return Promise.all(urlArr.map(url => getImgBlob(url)))
      .then(arr => {
        return dispatch({ type: allActionTypes.GET_IMG, payload: arr })
      })
  }
}
