import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';

var mobileMenu = new MobileMenu();

var featureItems = new RevealOnScroll($(".feature-item"), "85%");
var testimonials = new RevealOnScroll($(".testimonial"), "60%");