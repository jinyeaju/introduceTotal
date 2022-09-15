//#1. 헤더공간 구성
Vue.component("header-el", {
    data : () => {
        return {
            global_menu : ["summary", "performance", "motive&aspiration", "etc"]
        }   
    },
    methods : {
        openFunc(evt){
            const $menuPart = document.querySelector("header .wrap .menu ul");
            const $openBtn = document.querySelector("header .wrap .menuOpenBtn img");
            const $active_btn = $menuPart.classList.contains("active");
            if(!$active_btn){
                $openBtn.setAttribute("src", "./img/menu_close.png");
                $menuPart.classList.add("active");
            }
            else{
                $openBtn.setAttribute("src", "./img/menu_open.png");
                $menuPart.classList.remove("active");
            }
        },

    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <router-link to="/"><img src="./img/logo_1.png" alt="포트폴리오 로고"></router-link>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="menu in global_menu" @click="openFunc" >
                        <router-link class="gt" :to="'/'+menu">{{menu}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="menuOpenBtn">
                <img src="./img/menu_open.png" @click="openFunc" alt="메뉴 버튼">
            </div>

        </div>
    </header>
    `
});

const gitDeco = {
    template : `
    <section id="gitDeco">
        <div class="wrap">
            <h3 class="gt clickGit">click Me!!</h3>
            <a href="https://github.com/jinyeaju" target="_blank"><img src="./img/github_1.png" alt="Git허브 연결 아이콘"></a>
        </div>
    </section>
    `
}

// 요약 시작
const pageSummary = {
    template : `
    <section id="summary">
        <div class="wrap">
            <h3>자기소개서(요약)</h3>
            <a href="https://myportfolio0827.netlify.app" target="_blank">이력서&포트폴리오(클릭)</a>
            <div class="perfom">
                <h3>주요실적</h3>
                <div class="projectB">
                    <p>
                        <span>
                            MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)
                        </span>
                        요즘 사람들은 만날 때 성격을 쉽게 알 수 있는 성격 지표 검사인 MBTI 유형을 서로 묻고는 합니다. 그래서 저는 MBTI를 통해서 사용자가 최적으로 만족할만한 클래스를 추천하는 사이트를 만들어보자는 생각으로 CUSCLA를 제작하게 되었습니다. 사용 언어를 PHP로 정한 데에는 흥미를 느꼈던 언어이기도 하지만 클래스 정보를 등록/조회/수정하는 과정에서 HTML 구조 사이에 데이터베이스 명령어나 스크립트 언어가 포함되어 동작하는 직관적인 스크립트 언어라는 점이 큰 이점이라고 생각되었기 때문입니다.
                    </p>
                </div>
                <div class="projectC">
                    <p>
                        <span>
                            포트폴리오 케이스
                        </span>
                        Vue.js를 배우며 컴포넌트를 활용하는 싱글 페이지 애플리케이션(SPA)를 배우게 되었습니다. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 변경이 필요 없는 부분은 갱신하지 않고 새로고침도 발생하지 않아 전체적인 트래픽이 감소하고 사용성도 좋습니다. 이러한 이유로 최근 Vue.js를 사용하여 프로그래밍하는 곳이 많아지고 있고 HTML 파일엔 중요한 정보는 남지 않아 추후엔 보안에도 용이할 것 같다는 생각이 들었기 때문에 Vue.js를 활용하여 포트폴리오 케이스를 제작하게 되었습니다.
                    </p>
                </div>
            </div>
            
            <div class="moti">
                <h3>지원동기 & 입사 후 포부</h3>
                <div class="com_one">
                    <p>
                        제가 지원하게 된 동기는 전공에서 배운 기초지식과 직업훈련기관에서 배운 HTML, CSS, Javascript, JQuery, PHP, Vue.js, MySQL등의 기술들을 최대한 활용하여 충분히 제 능력을 발휘하고 더 나은 모습으로 성장할 수 있는 확신과 보람을 느낄 수 있는 회사라고 생각했기 때문입니다.
                    </p>
                </div>
                <div class="com_two">
                    <p>
                        또한 프론트엔드 프레임워크에도 관심이 많아 새로운 기술에 대한 지식 추구를 멈추지 않고 있으며 입사해서도 계속 성장하기 위한 노력을 멈추지 않으며 회사가 지향하는 가치와 함께 하겠습니다. 비록 실무경력은 없으나 도전과 창조의 정신이 다른 어떤 누구보다 앞서 있어야 한다는 확고한 마음가짐을 지니고 있기에 지식과 열정을 바탕으로 주어진 업무에 신속하게 적응해나갈 것이며 능동적인 자세로 배우고 협업하며 회사가 더욱 발전하는 데 기여하겠습니다. 감사합니다.
                    </p>
                </div>
            </div>   
            
            <div class="etc">
                <h3>성격의 장점</h3>
                <div class="social">
                    <p>
                        <span>첫째, ‘피할 수 없다면 즐겨라’를 실천하는 주도적이고 긍정적인 성격입니다. </span>
                        대학 시절 졸업작품을 준비하는 과정에서 초기 팀장의 급작스러운 사퇴와 다시 리셋된 주제 도출까지 문제를 겪게 되었을 때, 자진해서 팀장이 된 적이 있습니다. 졸업작품을 완성하기까지 시간은 턱없이 부족했고 소통 부재로 겪어야 했던 팀원들 간의 갈등 등 팀장의 역할을 맡고 팀을 재정비하기까지 우여곡절도 많았지만 스스로 소통의 중심에 서서 팀원들의 의견을 조율하였고 각자의 역할을 적절히 분배하여 부족하지만 졸업작품을 기한 내 완성할 수 있었습니다. 호기롭게 스스로 팀장을 맡았으나 팀장으로서 졸업작품을 여러 사람 앞에서 발표해야 한다는 것은 사실 적지 않은 부담감으로 다가왔습니다. 하지만 이 또한 피할 수 없다는 것을 알고 있었기에 작품에 대한 이해와 발표 연습을 수십 차례 반복해가며 다듬고 두려움도 극복해나갈 수 있었습니다. 1년 동안 준비한 졸업작품을 무사히 발표하고 나서 열정을 다했을 때의 뿌듯한 감정에 대해 진실로 느낄 수 있게 되었고 이는 자신감으로 연결되어 제 삶의 가치관이 될 수 있었습니다. ‘피할 수 없다면 즐겨라.’ 저는 당면한 과제에 대해서는 피하지 않고 긍정적인 자세로, 자신감을 가지고 해낼 것입니다.
                    </p>
                </div>
                <div class="hobby">
                    <p>
                        <span>둘째, 저는 다정한 성격으로 사람들의 성향을 세심하게 관찰하고 파악할 수 있다는 점입니다.</span>
                        평소 여러 취미 활동을 즐기고 있는데 그중에서 레진이라는 재료를 활용한 맞춤형 액세서리 제작을 가장 재미있게 하고 있습니다. 액세서리를 만들어서 선물하면 그 자체만으로도 만족스럽고 기쁘지만 지인들의 성향을 세심하게 관찰하여 선물 받는 사람의 특징이나 좋아하는 것, 의미 있는 문구 등을 생각하며 디자인한 것을 전하면 당사자의 기쁨과 함께 저에게는 두배 이상의 기쁨으로 돌아오는 것 같습니다. 이에 저는 항상 사용자의 입장에서 더 고민하며 디자인하고 그것을 구현해낼 수 있도록 노력 하고자 합니다. 그것은 분명 저의 보람이 될 것이 확실하기 때문입니다.
                    </p>
                </div>
                <div class="sense">
                    <p>
                        <span>마지막으로 저는 적극적이고 긍정적인 마인드를 바탕으로 일에 대한 Sense가 있다는 것이 저의 장점 입니다.</span>
                        이러한 저의 장점을 바탕으로 제가 입사하게 된다면 처음이기에 어려움이 많을 것이나, 신입사원으로서 열 정과 적극성을 가지고 성실한 자세를 바탕으로 소통하며 협력을 통한 업무 sense를 발휘한다면 반드시 회사가 성장, 발전하는 데 기여할 수 있을 것이라 감히 생각합니다.
                    </p>
                </div>
            </div>  

        </div>
    </section>
    `
}
// 요약 끝

const pagePerformance = {
    template : `
    <section id="performance">
        <div class="wrap">
            <div class="perfom">
                <h3>주요실적</h3>
                <div class="projectA">
                    <p>
                        저는 배화여자대학교 스마트 IT 학과(4년 과정)를 졸업했습니다. 이 과정에서는 한 가지 분야를 지정해서 배우는 것이 아니라 데이터베이스나 SW 테스팅, JAVA, 자료구조 등의 여러 가지 분야를 조금씩 배우는 과정으로 구성되어 있었습니다. 대학교 과정이 끝난 직후 저는 취업을 원하는 Front-End 분야의 실무를 공부해 보고 싶어져서 국비 지원을 통해 UI & UX 적응형 반응형 과정을 수료하게 되었습니다. 이전에는 배우지 못했던 디테일을 배우고 새로운 언어를 배우는 것에 재미를 느꼈습니다. 그중에 PHP와 Vue.js에 좀 더 흥미를 느끼게 되어 PHP를 활용하여 MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)를 제작하고 Vue.js를 활용하여 포트폴리오를 담을 수 있는 케이스를 제작하게 되었습니다.
                    </p>
                </div>
                <div class="projectB">
                    <p>
                        <span>
                            MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)
                        </span>
                        자신만의 사이트를 제작하고자 할 때 주제 잡기에 대한 많은 고민이 있었습니다. 아이디어 구상 과정에서 초반에는 고등학교까지 유치원 교사가 꿈이었던 것이 생각나서 어린이용 교육 사이트나 교육을 추천해주는 사이트를 제작해보고자 했었습니다. 하지만 특별한 포인트가 없는 사이트이고 밋밋하다고 생각이 되어 교육 사이트를 좀 더 특별하게 만들어줄 포인트가 없을까 고민하다가 요즘 사람들은 만날 때 전화번호보다는 카톡, 인스타그램 아이디를 교환하거나 성격을 쉽게 알 수 있는 성격 지표 검사인 MBTI 유형을 서로 묻고는 합니다. 그래서 저는 MBTI를 통해서 사용자가 최적으로 만족할만한 클래스를 추천하는 사이트를 만들어보자는 생각으로 CUSCLA를 제작하게 되었습니다. 사용 언어를 PHP로 정한 데에는 흥미를 느꼈던 언어이기도 하지만 클래스 정보를 등록/조회/수정하는 과정에서 HTML 구조 사이에 데이터베이스 명령어나 스크립트 언어가 포함되어 동작하는 직관적인 스크립트 언어라는 점이 큰 이점이라고 생각되었기 때문입니다. 
                    </p>
                </div>
                <div class="projectC">
                    <p>
                        <span>
                            포트폴리오 케이스
                        </span>
                        Vue.js를 배우며 컴포넌트를 활용하는 싱글 페이지 애플리케이션(Single Page Application, SPA)를 배우게 되었습니다. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 변경이 필요 없는 부분은 갱신하지 않고 새로고침도 발생하지 않아 전체적인 트래픽이 감소하고 사용성도 좋습니다. 이러한 이유로 최근 Vue.js를 사용하여 프로그래밍하는 곳이 많아지고 있고 HTML 파일엔 중요한 정보는 남지 않아 추후엔 보안에도 용이할 것 같다는 생각이 들었기 때문에 Vue.js를 활용하여 포트폴리오 케이스를 제작하게 되었습니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `
}
const pageMotiveAspiration = {
    template : `
    <section id="motive">
        <div class="wrap">
            <div class="moti">
                <h3>지원동기 & 입사 후 포부</h3>
                <div class="com_one">
                    <p>
                        제가 지원하게 된 동기는 전공에서 배운 기초지식과 직업훈련기관에서 배운 HTML, CSS, Javascript, JQuery, PHP, Vue.js, MySQL등의 기술들을 최대한 활용하여 충분히 제 능력을 발휘하고 더 나은 모습으로 성장할 수 있는 확신과 보람을 느낄 수 있는 회사라고 생각했기 때문입니다.
                    </p>
                </div>
                <div class="com_two">
                    <p>
                        또한 프론트엔드 프레임워크에도 관심이 많아 새로운 기술에 대한 지식 추구를 멈추지 않고 있으며 입사해서도 계속 성장하기 위한 노력을 멈추지 않으며 회사가 지향하는 가치와 함께 하겠습니다. 비록 실무경력은 없으나 도전과 창조의 정신이 다른 어떤 누구보다 앞서 있어야 한다는 확고한 마음가짐을 지니고 있기에 지식과 열정을 바탕으로 주어진 업무에 신속하게 적응해나갈 것이며 능동적인 자세로 배우고 협업하며 회사가 더욱 발전하는 데 기여하겠습니다. 감사합니다.
                    </p>
                </div>
            </div>    
        </div>
    </section>
    `
}

const pageEtc = {
    template : `
    <section id="etc">
        <div class="wrap">
            <div class="etc">
                <h3>성격의 장점</h3>
                <div class="social">
                    <p>
                        <span>첫째, ‘피할 수 없다면 즐겨라’를 실천하는 주도적이고 긍정적인 성격입니다. </span>
                        대학시절 졸업작품을 준비하는 과정에서 초기 팀장의 급작스런 사퇴와 다시 리셋된 주제 도출까지 문제를 겪게 되었을 때, 자진해서 팀장이 된 적이 있습니다. 졸업작품을 완성하기까지 시간은 턱없이 부 족했고 소통부재로 겪어야 했던 팀원들 간의 갈등 등 팀장의 역할을 맡고 팀을 재정비하기까지 우여 곡절도 많았지만 스스로 소통의 중심에 서서 팀원들의 의견을 조율하였고 각자의 역할을 적절히 분배 하여 부족하지만 졸업작품을 기한 내 완성할 수 있었습니다. 호기롭게 스스로 팀장을 맡았으나 팀장으 로써 졸업작품을 여러 사람들 앞에서 발표해야 한다는 것은 사실 적지 않은 부담감으로 다가왔습니다. 하지만 이 또한 피할 수 없다는 것을 알고 있었기에 작품에 대한 이해와 발표 연습을 수십 차례 반복 해가며 다듬고 두려움도 극복해나갈 수 있었습니다. 1년동안 준비한 졸업작품을 무사히 발표하고나서 열정을 다했을 때의 뿌듯한 감정에 대해 진실로 느낄 수 있게 되었고 이는 자신감으로 연결되어 제 삶의 가치관이 될 수 있었습니다. ‘피할 수 없다면 즐겨라’ 저는 당면한 과제에 대해서는 피하지 않고 긍정적인 자세로, 자신감을 가지고 해낼 것입니다.    
                    </p>
                </div>
                <div class="hobby">
                    <p>
                        <span>둘째, 저는 다정한 성격으로 사람들의 성향을 세심하게 관찰하고 파악할 수 있다는 점입니다.</span>
                        평소 여러 취미 활동을 즐기고 있는데 그 중에서 레진이라는 재료를 활용한 맞춤형 액세서리 제작을 가장 재미있게 하고 있습니다. 액세서리를 만들어서 선물하면 그 자체만으로도 만족스럽고 기쁘지만 지인들의 성향을 세심하게 관찰하여 선물 받는 사람의 특징이나 좋아하는 것, 의미있는 문구 등을 생 각하며 디자인 한 것을 전하면 당사자의 기쁨과 함께 저에게는 두배 이상의 기쁨으로 돌아오는 것 같 습니다. 이에 저는 항상 사용자의 입장에서 더 고민하며 디자인하고 그것을 구현해낼 수 있도록 노력 하고자합니다. 그것은 분명 저의 보람이 될 것이 확실하기 때문입니다.   
                    </p>
                </div>
                <div class="sense">
                    <p>
                        <span>마지막으로 저는 적극적이고 긍정적인 마인드를 바탕으로 일에 대한 Sense가 있다는 것이 저의 장점 입니다.</span>
                        이러한 저의 장점을 바탕으로 제가 입사하게 된다면 처음이기에 어려움이 많을 것이나, 신입사원으로서 열 정과 적극성을 가지고 성실한 자세를 바탕으로 소통하며 협력을 통한 업무 sense를 발휘한다면 반드시 회 사가 성장.발전하는데 기여할 수 있을 것이라 감히 생각합니다.
                    </p>
                </div>
            </div>            
        </div>
    </section>
    `
}


const rtRoutes = [
    {
        path : "/",
        component : pageSummary
    },
    {
        path : "/summary",
        component : pageSummary
    },
    {
        path : "/performance",
        component : pagePerformance
    },
    {
        path : "/motive&aspiration",
        component : pageMotiveAspiration
    },
    {
        path : "/etc",
        component : pageEtc
    },
];

const router1 = new VueRouter({
    routes : rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footer = {
    template : `
    <footer><p>Copyrights &copy; ${year} Jin YeaJu Portfolio</p></footer>
    `
}

new Vue({
    el : "#app",
    router : router1,
    components : {
        "gitdeco-el" : gitDeco,
        "footer-el" : footer,
    },

});




