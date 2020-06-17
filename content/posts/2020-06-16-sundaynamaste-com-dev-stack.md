---
template: post
title: sundaynamaste.com 개발 스택
author: billy
slug: sundaynamaste.com 개발 스택
draft: false
date: 2020-06-16T01:53:13.048Z
description: sundaynamaste.com dev stack 개발 스택
category: 개발
tags:
  - dev
  - stack
---
# sundaynamaste.com의 개발스택 

> 서버 : www.iwinv.co.kr 클라우드 가상 서버 OS : ubuntu 16.04(64bit)
>
> web server : nginx
>
> Frontend : Angular 9.x
>
> backend : nodeJS (with Typescript)
>
> DB : MySql 8.x
>
> mail : postfix, dovecot
>
> ssl : Let's Encrypt
>
> version control : Git, GitHub
>
> 분석 : google analytics



## 서버 : www.iwinv.co.kr 클라우드 가상 서버 
처음에는 돈버는 거 없이 서비스를 시작하는 입장이어서 가능한 저렴한 것을 찾아야 했습니다.  

유명하기로는 aws가 있겠으나 당시에는 한국에는 lightsail도 런칭 안했고 

회사에서 써 본 경험으로는 오류가 발생해서 문의 티켓 발행해도 걍 점검 있었다 정도의 안내만 받았었습니다.

AWS의 장점이 가격이 비싸더라도 고성능의 다양한 기능을 제공하는 것이지만 고도화된 서비스를 이용할 일이 당분간 없었기 때문에 제외하게 되었습니다.

클리앙인가? 어떤 커뮤니티에서 www.iwinv.co.kr가 괜찮다고 언급해서 알게 된 것 같은데 실제로 사용해 보니 새벽에 장애가 있어서 문의해도 10분 내로 전화를 주더라고요.

아주 만족했습니다. 국내 업체라 이런 건 좋은 것 같습니다.

기존에 스마일서브라는 IDC를 오랫동안 운영해 온 업체에서 하는 거라고도 하고

믿을만 한 것 같아서 여기로 골랐습니다.

가상서버 중에 제일 싼게 vCore.v1 이라고 가장 저렴한 Tier를 선택했는데

빌드할때 자원이 부족한 거 빼고는 문제가 없어 (동시접속이 많은 편이 아니니) 만족합니다.

다만 지금은 저 tier는 신규가입에서 사라졌네요.

신규로 고르시는 분들은 <https://blog.lael.be/post/44> 에서 각종 클라우드 서버들을 자세하게 비교/추천해 주고 있으므로 참고하면 좋을 것 같습니다.



## OS : ubuntu 

![ubuntu mark](/media/ubuntu.png "ubuntu")

centos나 Fedora 등등도 고를 수 있던데

stackoverflow 등등 해서 예제로 나온 것들이 ubuntu기반이 많길래 ubuntu로 골라봤습니다.

딱히 리눅스 시스템 단을 잘 알지 못하기 때문에 ubuntu의 장단점에 대해 쓰긴 어렵네요.

잘 모르면 유명한것이 낫겠죠?



## web server : nginx

![nginx mark](/media/nginx.png "nginx")

회사에서는 Apache만 써 봤는데 Apache보다 nginx가 더 빠르다고 하고 점유율이라던가 여러가지로 문제될 것이 없기 때문에 nginx를 택했습니다.  

기본적인 config는 구글링으로 쉽게 해결할 수 있고 (오히려 쉬운듯?) 대새라고 하니 써보는 것이 좋은 것 같았습니다.

써볼 수록 Apache 보다는 nginx가 나은 듯 하니, 특별한 이유가 없다면 nginx를 선택하는 것이 좋겠습니다.



## FrontEnd : Angular 

![Angular mark](/media/angular.png "angular")

SPA로 Frontend를 구축한다고 하면 React, Angular, Vue 중 골라야 하는 건데 이에 대한 의견은 인터넷에 너무 너무 너무 많습니다.

대중성으로는 React > Angular > Vue 이고 출시일로는 React < Angular < Vue 이죠 (보통 늦게 출시한 언어가 약점을 보강했을터이니) 한가지 언어가 딱 좋다고 말하긴 불가능합니다. 

저는 Angular를 선택했는데, 그 이유는 회사에서 이미 써 봤기 때문입니다. 

