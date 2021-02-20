// 웹팩을 이용하면 확장자 써줄 필요 없지만 기본적인 툴(module)을 이용해본다.
import { BaseComponent } from './../../component.js';
// React처럼 UI 컴포넌트를 파일로 만드는구나.. tsx?파일이 TS-xml이었나?
// page처럼 요소를 만들고, 붙일 수 있는 함수를 만든다.
export class ImageComponent extends BaseComponent<HTMLElement>{

    // 생성자를 이용하여 요소를 동적으로 만들었다. (사용자의 입력을 받아 생성)
    // 사용자에게 전달받은 소스를 innerHTML로 생성하는 것은 위험하다.
    constructor(title: string, url: string){

        super(`<section class="image">
                <div class="image__holder"><img class="image__thumbnail"></div>
                <p class="image__title"></p>
            </section>`)
        
        // super에서 만들어진 this.element의 필요한 부분만 업데이트 해준다. (사용자 입력값을 이용하여)
        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

}