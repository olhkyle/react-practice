import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface PlaceType {
  id: string
  position: kakao.maps.LatLng
  title: string
  address: string
}

const SearchLocation = () => {
  const [keyword, setKeyword] = useState('')
  const [places, setPlaces] = useState<PlaceType[]>([])
  const placeService = useRef<kakao.maps.services.Places | null>(null)

  useEffect(() => {
    if (placeService.current) {
      return
    }

    placeService.current = new kakao.maps.services.Places()
  }, [])

  const searchPlaces = (keyword: string) => {
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!')
      return false
    }

    if (!placeService.current) {
      // TODO: placeService 에러
      alert('placeService 에러')
      return
    }
    placeService.current.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data)
        const placeInfos = data.map(placeSearchResult => {
          return {
            id: placeSearchResult.id,
            position: new kakao.maps.LatLng(
              Number(placeSearchResult.y),
              Number(placeSearchResult.x),
            ),
            title: placeSearchResult.place_name,
            address: placeSearchResult.address_name,
          }
        })
        setPlaces(placeInfos)
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.')
        return
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.')
        return
      }
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setKeyword(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    searchPlaces(keyword)
  }

  const handleItemClick = (place: PlaceType) => {}

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Input value={keyword} onChange={handleChange} />
      </S.Form>
      <S.List>
        {places.map((item, idx) => (
          <S.Item key={item.id} onClick={() => handleItemClick(item)}>
            <label>
              {`${idx + 1}`}.{item.title}
            </label>
            <span>{item.address}</span>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  )
}

export default SearchLocation

const S: any = {}

S.Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  overflow-y: scroll;
`

S.Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`

S.Input = styled.input`
  width: 100%;
  min-width: 200px;
  height: 2.5rem;
  border: 1px solid #c0c0c0;
`

S.List = styled.ul``

S.Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
  }
`
