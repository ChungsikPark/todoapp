# todoapp

react-native & redux & saga

## 요구사항

- todo item 을 클릭시 상세보기 페이지로 넘어감
- todo item 의 내용이 사용 가능한 컨테이너의 최대 영역을 넘어가면 ... 표시
- react native redux , saga 아키텍처를 적용해서 구현
- saga function list

  1. createTodo
  2. updateTodo
  3. deleteTodo
  4. getTodo

- 위 각각에 대한 saga function 에 대한 test code 작성 ( jest )

## 스크린샷

![](https://images.velog.io/images/qkrcndtlr123/post/54f6ea27-7fa4-4c5e-8594-d2856fda7ec0/screenshot.jpeg)

## 코드 아키텍처에 대한 구현 방법과 설명

![](https://images.velog.io/images/qkrcndtlr123/post/c8ff3e5d-9f5c-43ca-a44a-46e677a9c1cc/filetree.jpeg)

#### pages

- `pages` 폴더와 `src` 폴더로 구분을 둔 이유는 이러합니다. - `screen`을 보여주는 역할을 하는 부분을 `pages` 폴더로 구분하는 것이 좋을 것 같았습니다. - `pages` 폴더 안에는 다시 `navigation` 폴더와 `screens` 폴더로 나뉩니다. `navigation` 폴더에는 구현한 화면이 2개 밖에 되지 않으므로, 그 두 화면의 이동을 담당하는 `Navigator.tsx` 파일을 담았습니다. - `screens` 폴더 안에는 각각 `detail` 과 `main`의 두 `screen` 화면을 출력하기 위한 파일을 담았습니다.
  <br/>

#### src

- `src` 폴더는 `actions`, `components`, `reducers`, `sagas`, `store` 이렇게 5개의 폴더로 구성되어 있습니다.
- `components` 폴더는 다시 `commons`와 `units`의 폴더로 구분되고, `units` 폴더는 `detail` 과 `main`으로 다시 구분합니다. 이는 각 화면에 사용되는 기능별로 컴포넌트를 나누기 위함입니다. -`redux` 관련 로직은 따로 폴더를 만들어 관리하지 않았고, 각 컴포넌트에 훅스를 사용하여 직접 적용하였습니다.
- `actions` 폴더는 `actionTypes.ts`에 액션의 타입을 지정해두었고, `index.ts`에 액션 생성자를 작성해 두었습니다.
- `reducer` 폴더에는 `reducer`들을 모아두었습니다.
- `sagas` 폴더에는 각 액션들의 API 와 디스패쳐를 담아두었습니다.
- `store` 폴더에는 redex의 미들웨어와 saga를 담은 파일이 있습니다.

## 과제를 진행하면서...

짧은 기간 안에 리액트 네이티브와 리덕스와 사가를 전부 익혀서 과제를 진행하는데 어려움이 많았습니다. 실제로 과제를 요구사항을 전부 충족하지는 못했고, 현재 사가를 적용하는 도중에 마감 기한이 되어 진행된 부분까지만 저장소에 담아 제출하였습니다.
