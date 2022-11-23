import { useLayoutEffect } from 'react'
import { useMemo } from 'react'
import { useMap } from '../hooks/useMap'
import { PlaceType } from './mapTypes'

interface MapMarkerProps {
  place: PlaceType
}

const MapMarker = (props: MapMarkerProps) => {
  const map = useMap()
  const marker = useMemo(() => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: props.place.position,
    })

    marker.setMap(map)
    return marker
  }, [])

  // 컴포넌트 리렌더링 시에 레이아웃을 잡는 단계에서 선제적으로 useEffect와 같은 역할로 실행됨
  useLayoutEffect(() => {
    marker.setMap(map) // 지도 위에 마커 표시
    return () => {
      marker.setMap(null)
    }
  }, [map])
  return <div></div>
}

export default MapMarker
