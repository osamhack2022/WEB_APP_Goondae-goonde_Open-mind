# Goondae-goonde_Open mind

외박,외출,휴가 장병을 위한 플레이스 추천 플랫폼 [군대군데]

## 프로젝트 소개

- 위드코로나, 사회적거리두기 완화따라 외출/외박이 풀리기 시작했습니다.

  하지만 정작 출타를 나가고자하면 "어디서 뭐하고 놀지?", "동기/후임들과 친목활동을 하고싶은데 뭐가 좋을까?" 등 주변 위수지역에 대한 정보를 구하기 힘들고 경험이 적어 금쪽같은 출타 시간을 낭비하는 일이 있습니다.

  이러한 문제를 해결하기 위해 지역 군 장병들이 참여하여 우리 지역의 외출/외박 가이드를 만들어 나가고 공유하는 앱 "군대군데"을 구상하게 되었습니다.

## 기능 설명

- "군대군데"는 외출, 외박, 휴가 장병들이 혜택을 누릴 수 있도록 현재 위치 주변의 군 장병 우대 업소를 추천(인기도, 거리순 등 고려)해주며 해당 업소의 혜택(할인혜택, 환급 혜택)등을 알려주는 플랫폼입니다.

  또한 해당 업소의 리뷰를 공유할 수 있는 커뮤니티를 이용 할 수 있고, 지도를 통해 해당 업소의 위치도 파악할 수 있습니다.

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
