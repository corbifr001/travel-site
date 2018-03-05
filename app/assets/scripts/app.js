import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();

var featureItems = new RevealOnScroll($(".feature-item"), "85%");
var testimonials = new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();