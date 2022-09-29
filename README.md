# Goondae-goonde_Open mind

외박,외출,휴가 장병을 위한 플레이스 추천 플랫폼 [군대군데]

## 프로젝트 소개

<img src="./img/download.jpeg" width="1080px"/>

> 위드코로나, 사회적거리두기 완화따라 외출/외박이 풀리기 시작했습니다. 위 사진과 같이 험준하고, 불편한 군대 안에서 20대를 보내고 있을 청춘들에게 2022년에 외출 외박을 나와서 1990년초, 2000년 초와 같은 불편함, 불의를 겪지 않게 하기 위한 프로젝트 입니다.

<img src="./img/news2.png" width="1080px"/>
<img src="./img/news4.png" width="1080px"/>
<img src="./img/news5.png" width="1080px"/>
<img src="./img/news1.png" width="1080px"/>

> 주말 외박에 평일 외출까지 나오는 시대, 위수지역 폐지 논란이 퍼졌었지만, 변화는 없었습니다. 위에서 변화가 없다면, 우리가 최소한의 노력을 해 PC방 11000원 음식은 바가지요금은 내지 않게 하기 위한 프로젝트 입니다.

**지역 내 수만명의 장병들의 힘을 모아, 위수 지역 내 정보를 공유하는 Plat Form "군데군대" 입니다.**

## 기능 설명

- 지방 도시에서의 숙박업소, 음식점을 여러 사이트에서 정보를 수집해 보여줍니다.

- 지도에 나와있지 않은 위수지역 내 숙박시설 및 음식점을 장병들이 추가할 수 있습니다.

- 각 숙박업소 및 음식점은 장병들의 리뷰 및 별점을 통해 정보를 확인할 수 있습니다.

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)

## 기술 스택 (Technique Used)

### Server(back-end)

- nodejs, php, java 등 서버 언어 버전
- express, laravel, sptring boot 등 사용한 프레임워크
- DB 등 사용한 다른 프로그램

### Front-end

- React.JS
- TailwindCSS, DaisyUI, Styled-components
- Redux-toolkit, Redux-saga
- 기타 사용한 라이브러리
  - "axios": "^0.27.2",
    "babel-eslint": "^10.1.0",
    "daisyui": "^2.31.0",
    "eslint": "^8.24.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "2.7.1",
    "react-helmet-async": "^1.3.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.4.1",
    "redux": "^4.2.0",
    "redux-actions": "^2.6.5",
    "redux-devtools-extension": "^2.13.9",
    "redux-saga": "^1.2.1",
    "tailwind-styled-components": "^2.2.0",
    "tailwindcss": "^3.1.8"

## 협업 툴 이용

### git

#### git flow 전략

> Frontend 기준 develop_v1 => feature/intro, feature/login, feature/dateedit / develop_v1에서 issue 해결을 위해 hotfix 브랜치 이용

- main : 기준이 되는 브랜치로 제품을 배포하는 브랜치 입니다.
- develop : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 합(Merge)칩니다.
- feature : 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 develop 브랜치에 합칩니다.
- hotfix : master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치 입니다.

#### commit log

출처: https://jryoun1.github.io/git/gitCommitLog/

**[Git] git commit log 작성 방법**

- subject와 body 사이는 한 줄 띄워 구분하기
- subject line의 글자수는 50자 이내로 제한하기
- subject line의 첫 글자는 대문자 사용하기
- subject line의 마지막에 마침표(.)

#### 코드 리뷰

> Pull Request를 다른 프론트엔드 혹은 백엔드 팀원이 확인 및 피드백을 통해, 팀원들의 진행 상황과 전체적인 프로젝트의 흐름을 확인

### Figma

> 구현되기 전의 디자인의 전체적인 모습을 팀원들과 공유하기 위해 활용

### Trello

> 각자 팀원들의 전체적인 작업도를 확인하기 위해 활용

## 설치 안내 (Installation Process)

```bash
$ git clone git주소
$ yarn or npm install
$ yarn start or npm run start
```

## 프로젝트 사용법 (Getting Started)

## 팀 정보 (Team Information)

[Open-mind]

> "오픈소스를 열린마음으로 개발하자!"

- Choi Sung Hyun (1233day@naver.com), Github Id: foggy-hyun
- Lee Seung Won (tmddnjs9318@naver.com), Github Id: SolfE
- Park Sin Woo (passenger0209@naver.com), Github Id : KimPalZa
- Kang In Woong (inwoong100@gmail.com), Github Id: in-woong

## 저작권 및 사용권 정보 (Copyleft / End User License)

- [MIT](https://github.com/osamhack2022/WEB_APP_Goondae-goonde_Open-mind/blob/main/LICENSE)

This project is licensed under the terms of the MIT license.
