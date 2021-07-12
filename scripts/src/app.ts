import anime from "animejs";
import { runInThisContext } from "vm";

export class onScroll {
  private _customConsole = document.getElementById("window");
  private _viewportHeightPadding = window.innerHeight * 0.05;
  private _viewportWidthPadding = window.innerWidth * 0.05;

  private _element: HTMLElement;
  private _isAnimateEnd: boolean = true;
  private _isVisible: boolean = false;

  private _currentAnim;

  constructor(id: string) {
    this._element = document.getElementById(id);
    this._element.style.opacity = "0";
    this._element.style.marginLeft = "-10%";
    this._currentAnim = anime({
      targets: this._element,
      opacity: [0, 1],
      marginLeft: 0,
      //direction: reverse ? "reverse" : "normal",
      easing: "easeInOutQuad",
      duration: 2000,
      complete: () => {
        this._isAnimateEnd = true;
      },
      autoplay: false,
    });
    this.viewportChecker();

    document.addEventListener("scroll", (e) => {
      this.viewportChecker();
    });
    //document.createEvent();
    // anime({
    //   target: this._element
    // })
  }

  private animate(reverse: boolean = false) {
    if (this._isAnimateEnd) {
      //if (this._currentAnim.completed) {
      if (reverse) this._currentAnim.reverse();
      this._currentAnim.play();

      //}
      // if (this._currentAnim.paused) this._currentAnim.play();
    }
  }

  private viewportChecker() {
    let rect = this._element.getBoundingClientRect();
    var config = `x: ${rect.x} \r y: ${rect.y} \r left: ${rect.left} \r right: ${rect.right} \r top: ${rect.top} \r bottom: ${rect.bottom} \r scrolly ${window.scrollY}`;
    this._customConsole.innerText = config;
    if (this.isBlockInViewport(rect)) {
      this._customConsole.style.background = "green";
      this._isVisible = true;
    } else {
      this._isVisible = false;
      this.animate(true);
      this._customConsole.style.background = "#000";
    }

    if(this._isVisible) this.animate();
    else this.animate(true); 
  }

  private isBlockInViewport(rect: DOMRect) {
    if (
      rect.top - window.innerHeight + this._viewportHeightPadding <= 0 &&
      rect.bottom - this._viewportHeightPadding >= 0 &&
      rect.left - window.innerWidth + this._viewportWidthPadding <= 0 &&
      rect.right - this._viewportWidthPadding >= 0
    ) {
      return true;
    }
    return false;
  }
}
