import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import { KaKaoMapContext } from '../hooks/useMap'

interface DynamicMapType {
  children: React.ReactNode
}

const DynamicMap = ({ children }: DynamicMapType) => {
  const [map, setMap] = useState<kakao.maps.Map>()
  const kakaoMapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!kakaoMapRef.current) {
      return
    }
    const targetPoint = new kakao.maps.LatLng(33.450701, 126.570667)
    const options = {
      level: 3,
      center: targetPoint,
    }

    setMap(new window.kakao.maps.Map(kakaoMapRef.current, options))
  }, [])
  return (
    <>
      <M.Container>
        <M.Map ref={kakaoMapRef} />
      </M.Container>

      {map ? (
        <KaKaoMapContext.Provider value={map}>{children}</KaKaoMapContext.Provider>
      ) : (
        <div> 지도 정보를 가져오는데 실패하였습니다.</div>
      )}
    </>
  )
}

export default DynamicMap

const M: any = {}

M.Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

M.Map = styled.div`
  position: static;
  width: 100%;
  height: 100%;
`
