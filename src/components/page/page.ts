/*********************************************************
 * PageCompnent 가 만들어지면
 * 1. ul 엘레멘트 요소가 만들어지고
 * 2. attachTo 라는 외부에서 사용할수있는 api 가있다
 *********************************************************/
export class PageCompnent {
     private element: HTMLUListElement;

    //필요한 페이지 컨테이너 요소
    constructor() {
        //'ul' 태그 요소만듬
        this.element = document.createElement('ul');
        this.element.setAttribute('class','page');
        this.element.textContent = 'This is pageComponent'
    }

    //외부에서 PageCompnent를 만들어서 필요한곳에다가 이페이지를  추가할수있게

    //parent : 추가하고싶은 요소 (인자로 전달받은 부모 컨테이너에 우리페이지를 추가할수있도록)
    //position : 어떤 position 어디에 추가 할지
    attachTo(parent: HTMLElement, position: InsertPosition='afterbegin'){
        parent.insertAdjacentElement(position, this.element)
    }
}