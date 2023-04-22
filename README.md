

# 북스리뷰 프로젝트

## :star:사이트 소개
    사용자가 최신 책 리뷰를 볼 수 있고, 독서커뮤니티와 서평게시판을 이용할 수 있는 웹서비스 개발
## :date:일정
    2023. 03. 13 ~ 2023. 03. 20

## :computer:디바이스
    PC


## :lips:개발언어
- Next.js, React, JavaScript, CSS3

<img src="https://jason-img.s3.amazonaws.com/mdoc/NEXT.JS.png" style="width:75px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/react.png" style="width:100px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/js.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/css.png" style="width:56px">
## :earth_americas:개발환경
- VScode, npm, Node.js, Vercel

<img src="https://jason-img.s3.amazonaws.com/mdoc/vscode.png" style="width:90px"><img src="https://jason-img.s3.amazonaws.com/mdoc/npm2.png" style="width:60px; margin-left:3px;">
<img src="https://jason-img.s3.amazonaws.com/mdoc/nodejs.png" style="width:91px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/Vercel.jpg" style="width:110px">



## :link:배포링크

- 배포방식은 Vercel의 배포방식을 이용하였습니다.
- [바로가기](https://book2-23-03-20.vercel.app/)


## :clipboard:프로젝트 설명


### 기능명


 #### 메인 페이지

1. Next.js 로 사용자에게 최신 책에 대한 리뷰를 보여주는 기능.
    
        메인 페이지에서 최신 책 리뷰 항목에 책 제목을 클릭하면 리뷰를 볼 수 있다.


#### 서평 페이지
1. 사용자가 다른 사용자들이 쓴 서평을 보고, 검색하고, 정렬 및 삭제, 직접 서평을 등록할 수 있는 기능.

        서평 페이지에서 전체 서평 항목에 보면 다른 사용자들이 쓴 서평 리스트가 나와있고,
        검색창에 단어를 입력하면 검색할 수 있고, 정렬버튼을 눌러서 해당 리스트를 재정렬 할 수 있으며
        휴지통 버튼을 누르면 리스트 항목을 삭제할 수 있다.
        서평쓰기를 클릭하면 서평을 작성할 수 있는 양식이 나와서 서평을 등록할 수 있다.
        
 
#### 커뮤니티 페이지
1.  Next.js 로 독서 커뮤니티 게시판을 만들어 게시글과 댓글을 볼 수 있는 기능.

        커뮤니티 페이지에서 게시글에 있는 댓글보기를 클릭하면 댓글이 나온다.


#### 회원가입 페이지

1.  회원가입 페이지 제작
    
        이름, 아이디, 비밀번호등의 필수정보를 입력할 수 있는 가입 양식을 만들었고, 취소를 누르면 모든 내용이 삭제된다.


#### 로그인 페이지
1. 로그인 페이지 제작

        아이디, 비밀번호를 입력할 수 있는 로그인 양식을 만들었고, 간편 로그인을 누르면 해당 홈페이지로 이동하며,
        회원가입하기를 누르면 회원가입 페이지로 이동한다.


#### 기획부터 개발까지 전담

1. 서비스 기획부터 Next.js 기능 구현까지 전담하여 업무수행.

        어떤 홈페이지와 페이지를 만들 것인가를 구상하고, Next.js로 최신 책 리뷰와 커뮤니티 게시판을 만들었다.

## :pencil2:피드백

### 느낀점




- 지금까지 AWS를 통한 배포방식만 고수하다, Next.js를 경험하면서 Vercel을 통한 배포방식이 더 효과적일 수 있음을 깨달았다.
    

- Next.js의 서버 사이드 렌더링(SSR)을 경험하면서 클라이언트 사이드 렌더링(CSR)과 비교되는 장,단점을 느낄 수 있었는데,
장점으로는 SSR이 CSR보다 첫 페이지 로딩 속도가 빠르다는 것을 느꼈고, 단점으로는 초기 로딩 이후 페이지 이동 시 속도가 다소 느리다는 점이었다. 
대신 검색 엔진 최적화(SEO)가 가능하다는 점이 굉장히 훌륭한 장점이라고 생각했다.





