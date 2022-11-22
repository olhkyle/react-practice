import React, { useEffect, useState } from 'react';

const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script';
const KAKAO_MAP_APP_KEY = '978fc5a84fb639106d7f564eed41527e';

// 원래는 kakao라는 객체를 window가 인식못하기 때문에 추가해줘야 하지만, 라이브러리가 있어 라이브러리를 설치 할 것
// declare interface Type {
//     window :{
//         kakao: any
//     }
// }

interface KakaoMapScriptLoaderProps {
  children: React.ReactNode;
}

const KakaoMapScriptLoader = ({ children }: KakaoMapScriptLoaderProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const mapScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);

    // html 파일에 id가 mapScript인 script가 있으면 다시 가져올 필요가 없고, window 전역객체에 kakao가 없다면
    if (mapScript && !window.kakao) {
      return;
    }

    // kakao CDN 형식 script 추가
    const script = document.createElement('script');
    script.id = KAKAO_MAP_SCRIPT_ID;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setLoaded(true);
      });
    };
    script.onerror = () => {
      // Todo: 실패
      setLoaded(false);
      alert('맵 로드 실패');
    };

    document.getElementById('root')?.appendChild(script);
  }, []);
  return (
    <>
      {loaded ? (
        children
      ) : (
        <>
          <div>지도를 가져오는 중입니다.</div>
        </>
      )}
    </>
  );
};

export default KakaoMapScriptLoader;
