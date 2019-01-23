import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SVG_ICONS} from './svg-icons.const';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  public svgIcons: any = {
    [SVG_ICONS.excel]: '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 88.030066 86" version="1.1" id="svg2">\n\n  <path\n d="m 46.04,0 5.94,0 c 0,2.67 0,5.33 0,8 10.01,0 20.02,0.02 30.03,-0.03 1.69,0.07 3.55,-0.05 5.02,0.96 1.03,1.48 0.91,3.36 0.98,5.06 -0.05,17.36 -0.03,34.71 -0.02,52.06 -0.05,2.91 0.27,5.88 -0.34,8.75 -0.4,2.08 -2.9,2.13 -4.57,2.2 -10.36,0.03 -20.73,-0.02 -31.1,0 0,3 0,6 0,9 l -6.21,0 C 30.53,83.23 15.26,80.67 0,78 0,54.67 0,31.34 0,8.01 15.35,5.34 30.7,2.71 46.04,0 z"\n    id="path10"\n\n    style="fill:#207245" />\n  <path\n    d="m 51.98,11 c 11,0 22,0 33,0 0,21 0,42 0,63 -11,0 -22,0 -33,0 0,-2 0,-4 0,-6 2.67,0 5.33,0 8,0 0,-2.33 0,-4.67 0,-7 -2.67,0 -5.33,0 -8,0 0,-1.33 0,-2.67 0,-4 2.67,0 5.33,0 8,0 0,-2.33 0,-4.67 0,-7 -2.67,0 -5.33,0 -8,0 0,-1.33 0,-2.67 0,-4 2.67,0 5.33,0 8,0 0,-2.33 0,-4.67 0,-7 -2.67,0 -5.33,0 -8,0 0,-1.33 0,-2.67 0,-4 2.67,0 5.33,0 8,0 0,-2.33 0,-4.67 0,-7 -2.67,0 -5.33,0 -8,0 0,-1.33 0,-2.67 0,-4 2.67,0 5.33,0 8,0 0,-2.33 0,-4.67 0,-7 -2.67,0 -5.33,0 -8,0 0,-2 0,-4 0,-6 z"\n    id="path48"\n    style="fill:#ffffff" />\n  <path\n    d="m 63.98,17 c 4.67,0 9.33,0 14,0 0,2.33 0,4.67 0,7 -4.67,0 -9.33,0 -14,0 0,-2.33 0,-4.67 0,-7 z"\n    id="path58"\n\n    style="fill:#207245" />\n  <path\n    d="m 29.62,26.37 c 2.26,-0.16 4.53,-0.3 6.8,-0.41 -2.67,5.47 -5.35,10.94 -8.07,16.39 2.75,5.6 5.56,11.16 8.32,16.76 -2.41,-0.14 -4.81,-0.29 -7.22,-0.46 -1.7,-4.17 -3.77,-8.2 -4.99,-12.56 -1.36,4.06 -3.3,7.89 -4.86,11.87 -2.19,-0.03 -4.38,-0.12 -6.57,-0.21 2.57,-5.03 5.05,-10.1 7.7,-15.1 -2.25,-5.15 -4.72,-10.2 -7.04,-15.32 2.2,-0.13 4.4,-0.26 6.6,-0.38 1.49,3.91 3.12,7.77 4.35,11.78 1.32,-4.25 3.29,-8.25 4.98,-12.36 z"\n    id="path72"\n\n    style="fill:#ffffff" />\n  <path\n    d="m 63.98,28 c 4.67,0 9.33,0 14,0 0,2.33 0,4.67 0,7 -4.67,0 -9.33,0 -14,0 0,-2.33 0,-4.67 0,-7 z"\n    id="path90"\n\n    style="fill:#207245" />\n  <path\n    d="m 63.98,39 c 4.67,0 9.33,0 14,0 0,2.33 0,4.67 0,7 -4.67,0 -9.33,0 -14,0 0,-2.33 0,-4.67 0,-7 z"\n    id="path108"\n\n    style="fill:#207245" />\n  <path\n    d="m 63.98,50 c 4.67,0 9.33,0 14,0 0,2.33 0,4.67 0,7 -4.67,0 -9.33,0 -14,0 0,-2.33 0,-4.67 0,-7 z"\n    id="path114"\n\n    style="fill:#207245" />\n  <path\n    d="m 63.98,61 c 4.67,0 9.33,0 14,0 0,2.33 0,4.67 0,7 -4.67,0 -9.33,0 -14,0 0,-2.33 0,-4.67 0,-7 z"\n    id="path120"\n    style="fill:#207245" />\n</svg>',
    [SVG_ICONS.left_arrow_in_box]: '<svg id="closeLeftSide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31" height="43" viewBox="0 0 31 43"><defs><style> .cls-1 {fill: #acb2bf;}  #closeLeftSide .cls-1, #closeLeftSide .cls-3 {fill-rule: evenodd;}  #closeLeftSide .cls-2, #closeLeftSide .cls-4 {fill: #e8e4e4;}  #closeLeftSide .cls-2 {filter: url(#filterCloseLeftSide);}  #closeLeftSide .cls-3 {fill: #fff;}  #closeLeftSide .cls-4 {filter: url(#filterCloseLeftSide-2);}</style><filter id="filterCloseLeftSide" x="0" y="0" width="31" height="36" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="0" y="0" width="31" height="36" result="image" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzMSAzNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIzMSIgeTE9IjE4IiB4Mj0iMCIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4ZTVlNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDQxIiBzdG9wLWNvbG9yPSIjZThlNWU1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xMzMiIHN0b3AtY29sb3I9IiNlYWU2ZTYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjRmMmYyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMSIgaGVpZ2h0PSIzNiIvPgo8L3N2Zz4K"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="filterCloseLeftSide-2" x="48" y="0" width="31" height="36" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="48" y="0" width="31" height="36" result="image" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzMSAzNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIzMSIgeTE9IjE4IiB4Mj0iMCIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4ZTVlNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDQxIiBzdG9wLWNvbG9yPSIjZThlNWU1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xMzMiIHN0b3AtY29sb3I9IiNlYWU2ZTYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjRmMmYyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMSIgaGVpZ2h0PSIzNiIvPgo8L3N2Zz4K"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><path class="cls-1" d="M24,36h7l-7,7V36Z"/><rect class="cls-2" width="31" height="36"/><path id="Forma_1_copy_2" data-name="Forma 1 copy 2" class="cls-3" d="M19.986,26.824a0.592,0.592,0,0,0,.843,0,0.607,0.607,0,0,0,0-.851l-7.414-7.487L20.829,11a0.607,0.607,0,0,0,0-.851,0.593,0.593,0,0,0-.843,0L12.15,18.06a0.607,0.607,0,0,0,0,.851Z"/><path id="Forma_1_copy" data-name="Forma 1 copy" class="cls-1" d="M18.986,26.824a0.592,0.592,0,0,0,.843,0,0.607,0.607,0,0,0,0-.851l-7.414-7.487L19.829,11a0.607,0.607,0,0,0,0-.851,0.593,0.593,0,0,0-.843,0L11.15,18.06a0.607,0.607,0,0,0,0,.851Z"/><image width="31" height="36" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAkAgMAAAAMfQnEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEXDydjDydgAAABvdbC1AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiCw4JJAYXDSkXAAAAGElEQVQY02MIhYAQBgcGMGAZZRDLgAUdADAiDlcJs8j+AAAAAElFTkSuQmCC"/></svg>',
    [SVG_ICONS.right_arrow_in_box]: '<svg id="openLeftSide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31" height="43" viewBox="0 0 31 43"><defs><style> #openLeftSide .cls-1 {fill: #acb2bf;}  #openLeftSide .cls-1, #openLeftSide .cls-3 {fill-rule: evenodd;}  #openLeftSide .cls-2, #openLeftSide .cls-4 {fill: #e8e4e4;}  #openLeftSide .cls-2 {filter: url(#filterOpenLeftSide);}  #openLeftSide .cls-3 {fill: #fff;}  #openLeftSide .cls-4 {filter: url(#filterOpenLeftSide-2);}</style><filter id="filterOpenLeftSide" x="-48" y="0" width="31" height="36" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="-48" y="0" width="31" height="36" result="image" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzMSAzNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIzMSIgeTE9IjE4IiB4Mj0iMCIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4ZTVlNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDQxIiBzdG9wLWNvbG9yPSIjZThlNWU1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xMzMiIHN0b3AtY29sb3I9IiNlYWU2ZTYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjRmMmYyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMSIgaGVpZ2h0PSIzNiIvPgo8L3N2Zz4K"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="filterOpenLeftSide-2" x="0" y="0" width="31" height="36" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="0" y="0" width="31" height="36" result="image" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzMSAzNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIzMSIgeTE9IjE4IiB4Mj0iMCIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4ZTVlNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDQxIiBzdG9wLWNvbG9yPSIjZThlNWU1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xMzMiIHN0b3AtY29sb3I9IiNlYWU2ZTYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjRmMmYyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMSIgaGVpZ2h0PSIzNiIvPgo8L3N2Zz4K"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><path class="cls-1" d="M24,36h7l-7,7V36Z"/><rect class="cls-4" width="31" height="36"/><path id="Forma_1_copy_2-2" data-name="Forma 1 copy 2" class="cls-3" d="M13.014,26.824a0.592,0.592,0,0,1-.843,0,0.607,0.607,0,0,1,0-.851l7.414-7.487L12.171,11a0.607,0.607,0,0,1,0-.851,0.593,0.593,0,0,1,.843,0L20.85,18.06a0.607,0.607,0,0,1,0,.851Z"/><path id="Forma_1_copy-2" data-name="Forma 1 copy" class="cls-1" d="M14.014,26.824a0.592,0.592,0,0,1-.843,0,0.607,0.607,0,0,1,0-.851l7.414-7.487L13.171,11a0.607,0.607,0,0,1,0-.851,0.593,0.593,0,0,1,.843,0L21.85,18.06a0.607,0.607,0,0,1,0,.851Z"/><image width="31" height="36" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAkAgMAAAAMfQnEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEXDydjDydgAAABvdbC1AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiCw4JJCm83BROAAAAGElEQVQY02MIhYAQBgcGMGAZZRDLgAUdADAiDlcJs8j+AAAAAElFTkSuQmCC"/></svg>',
    [SVG_ICONS.hotel]: '<svg id="hotelIcon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><defs><style> #hotelIcon .cls-1 {filter: url(#hotelFilter);}</style><filter id="hotelFilter" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#818181"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><g id="Hotel_Icon_" data-name="Hotel Icon  " class="cls-1"><rect y="48" width="50" height="2"/><rect x="44" y="9" width="2" height="39"/><rect x="4" y="9" width="2" height="39"/><rect x="6" y="9" width="38" height="2"/><rect x="37" y="4" width="2" height="5"/><rect x="11" y="4" width="26" height="2"/><rect x="11" y="6" width="2" height="3"/><rect x="18" width="2" height="4"/><rect x="20" width="10" height="2"/><rect x="30" width="2" height="4"/><rect x="18" y="36" width="14" height="2"/><rect x="29" y="38" width="2" height="10"/><rect x="19" y="38" width="2" height="10"/><g id="Window_10" data-name="Window 10"><rect x="35" y="36" width="7" height="2"/><rect x="35" y="38" width="2" height="5"/><rect x="35" y="43" width="7" height="2"/><rect x="40" y="38" width="2" height="5"/></g><g id="Window_9" data-name="Window 9"><rect x="8" y="36" width="7" height="2"/><rect x="8" y="38" width="2" height="5"/><rect x="8" y="43" width="7" height="2"/><rect x="13" y="38" width="2" height="5"/></g><g id="Window_8" data-name="Window 8"><rect x="35" y="25" width="7" height="2"/><rect x="35" y="27" width="2" height="5"/><rect x="35" y="32" width="7" height="2"/><rect x="40" y="27" width="2" height="5"/></g><g id="Window_7" data-name="Window 7"><rect x="26" y="25" width="7" height="2"/><rect x="26" y="27" width="2" height="5"/><rect x="26" y="32" width="7" height="2"/><rect x="31" y="27" width="2" height="5"/></g><g id="Window_6" data-name="Window 6"><rect x="17" y="25" width="7" height="2"/><rect x="17" y="27" width="2" height="5"/><rect x="17" y="32" width="7" height="2"/><rect x="22" y="27" width="2" height="5"/></g><g id="Window_5" data-name="Window 5"><rect x="8" y="25" width="7" height="2"/><rect x="8" y="27" width="2" height="5"/><rect x="8" y="32" width="7" height="2"/><rect x="13" y="27" width="2" height="5"/></g><g id="Window_4" data-name="Window 4"><rect x="35" y="14" width="7" height="2"/><rect x="35" y="16" width="2" height="5"/><rect x="35" y="21" width="7" height="2"/><rect x="40" y="16" width="2" height="5"/></g><g id="Window3"><rect x="26" y="14" width="7" height="2"/><rect x="26" y="16" width="2" height="5"/><rect x="26" y="21" width="7" height="2"/><rect x="31" y="16" width="2" height="5"/></g><g id="Window_2" data-name="Window 2"><rect x="17" y="14" width="7" height="2"/><rect x="17" y="16" width="2" height="5"/><rect x="17" y="21" width="7" height="2"/><rect x="22" y="16" width="2" height="5"/></g><g id="Window_1" data-name="Window 1"><rect x="8" y="14" width="7" height="2"/><rect x="8" y="16" width="2" height="5"/><rect x="8" y="21" width="7" height="2"/><rect x="13" y="16" width="2" height="5"/></g></g></svg>',
    [SVG_ICONS.calendar]: '<svg id="Calendar" width="19" height="19" viewBox="0 0 19 19"><defs><style> #Calendar .cls-1 {filter: url(#calendar1);}  #Calendar .cls-2, .cls-3 {fill: #d5d5d5;}  #Calendar .cls-3 {fill-rule: evenodd;}  #Calendar .cls-4 {filter: url(#calendar2);}</style><filter id="calendar1" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#7a7a7a"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="calendar2" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#818181"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><g id="Calaender_2" data-name="Calaender  " class="cls-1"><rect class="cls-2" y="7" width="2" height="12"/><rect class="cls-2" x="2" y="17" width="17" height="2"/><rect class="cls-2" x="17" y="7" width="2" height="10"/><rect class="cls-2" y="5" width="19" height="2"/><rect class="cls-2" x="7" y="2" width="5" height="3"/><rect class="cls-2" x="17" y="2" width="2" height="3"/><rect class="cls-2" y="2" width="2" height="3"/><rect class="cls-2" x="3" width="3" height="4"/><rect class="cls-2" x="13" width="3" height="4"/><path class="cls-3" d="M7,9H9v2H7V9Zm0,3H9v2H7V12ZM4,12H6v2H4V12Z"/><rect id="Rectangle_1473_copy" data-name="Rectangle 1473 copy" class="cls-2" x="4" y="9" width="2" height="2"/><rect class="cls-2" x="10" y="9" width="2" height="2"/><rect class="cls-2" x="10" y="12" width="2" height="2"/><rect class="cls-2" x="13" y="9" width="2" height="2"/><rect class="cls-2" x="13" y="12" width="2" height="2"/></g><g id="Hotel_Icon_" data-name="Hotel Icon  " class="cls-4"><rect x="-115" y="28" width="50" height="2"/><rect x="-71" y="-11" width="2" height="39"/><rect x="-111" y="-11" width="2" height="39"/><rect x="-109" y="-11" width="38" height="2"/><rect x="-78" y="-16" width="2" height="5"/><rect x="-104" y="-16" width="26" height="2"/><rect x="-104" y="-14" width="2" height="3"/><rect x="-97" y="-20" width="2" height="4"/><rect x="-95" y="-20" width="10" height="2"/><rect x="-85" y="-20" width="2" height="4"/><rect x="-97" y="16" width="14" height="2"/><rect x="-86" y="18" width="2" height="10"/><rect x="-96" y="18" width="2" height="10"/><g id="Window_10" data-name="Window 10"><rect x="-80" y="16" width="7" height="2"/><rect x="-80" y="18" width="2" height="5"/><rect x="-80" y="23" width="7" height="2"/><rect x="-75" y="18" width="2" height="5"/></g><g id="Window_9" data-name="Window 9"><rect x="-107" y="16" width="7" height="2"/><rect x="-107" y="18" width="2" height="5"/><rect x="-107" y="23" width="7" height="2"/><rect x="-102" y="18" width="2" height="5"/></g><g id="Window_8" data-name="Window 8"><rect x="-80" y="5" width="7" height="2"/><rect x="-80" y="7" width="2" height="5"/><rect x="-80" y="12" width="7" height="2"/><rect x="-75" y="7" width="2" height="5"/></g><g id="Window_7" data-name="Window 7"><rect x="-89" y="5" width="7" height="2"/><rect x="-89" y="7" width="2" height="5"/><rect x="-89" y="12" width="7" height="2"/><rect x="-84" y="7" width="2" height="5"/></g><g id="Window_6" data-name="Window 6"><rect x="-98" y="5" width="7" height="2"/><rect x="-98" y="7" width="2" height="5"/><rect x="-98" y="12" width="7" height="2"/><rect x="-93" y="7" width="2" height="5"/></g><g id="Window_5" data-name="Window 5"><rect x="-107" y="5" width="7" height="2"/><rect x="-107" y="7" width="2" height="5"/><rect x="-107" y="12" width="7" height="2"/><rect x="-102" y="7" width="2" height="5"/></g><g id="Window_4" data-name="Window 4"><rect x="-80" y="-6" width="7" height="2"/><rect x="-80" y="-4" width="2" height="5"/><rect x="-80" y="1" width="7" height="2"/><rect x="-75" y="-4" width="2" height="5"/></g><g id="Window3"><rect x="-89" y="-6" width="7" height="2"/><rect x="-89" y="-4" width="2" height="5"/><rect x="-89" y="1" width="7" height="2"/><rect x="-84" y="-4" width="2" height="5"/></g><g id="Window_2" data-name="Window 2"><rect x="-98" y="-6" width="7" height="2"/><rect x="-98" y="-4" width="2" height="5"/><rect x="-98" y="1" width="7" height="2"/><rect x="-93" y="-4" width="2" height="5"/></g><g id="Window_1" data-name="Window 1"><rect x="-107" y="-6" width="7" height="2"/><rect x="-107" y="-4" width="2" height="5"/><rect x="-107" y="1" width="7" height="2"/><rect x="-102" y="-4" width="2" height="5"/></g></g></svg>\n',
    [SVG_ICONS.noResults]: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><style> #NoResults.cls-1 {fill: #c3c9d8;fill-rule: evenodd;opacity: 0.8;}</style></defs><path id="NoResults" data-name="NoResults" class="cls-1" d="M97.447,84.19L74.5,61.248A44.146,44.146,0,0,1,61.248,74.5L84.19,97.447A9.374,9.374,0,1,0,97.447,84.19Zm-22.253-46.5a37.5,37.5,0,1,0-37.5,37.5A37.5,37.5,0,0,0,75.194,37.695Zm-37.5,28.124A28.124,28.124,0,1,1,65.819,37.695,28.155,28.155,0,0,1,37.695,65.819ZM15.82,37.695h6.25A15.643,15.643,0,0,1,37.695,22.07V15.82A21.9,21.9,0,0,0,15.82,37.695Z"/></svg>',
    [SVG_ICONS.next]: '<svg id="next-icon" width="10" height="20" viewBox="0 0 10 20"><defs><style>#next-icon .cls-1 {fill: #acb2bf;fill-rule: evenodd;}</style></defs><path id="Forma_1_copy_3" data-name="Forma 1 copy 3" class="cls-1" d="M1.154,19.793a0.626,0.626,0,0,1-.93,0,0.745,0.745,0,0,1,0-1L8.4,10,0.224,1.21a0.745,0.745,0,0,1,0-1,0.626,0.626,0,0,1,.93,0L9.8,9.5a0.745,0.745,0,0,1,0,1Z"/></svg>',
    [SVG_ICONS.back]: '<svg id="back" xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20"><style>#back .cls-1 {fill: #acb2bf;fill-rule: evenodd;}</style><path id="Forma_1_copy_3" data-name="Forma 1 copy 3" class="cls-1" d="M8.846,19.793a0.626,0.626,0,0,0,.93,0,0.746,0.746,0,0,0,0-1L1.6,10,9.776,1.21a0.745,0.745,0,0,0,0-1,0.626,0.626,0,0,0-.93,0L0.2,9.5a0.746,0.746,0,0,0,0,1Z"/></svg>',
    [SVG_ICONS.round_close]: '<svg id="round-close" width="20" height="20" viewBox="0 0 20 20"><style>#round-close .cls-1 {fill: #acb2bf;}  #round-close .cls-1, #round-close .cls-2 {fill-rule: evenodd;}  #round-close .cls-2 {fill: #285a84;}</style><path id="Delete" class="cls-2" d="M10.355,0.012A9.988,9.988,0,1,0,20.344,10,9.987,9.987,0,0,0,10.355.012ZM14.649,12.7l-1.59,1.588a36.688,36.688,0,0,0-2.7-2.7,37.178,37.178,0,0,0-2.7,2.7L6.061,12.7a31.146,31.146,0,0,0,2.7-2.7,30.751,30.751,0,0,0-2.7-2.7L7.652,5.707s2.538,2.7,2.7,2.7,2.7-2.7,2.7-2.7L14.649,7.3a36.616,36.616,0,0,0-2.7,2.7C11.946,10.183,14.649,12.7,14.649,12.7Z"/></svg>',
    [SVG_ICONS.calendar]: '<svg id="Calendar" width="19" height="19" viewBox="0 0 19 19"><defs><style> #Calendar .cls-1 {filter: url(#calendar1);}  #Calendar .cls-2, .cls-3 {fill: #d5d5d5;}  #Calendar .cls-3 {fill-rule: evenodd;}  #Calendar .cls-4 {filter: url(#calendar2);}</style><filter id="calendar1" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#7a7a7a"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="calendar2" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#818181"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><g id="Calaender_2" data-name="Calaender  " class="cls-1"><rect class="cls-2" y="7" width="2" height="12"/><rect class="cls-2" x="2" y="17" width="17" height="2"/><rect class="cls-2" x="17" y="7" width="2" height="10"/><rect class="cls-2" y="5" width="19" height="2"/><rect class="cls-2" x="7" y="2" width="5" height="3"/><rect class="cls-2" x="17" y="2" width="2" height="3"/><rect class="cls-2" y="2" width="2" height="3"/><rect class="cls-2" x="3" width="3" height="4"/><rect class="cls-2" x="13" width="3" height="4"/><path class="cls-3" d="M7,9H9v2H7V9Zm0,3H9v2H7V12ZM4,12H6v2H4V12Z"/><rect id="Rectangle_1473_copy" data-name="Rectangle 1473 copy" class="cls-2" x="4" y="9" width="2" height="2"/><rect class="cls-2" x="10" y="9" width="2" height="2"/><rect class="cls-2" x="10" y="12" width="2" height="2"/><rect class="cls-2" x="13" y="9" width="2" height="2"/><rect class="cls-2" x="13" y="12" width="2" height="2"/></g><g id="Hotel_Icon_" data-name="Hotel Icon  " class="cls-4"><rect x="-115" y="28" width="50" height="2"/><rect x="-71" y="-11" width="2" height="39"/><rect x="-111" y="-11" width="2" height="39"/><rect x="-109" y="-11" width="38" height="2"/><rect x="-78" y="-16" width="2" height="5"/><rect x="-104" y="-16" width="26" height="2"/><rect x="-104" y="-14" width="2" height="3"/><rect x="-97" y="-20" width="2" height="4"/><rect x="-95" y="-20" width="10" height="2"/><rect x="-85" y="-20" width="2" height="4"/><rect x="-97" y="16" width="14" height="2"/><rect x="-86" y="18" width="2" height="10"/><rect x="-96" y="18" width="2" height="10"/><g id="Window_10" data-name="Window 10"><rect x="-80" y="16" width="7" height="2"/><rect x="-80" y="18" width="2" height="5"/><rect x="-80" y="23" width="7" height="2"/><rect x="-75" y="18" width="2" height="5"/></g><g id="Window_9" data-name="Window 9"><rect x="-107" y="16" width="7" height="2"/><rect x="-107" y="18" width="2" height="5"/><rect x="-107" y="23" width="7" height="2"/><rect x="-102" y="18" width="2" height="5"/></g><g id="Window_8" data-name="Window 8"><rect x="-80" y="5" width="7" height="2"/><rect x="-80" y="7" width="2" height="5"/><rect x="-80" y="12" width="7" height="2"/><rect x="-75" y="7" width="2" height="5"/></g><g id="Window_7" data-name="Window 7"><rect x="-89" y="5" width="7" height="2"/><rect x="-89" y="7" width="2" height="5"/><rect x="-89" y="12" width="7" height="2"/><rect x="-84" y="7" width="2" height="5"/></g><g id="Window_6" data-name="Window 6"><rect x="-98" y="5" width="7" height="2"/><rect x="-98" y="7" width="2" height="5"/><rect x="-98" y="12" width="7" height="2"/><rect x="-93" y="7" width="2" height="5"/></g><g id="Window_5" data-name="Window 5"><rect x="-107" y="5" width="7" height="2"/><rect x="-107" y="7" width="2" height="5"/><rect x="-107" y="12" width="7" height="2"/><rect x="-102" y="7" width="2" height="5"/></g><g id="Window_4" data-name="Window 4"><rect x="-80" y="-6" width="7" height="2"/><rect x="-80" y="-4" width="2" height="5"/><rect x="-80" y="1" width="7" height="2"/><rect x="-75" y="-4" width="2" height="5"/></g><g id="Window3"><rect x="-89" y="-6" width="7" height="2"/><rect x="-89" y="-4" width="2" height="5"/><rect x="-89" y="1" width="7" height="2"/><rect x="-84" y="-4" width="2" height="5"/></g><g id="Window_2" data-name="Window 2"><rect x="-98" y="-6" width="7" height="2"/><rect x="-98" y="-4" width="2" height="5"/><rect x="-98" y="1" width="7" height="2"/><rect x="-93" y="-4" width="2" height="5"/></g><g id="Window_1" data-name="Window 1"><rect x="-107" y="-6" width="7" height="2"/><rect x="-107" y="-4" width="2" height="5"/><rect x="-107" y="1" width="7" height="2"/><rect x="-102" y="-4" width="2" height="5"/></g></g></svg>\n',
    [SVG_ICONS.noResults]: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><style> #NoResults.cls-1 {fill: #c3c9d8;fill-rule: evenodd;opacity: 0.8;}</style></defs><path id="NoResults" data-name="NoResults" class="cls-1" d="M97.447,84.19L74.5,61.248A44.146,44.146,0,0,1,61.248,74.5L84.19,97.447A9.374,9.374,0,1,0,97.447,84.19Zm-22.253-46.5a37.5,37.5,0,1,0-37.5,37.5A37.5,37.5,0,0,0,75.194,37.695Zm-37.5,28.124A28.124,28.124,0,1,1,65.819,37.695,28.155,28.155,0,0,1,37.695,65.819ZM15.82,37.695h6.25A15.643,15.643,0,0,1,37.695,22.07V15.82A21.9,21.9,0,0,0,15.82,37.695Z"/></svg>',
    [SVG_ICONS.search]: '<div><svg id="Search" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><style> #Search .cls-1 {fill: #acb2bf;}  #Search .cls-1, #Search .cls-4 {fill-rule: evenodd;}  #Search .cls-2 {filter: url(#filterSearch);}  #Search .cls-3, #Search .cls-4 {fill: #d5d5d5;}  #Search .cls-5 {filter: url(#filterSearch-2);}</style><filter id="filterSearch" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#7a7a7a"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="filterSearch-2" filterUnits="userSpaceOnUse"><feFlood result="flood" flood-color="#818181"/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><path id="icon_search_copy_2" data-name="icon search copy 2" class="cls-1" d="M13.79,12.027L10.429,8.563a0.557,0.557,0,0,0-.673-0.221A0.559,0.559,0,0,1,9.083,8.12l-0.048-.05a5.04,5.04,0,1,0-.868.893L8.188,8.986a0.555,0.555,0,0,1,.2.679,0.555,0.555,0,0,0,.2.678l3.359,3.465a0.629,0.629,0,0,0,.887.015l0.943-.91A0.626,0.626,0,0,0,13.79,12.027ZM7.478,7.484a3.475,3.475,0,1,1,0-4.908A3.489,3.489,0,0,1,7.478,7.484Z"/><g id="Search_2" data-name="Calaender  " class="cls-2"><rect class="cls-3" x="-149" y="3" width="2" height="12"/><rect class="cls-3" x="-147" y="13" width="17" height="2"/><rect class="cls-3" x="-132" y="3" width="2" height="10"/><rect class="cls-3" x="-149" y="1" width="19" height="2"/><rect class="cls-3" x="-142" y="-2" width="5" height="3"/><rect class="cls-3" x="-132" y="-2" width="2" height="3"/><rect class="cls-3" x="-149" y="-2" width="2" height="3"/><rect class="cls-3" x="-146" y="-4" width="3" height="4"/><rect class="cls-3" x="-136" y="-4" width="3" height="4"/><path class="cls-4" d="M-142,5h2V7h-2V5Zm0,3h2v2h-2V8Zm-3,0h2v2h-2V8Z"/><rect id="Rectangle_1473_copy" data-name="Rectangle 1473 copy" class="cls-3" x="-145" y="5" width="2" height="2"/><rect class="cls-3" x="-139" y="5" width="2" height="2"/><rect class="cls-3" x="-139" y="8" width="2" height="2"/><rect class="cls-3" x="-136" y="5" width="2" height="2"/><rect class="cls-3" x="-136" y="8" width="2" height="2"/></g><g id="Search_Icon_" data-name="Hotel Icon  " class="cls-5"><rect x="-264" y="24" width="50" height="2"/><rect x="-220" y="-15" width="2" height="39"/><rect x="-260" y="-15" width="2" height="39"/><rect x="-258" y="-15" width="38" height="2"/><rect x="-227" y="-20" width="2" height="5"/><rect x="-253" y="-20" width="26" height="2"/><rect x="-253" y="-18" width="2" height="3"/><rect x="-246" y="-24" width="2" height="4"/><rect x="-244" y="-24" width="10" height="2"/><rect x="-234" y="-24" width="2" height="4"/><rect x="-246" y="12" width="14" height="2"/><rect x="-235" y="14" width="2" height="10"/><rect x="-245" y="14" width="2" height="10"/><g id="WindowSearch_10" data-name="Window 10"><rect x="-229" y="12" width="7" height="2"/><rect x="-229" y="14" width="2" height="5"/><rect x="-229" y="19" width="7" height="2"/><rect x="-224" y="14" width="2" height="5"/></g><g id="WindowSearch_9" data-name="Window 9"><rect x="-256" y="12" width="7" height="2"/><rect x="-256" y="14" width="2" height="5"/><rect x="-256" y="19" width="7" height="2"/><rect x="-251" y="14" width="2" height="5"/></g><g id="WindowSearch_8" data-name="Window 8"><rect x="-229" y="1" width="7" height="2"/><rect x="-229" y="3" width="2" height="5"/><rect x="-229" y="8" width="7" height="2"/><rect x="-224" y="3" width="2" height="5"/></g><g id="WindowSearch_7" data-name="Window 7"><rect x="-238" y="1" width="7" height="2"/><rect x="-238" y="3" width="2" height="5"/><rect x="-238" y="8" width="7" height="2"/><rect x="-233" y="3" width="2" height="5"/></g><g id="WindowSearch_6" data-name="Window 6"><rect x="-247" y="1" width="7" height="2"/><rect x="-247" y="3" width="2" height="5"/><rect x="-247" y="8" width="7" height="2"/><rect x="-242" y="3" width="2" height="5"/></g><g id="WindowSearch_5" data-name="Window 5"><rect x="-256" y="1" width="7" height="2"/><rect x="-256" y="3" width="2" height="5"/><rect x="-256" y="8" width="7" height="2"/><rect x="-251" y="3" width="2" height="5"/></g><g id="WindowSearch_4" data-name="Window 4"><rect x="-229" y="-10" width="7" height="2"/><rect x="-229" y="-8" width="2" height="5"/><rect x="-229" y="-3" width="7" height="2"/><rect x="-224" y="-8" width="2" height="5"/></g><g id="Window3"><rect x="-238" y="-10" width="7" height="2"/><rect x="-238" y="-8" width="2" height="5"/><rect x="-238" y="-3" width="7" height="2"/><rect x="-233" y="-8" width="2" height="5"/></g><g id="WindowSearch_2" data-name="Window 2"><rect x="-247" y="-10" width="7" height="2"/><rect x="-247" y="-8" width="2" height="5"/><rect x="-247" y="-3" width="7" height="2"/><rect x="-242" y="-8" width="2" height="5"/></g><g id="WindowSearch_1" data-name="Window 1"><rect x="-256" y="-10" width="7" height="2"/><rect x="-256" y="-8" width="2" height="5"/><rect x="-256" y="-3" width="7" height="2"/><rect x="-251" y="-8" width="2" height="5"/></g></g></svg></div>',
    [SVG_ICONS.childAge]: '<svg id="childAge" xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 18"><defs><style> #childAge .cls-1 {fill: #7a7a7a;fill-rule: evenodd;}</style></defs><path id="childAge" data-name="childAge 1" class="cls-1" d="M9.909,11.4s1.912,1.723,1.917,1.725a1.411,1.411,0,0,1-.127,2.053l-2.665,2.5c-1.028.925-2.4-.358-1.405-1.254L9.32,14.9,7.664,13.423,9.909,11.4h0Zm-5.942,0h0S2.06,13.123,2.06,13.126a1.411,1.411,0,0,0,.115,2.053l2.676,2.5c1.026,0.925,2.4-.358,1.407-1.254L4.57,14.9l1.643-1.479L3.967,11.4M7.006,4.993a2.645,2.645,0,0,0,2.772-2.5A2.645,2.645,0,0,0,7.006,0,2.646,2.646,0,0,0,4.23,2.493,2.646,2.646,0,0,0,7.006,4.993Zm3,5.408,0.039-1.7,2.3,1.936a1.062,1.062,0,0,0,1.386-.042,0.824,0.824,0,0,0-.047-1.249s-2.642-2.585-3.022-2.886a5.25,5.25,0,0,0-3.4-.88H6.74a5.267,5.267,0,0,0-3.408.878c-0.379.3-3.021,2.888-3.021,2.888a0.824,0.824,0,0,0-.046,1.249,1.036,1.036,0,0,0,.716.279,1.029,1.029,0,0,0,.67-0.237L3.956,8.7,4,10.4H10.01Z"/></svg>',
    [SVG_ICONS.arrowDown]: '<svg width="9" height="6" viewBox="0 0 9 6" class="arrow-down"><defs><style>.arrow-down .cls-1 {fill: #acb2bf;fill-rule: evenodd;}</style></defs><path id="arrow" class="cls-1" d="M0.031,1.195c0.208,0.378,3.852,4.674,4,4.934A0.487,0.487,0,0,0,4.9,6.119C5.08,5.8,8.591,1.745,8.891,1.2A0.521,0.521,0,0,0,8.458.412c-0.434,0-7.487-.009-7.993,0A0.52,0.52,0,0,0,.031,1.195Z"></path></svg>',
  };

  constructor(private sanitizer: DomSanitizer) {
    Object.keys(this.svgIcons).forEach(iconName => this.svgIcons[iconName] = sanitizer.bypassSecurityTrustHtml(this.svgIcons[iconName]));
  }
}
