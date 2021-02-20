// page를 이용해보자.
// .js라고 명시해줘야한다. 전부 js로 컴파일 되기 때문
// node에서 webpack을 사용하면 확장자를 사용하지 않아도 되지만
// 지금은 type="module"로 sciprt를 불러오고 잇기 떄문에 .js 확장자를 붙여줘야한다.
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponent } from './components/page/page.js';

//
class App {
    private readonly page: PageComponent;

    // App을 추가 할 최상위 루트를 받아옴
    constructor(appRoot: HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title','https://picsum.photos/600/300');
        // TS를 쓰기때문에 'beforeend'같은 것이 자동으로 추천되어 편함.
        image.attachTo(appRoot,'beforeend');

        // 이곳에 만든것을 계속 추가한다? 어떻게 동적으로 넣는거지? 반복문으로 읽나?
        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot,'beforeend');
        const todo = new TodoComponent('Todo Title','Work out!')
        todo.attachTo(appRoot,'beforeend');

    }
}

// 어플리케이션이 실행되면서 무언가가 변경되는 것이 아니라, 개발할때 정확하게 정해져 있기 때문에 -> 동적X 정적O
new App(document.querySelector('.document')! as HTMLElement) //null 아니고, html요소야.

// HTML Tag는 JS 오브젝트로 변환되어서 브라우저가 이해한다. 변환된 각각의 태그: Node