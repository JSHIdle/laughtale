![캡처-removebg-preview (15)](https://github.com/Youth787/SSAFY_Algorithm_Study/assets/90955152/c86199b1-7fdb-446c-a69b-eabb88f90219)


---
[1. 서비스 개요](#1-서비스-개요)  
[2. 팀원 소개](#2-팀원-소개)  
[3. 기술 스택](#3-기술-스택)  
[4. 서비스 아키텍처](#4-서비스-아키텍처)  
[5. ERD](#5-erd)  
[6. 디렉토리 구조](#6-디렉토리-구조)  
[7. API 명세서](#7-api-명세서)  
[8. 서비스 설명](#8-서비스-설명)

---

## 1. 서비스 개요
### Laugh Tale 이란?
우리가 일반적으로 '놀이'라고 생각하는 만화보기로 학습 효과를 누릴 수 있다니 '참 웃긴 이야기'입니다. 우리의 서비스 laugh tale은 사용자가 일본어를 재미있고 효과적으로 배울 수 있도록 도와주는 일본어 학습 도구를 제공합니다. 사용자의 일본어 수준에 따라 맞춤 단어를 추천하고 자동 생성 퀴즈 풀이를 통해 개인화된 학습을 이어나갈 수 있습니다. 

### 기획 배경
- 일본 만화에 대한 수요 증가
- 지속성이 낮은 기존의 일본어 학습 서비스

### 타겟 사용자 
- 일본 만화를 좋아하는 사람
- 일본어 학습에 지루함을 느끼는 사람


### 기대 효과
- 재미있는 만화를 통한 자연스러운 일본어 학습
- 개인화 맞춤 단어장, 자동 생성 퀴즈, 만화 분석 등의 기능을 통한 실력 향상


## 2. 팀원 소개

### Infra

|  **정승환**  |
|:---------:|
|  |

### Frontend

|  **김재찬**  | **김도형**  |   **정연미**    |
|:---------:|:--------:|:------------:|
|  |  |  |

### Backend

|  **양진우**  |                **최재용**                |
|:---------:|:-------------------------------------:|
|  | 데이터 처리, 회원 관리 및 인증/인가, 단어장, 만화 분석 API |

## 3. 기술 스택

### IDE

<img src="	https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white">
<img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white" alt="webstorm">
<img src="https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white" alt="pycharm">

### Infra

<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">

### Frontend
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

### Backend
<img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot">
<img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white">
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">
<img src="https://img.shields.io/badge/spring data jpa-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white">
<img src="https://img.shields.io/badge/Spring_webflux-F2F4F9?style=for-the-badge&logo=spring-boot">
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="">


### Python Server
<img src="	https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white">
<img src="	https://img.shields.io/badge/mecab-ff1709?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white">


### Tools
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
<img src="	https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="">
<img src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white">

## 4. 서비스 아키텍처
![Architecture](https://github.com/j-yong98/j-yong98/assets/120557342/eec4548c-5479-40b9-a11c-b3c603f06617)
## 5. ERD
![ERD](https://github.com/j-yong98/j-yong98/assets/120557342/16811f7b-29b3-498f-8c20-c568e0d80d5a)
## 6. 디렉토리 구조
```text
Frontend
├── apis
├── assets
│   ├── badge
│   ├── images
│   ├── main
│   ├── mainpageimage
│   │   └── mangas
│   └── samples
├── components
│   ├── admin
│   ├── analyze
│   ├── cartoon
│   ├── chart
│   ├── common
│   ├── login
│   ├── main
│   │   └── sampleData
│   └── mypage
├── constants
├── hooks
├── layout
│   └── GlobalLayout
├── pages
│   ├── admin
│   ├── analyze
│   ├── cartoon
│   │   └── manga
│   ├── error
│   ├── login
│   ├── logout
│   ├── main
│   ├── mypage
│   │   └── word
│   └── newmain
├── parts
├── routes
├── stores
├── styles
├── types
│   └── common
└── utils
```
```text
Backend
├── chapter
├── common
├── cut
├── dictionary
├── ebbinghaus
├── jako
├── manga
├── member
├── parser
├── position
├── quiz
├── security
├── speech
├── utils
├── viewhistory
├── wordbook
├── worddata
├── wordhistory
└── wordlist
```
## 7. API 명세서
  
[명세서 보기](https://www.notion.so/seunghw2/API-LAUGH-TALE-d955ba75e622445d846eed9ca94840db)

## 8. 서비스 설명
---

---
![analyze1-2024-4-3](https://github.com/j-yong98/j-yong98/assets/120557342/ead00f2b-271b-4acf-bbbf-2e3a0f0e522f)
![analyze2-2024-4-3](https://github.com/j-yong98/j-yong98/assets/120557342/ba14306c-735b-4f1e-88b1-d0370cab1148)
