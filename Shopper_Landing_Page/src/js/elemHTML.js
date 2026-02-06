export default class elemHTML {
    elem = document.createElement('div');

    setClasses(className = ' ') {
        thic.elem.classList.addList(className);
    }

    removeClasses(className = ' ') {
        thic.elem.classList.remove(className);
    }

    render(container = 'body') {
        if (!container) {
            return;
        }
        document.querySelector(container).append(this.elem);
    }

    addInnerHTML(content) {
        if (!content) {
            return;
        }
        this.elem.insertAdjacentHTML('beforebegin', content);
    }
}