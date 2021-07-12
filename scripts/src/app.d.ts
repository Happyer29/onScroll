export declare class onScroll {
    private _customConsole;
    private _viewportHeightPadding;
    private _viewportWidthPadding;
    private _element;
    private _isAnimateEnd;
    private _isVisible;
    private _currentAnim;
    constructor(id: string);
    private animate;
    private viewportChecker;
    private isBlockInViewport;
}
