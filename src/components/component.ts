// API가 있다면, BaseComponent를 여기저기 전달하여 의사소통하는 것 보다는
// 외부에서 이용 가능한 Interface를 쓰는 것이 좋다..
// interface 보충공부하기. 없어도 실행 되는데 지금 당장은..?
export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition):void;
}

/**
 * Encapsulate the HTML element creation
 * 외부에서는 어떻게 element를 만드는지 알 필요가 없이
 * 어떤 것을 만들고 싶은지 string형식으로 전달 하면, 그것을 바탕으로 element를 만들어준다.
 */

export class BaseComponent<T extends HTMLElement> implements Component{
    // 요소 안의 상태들은 변경이 가능하지만, 요소 자체를 변경하는 것은 불가능해진다.
    protected readonly element: T;


    // Page Component에는 어떤 API가 있으면 좋을까?
    // 외부에서 page를 만들어서 필요한 곳에 이 Page를 추가할수있는 API !
    // title,url은 어떻게?
    constructor(htmlString: string){
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
        parent.insertAdjacentElement(position, this.element);   
    }
}