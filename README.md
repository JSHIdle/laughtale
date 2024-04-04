![logo](https://github.com/j-yong98/j-yong98/assets/120557342/eaee8660-0288-46a1-aeed-f6b2c51676e6)

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
![image](https://github.com/j-yong98/j-yong98/assets/120557342/ec924eb3-157c-4ca6-9031-4e7182770028)
[명세서 보기](https://www.notion.so/seunghw2/API-LAUGH-TALE-d955ba75e622445d846eed9ca94840db)

## 8. 서비스 설명
![main-2024-04-03](https://github.com/j-yong98/j-yong98/assets/120557342/78f1b83a-d0d9-46e2-82d8-3aefc0963c88)
![manga-list-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/7d0df80e-2f58-4e10-8409-0758c1517415)
![info-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/6ed7142b-318b-4161-ad62-898d6a0a7012)
![view-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/c42d529e-6beb-4218-b50c-73d5d9aab247)
![quiz-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/826d5343-9f75-46c5-80c8-170399a3cbc5)
![mypage-1-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/1568e0e3-0b09-4d49-9141-b1e85fe337b0)
![word-book-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/88087e12-c812-47e6-9af6-4afd3c13a687)
![admin-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/3f117a28-813e-446b-b53e-908909bf38c7)
![analyze-2024-4-4](https://github.com/j-yong98/j-yong98/assets/120557342/71b6d581-51e7-4144-bc45-f6facc7d8b2a)
