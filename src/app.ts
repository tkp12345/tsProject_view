import {PageCompnent} from "./components/page/page";

class App {
    private readonly page: PageCompnent
    //application 에 추가할 최상위 root 요소를 받아온다
    constructor(appRoot: HTMLElement) {
        //새로운 페이지 컴포넌트를 만듬
        this.page = new PageCompnent();
        this.page.attachTo(appRoot);
    }
}
//dom 요소에 'document' 를 받아와 페이지를 추가한다
new App(document.querySelector('.document')! as HTMLElement)