const style = document.createElement('style');

let screen_height = window.screen.height;
let screen_width = window.screen.width;

let url = "/static/iconos/monito-PhotoRoom_1.png";

style.innerHTML = `
            .toast {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                right: -10;
                background-color: #333;
                color: #fff;
                padding: 15px;
                width: 300px;
                margin: 15px;
            }

            .toast_container {
                position: fixed;
                bottom: -50px;
                border-radius: 5px;
                right: -10;
                padding: 15px;
                width: 100%;
                transform: translateY(100%);
            }

            .toast_container::after {
                content:url(${url});
                position:absolute; /*or absolute*/
                z-index:100000; /*a number that's more than the modal box*/
                left: 60%;
                top: -200px;
                height: 50px;
                width: 50px;
            }

            .toast__show {
                transform: translateY(${-60}px);
                transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
            }

            .toast__hide {
                transform: translateY(${60}px);
                transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
            }
        `;
document.head.appendChild(style);


class Notify {
    constructor(message) {
        this._message = message;
        this.toast = document.createElement("div");

        this.toast_container = document.createElement("div");
        this.toast_container.classList.add("toast_container");
        this.toast_container.appendChild(this.toast);

        this.init();
    }

    set message(value) { 
        this._message = value;
        this.reload();
    }

    get message() { 
        return this._message;
    }

    init() { 
        this.toast.classList.add("toast");
        this.toast.innerHTML = `
            <span>${this.message}</span>
        `;
        document.body.appendChild(this.toast_container);
    }

    reload() { 
        this.toast.innerHTML = `
            <span>${this.message}</span>
        `;
    }


    show() {
        this.toast_container.classList.remove("toast__hide");
        this.toast_container.classList.add("toast__show");
        setTimeout(() => {
            this.toast_container.classList.remove("toast__show");
            this.toast_container.classList.add("toast__hide");
        }, 3000);
    }

    showAfter(time) {
        setInterval(() => { this.show(); }, time);
    }
}

export { Notify };