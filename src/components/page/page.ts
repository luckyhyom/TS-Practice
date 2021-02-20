import { BaseComponent } from '../component.js';

// 클래스에서 요소를 만든다. (html에 요소를 작성하여 선택하지 않고.)
export class PageComponent extends BaseComponent<HTMLUListElement> {
    constructor(){
        // BaseComponent의 생성자인 super().. 규약에 따라 string을 넣어줌
        super('<ul class"page">This is PageComponent!</ul>')
    }
}

// createEle('li'); ... ('img')...