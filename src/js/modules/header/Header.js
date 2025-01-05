import { BREAKPOINTS } from '../../config/constants';
import { $ } from '../../utils/dom';

export class Header {
    constructor() {
        this.header = $('.header');
        this.scrollThreshold = 50;
        
        if (this.header) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll() {
        if (window.scrollY > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}