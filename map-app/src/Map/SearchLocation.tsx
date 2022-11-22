import styled from '@emotion/styled';
import  { ChangeEvent, FormEvent, useState } from 'react';

const SearchLocation = () => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Input value={keyword} onChange={handleChange} />
      </S.Form>
      <S.List>
        {Array.from({ length: 10 }).map((item, idx) => (
          <S.Item key={idx}>
            <label>지역</label>
            <span>강남구 신사동</span>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
};

export default SearchLocation;

const S: any = {};

S.Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  overflow-y: scroll;
`;

S.Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

S.Input = styled.input`
  width: 100%;
  min-width: 200px;
  height: 2.5rem;
  border: 1px solid #c0c0c0;
`;

S.List = styled.ul``;

S.Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid #e5e5e5;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
  }
`;