집에서 혼자 해야하는데 할일도 잔뜩인데, 언제 또 배우나요? ㅎㅎ (회사에서 돈주고 새로운거 시키면 감사하겠습니다만) 

그럼에도 불구하고 Angular는 Typescript를 통한 IDE의 강력한 지원, Cli를 비롯해 온갖것을 탑재해 추가 라이브러리 선택을 많이 생각할 필요가 없음 등등 많은 장점이 있습니다. (반대로 그것이 단점이라고 말할 수도 있습니다만) 

단점은 높은 러닝커브 라고 하는데, 지금 vue 등을 배우고 추가 라이브러리를 고르고 하는 것보단 기존에 어느정도 알고 있는 언어로 진행하는 것이 빠를 것 같아 골랐습니다. 

Angular는 Google이라는 대기업에서 만들어서 키워가다보니 개발자들의 반감을 사서 평가절하 되는 것 같습니다. 다음에는 낮은 러닝커브로 유명한 vue도 써보고 싶네요.



## BackEnd : Node.js

![node mark](/media/node.png "node")

많은 한국 회사들이 그렇듯 저도 java를 주로 써왔습니다. 

그런데 가끔은 문법이 왜 이렇게 복잡할까? 하는 의구심이 많이 들었고, nodeJs가 핫하다고도 하고 살짝은 써 보았기 때문에 선택하였습니다. 

Angular를 쓰며 Typescript가 편하였기 때문에 node에도 typescript를 적용하였습니다.

실제로 빠른 개발이 가능한 것 같아 마음에 듭니다. 

아 framework는 역시 예제가 많은 express 입니다.



## DB : MySql 8

![MySql mark](/media/mysql.png "MySql")

예전에 유행했던 MEAN (MongoDB, Express, Angular, Node)도 있고 MongoDB를 쓰는 것도 자연스러울 것 같은데

MySql로 충분/가능하고 익숙해서 DB는 기존 사용했던 MySql을 택하였습니다. 

익숙하여 별 문제없으니 만족합니다.

MySql 5.x 와 8 버전에는 약간 차이가 있으니 가능하면 최신인 8 버전을 사용하면 좋겠죠?

기능상의 문제로 중간에 업그레이드 하였습니다. 



## mail : postfix, dovecot

검색하니 발신은 postfix, 수신은 dovecot 을 사용하는 것이 정석 처럼 되어 있어

별 고민없이 셋팅 하였습니다.



## ssl : Let's Encrypt

![LetsEncrypt logo](/media/letsencrypt.png "LetsEncrypt")

이것도 검색하니 무료의 정석이어서...  

HTTPS를 적용하지 않으셨다면 쉬우니 얼른 하시길



## version control : Git, GitHub 

![git logo](/media/git.png "git")

이제는 git 으로 모두 통일되어 버전관리에 한해서는 다른 것을 고려할 이유가 없는 것 같습니다.

GitHub, GitLab, gitbucket 등의 git 호스팅 서비스가 있는데 privacy저장소는 GitLab에서만 무료로 제공해썼기 때문에 gitlab을 썼었는데 이제는 github에서도 무료제공을 시작했습니다. 

큰 차이는 없겠지만 좀 더 눈에 익은 UI를 사용하기 위해 gitlab에서 github로 변경하였습니다.



## 분석 : google analytics 

![google analytics logo](/media/ga.png "google analytics")

이것도 무료로 쓰려면 당연히 고르는 것 아닌가요? ㅎㅎ

고객분석을 잘 해보려고 사용 중 입니다.

앞으로 하고 싶은것 docker : 개념이 좋아서 써보고 싶은데, 아직 바빠서 이건 시도해 보지 못했습니다.

추후에 docker + 배포 자동화 를 해보려고 합니다.



## 개발스택 

최신 기술들은 셋팅도 점점 쉬워지고, 점점 1인 개발에 도움을 주는 것 같습니다.

이러다 언젠가는 개발자가 필요없어지는 때가 금방 올 수도 있겠다는 긴장감도 살짝 들지만, 좋은 것 같네요.

인터넷에 보면 Python을 해야하나? Vue를 해야하나? 등의 의견은 많이 있는데

이 는 어떤 stack을 선택했나 하는 내용은 많이 없는 것 같아 고민하시는 분들을 위해 한번 써 보았습니다.