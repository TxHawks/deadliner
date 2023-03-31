import * as React from 'react';
import { SVGProps } from 'react';

export default function IconSprite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      }}
      focusable="false"
      tabIndex={-1}
      {...props}
    >
      <symbol viewBox="0 0 16 16" id="icn-Login">
        <path d="M7.92 14a2.71 2.71 0 0 1-2.75-2.66V8.46h-2.4a.46.46 0 0 1 0-.92h2.4V4.67A2.72 2.72 0 0 1 7.93 2h3.02a2.71 2.71 0 0 1 2.75 2.67v6.67A2.71 2.71 0 0 1 10.94 14H7.92zm1.1-5.54-1 .96a.45.45 0 0 0-.01.64l.01.02a.5.5 0 0 0 .68 0l1.8-1.75a.45.45 0 0 0 0-.65L8.7 5.93a.49.49 0 0 0-.68 0 .45.45 0 0 0-.01.64l.01.01 1 .96H5.16v.92H9z" />
      </symbol>
      <symbol viewBox="0 0 16 16" id="icn-Logout">
        <path d="M4.48 14a2.69 2.69 0 0 1-2.71-2.66V4.67A2.7 2.7 0 0 1 4.48 2h2.98a2.69 2.69 0 0 1 2.7 2.66v2.88H6.52a.46.46 0 0 0 0 .92h3.66v2.87A2.7 2.7 0 0 1 7.45 14H4.48zm7.21-3.93a.46.46 0 0 1 0-.65l.96-.96h-2.48v-.92h2.48l-.96-.96a.46.46 0 0 1 0-.65.46.46 0 0 1 .65-.01l1.76 1.75a.46.46 0 0 1 0 .65l-1.76 1.75a.46.46 0 0 1-.65 0z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-a11y">
        <path d="M12.1 6H3.9c-.2 0-.4.2-.4.5s.2.5.4.5H6l.6 6.5c0 .3.3.6.6.6h1.6c.3 0 .6-.2.6-.6l.6-6.6h2.1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.4-.4z" />
        <circle cx={8} cy={3.5} r={1.5} />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-alef">
        <path fill="var(--_icn-c2)" d="M4 4h8v8H4z" />
        <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm3.5 9.1s0 .1 0 0L6.1 7.2c-.2.2-.4.5-.4.8v1.1c.1.4.3.6.7.6h1c-.1.6 0 1.2.3 1.6H5v-.1c.2-.6.3-1.2.3-1.9 0-.3 0-.6-.1-.9V7c0-.1.1-.4.1-.7.1-.5 0-1-.3-1.5h.4c.4.2.9.6 1.5 1l1.7 1.3.2-.2c0-.1.1-.2.2-.4v-.6c-.1-.2-.1-.3-.1-.5v-.7h2.2c-.3.5-.3 1.1 0 1.9H9.6c-.1 0-.2 0-.3.1-.1.2-.2.3-.2.4v.3c0 .1.1.2.1.2.4.3.8.5 1 .8l.9.6c0 .2-.1.4-.1.5 0 .4.1.7.2 1.1.1.2.2.4.3.5z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-android">
        <path d="M12.3 6.5c-.4 0-.7.3-.7.8v3c0 .4.3.8.7.8.4 0 .7-.3.7-.8v-3c0-.5-.3-.8-.7-.8M5.1 11c0 .4.3.8.7.8v1.5c0 .4.3.8.7.8s.7-.3.7-.8v-1.5h1.4v1.5c.1.4.4.7.8.7s.7-.3.7-.8v-1.5c.4 0 .7-.3.7-.8V6.5H5.1V11zM3.7 6.5c-.4 0-.7.3-.7.7v3c0 .5.3.8.7.8.4 0 .7-.3.7-.8v-3c0-.4-.3-.7-.7-.7m6.1-3.1.6-.8c.1-.2.1-.4 0-.5-.2-.1-.4-.1-.5 0l-.7.9c-.8-.3-1.6-.3-2.4 0l-.7-.9c-.1-.1-.3-.1-.5 0-.1.1-.1.3 0 .5l.6.8c-.7.6-1.1 1.4-1.1 2.3h5.7c.1-.9-.3-1.7-1-2.3M7.3 4.6c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.3.2.3.4c0 .3-.1.4-.3.4m1.4 0c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4c0 .3-.2.4-.4.4" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-apple">
        <path d="M13.1 5.4a3.1 3.1 0 0 0-2.5-1.3c-1.1-.1-1.6.5-2.4.5-.8 0-1.4-.6-2.4-.6-1.1.1-2.2.7-2.7 1.7-.9 1.5-.8 4.2.7 6.5.6.9 1.3 1.8 2.2 1.8.8 0 1.1-.5 2.2-.6 1.1 0 1.4.6 2.2.5.9 0 1.7-1 2.2-1.9l.8-1.6c-1.4-.4-2.1-2.1-1.5-3.6.2-.6.6-1.1 1.2-1.4" />
        <path d="M9.8 3.1c.5-.6.7-1.4.6-2.1-.7.1-1.4.5-1.9 1.1-.5.5-.8 1.3-.7 2 .8 0 1.5-.4 2-1" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-arrow-right">
        <path d="M8.49 4.53c.1 0 .18.03.26.07l5.02 3.05c.14.08.23.23.23.38 0 .16-.09.3-.23.39l-5.02 3.04a.52.52 0 0 1-.5.02.45.45 0 0 1-.25-.4v-2.3H2.75a.75.75 0 0 1 0-1.5H8v-2.3c0-.13.07-.26.18-.34l.07-.05a.52.52 0 0 1 .24-.06z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-audio">
        <path d="m9 4.3-.1-1C8.7 2.5 8 2 7.4 2a2 2 0 0 0-1.2.5L4 4.5H2.8C1.9 4.4 1.2 5 1 6a19 19 0 0 0 0 4c.1 1 .8 1.7 1.7 1.7H4l2.3 2c.2.2.6.4 1 .4.8 0 1.4-.5 1.6-1.3l.1-1v-.3c.2-1 .2-5.8 0-6.8v-.3zm2.5.4a.7.7 0 0 0-.9-.1c-.3.2-.4.6-.1.9.5.8.8 2 .8 3.1 0 1.2-.3 2.3-.9 3.2-.2.3 0 .7.2 1a.7.7 0 0 0 1-.3c.7-1 1-2.4 1-3.9s-.3-2.8-1-3.9m2-2.4c-.1-.3-.5-.4-.7-.2-.2.2-.3.6-.1 1 .7 1.3 1.2 3 1.2 5 0 1.8-.5 3.6-1.2 5-.2.2-.1.6 0 .8l.4.1c.2 0 .3 0 .4-.2 1-1.6 1.4-3.6 1.4-5.8 0-2.1-.5-4.1-1.4-5.7" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-audio-ff">
        <path d="M2.18 7.1a6.12 6.12 0 0 1 7.36-4.37l.05.02.21-.6.21-.36c.1-.12.24-.2.4-.24a.75.75 0 0 1 .35.01c.14.07.27.15.4.25.67.6 1.24 1.3 1.69 2.1l.11.23a.71.71 0 0 1-.22.81l-.24.15c-.79.42-1.64.7-2.52.85-.17.03-.35.03-.53 0h-.02a.68.68 0 0 1-.47-.53c0-.17 0-.35.02-.52.04-.25.11-.48.17-.72a4.57 4.57 0 0 0-5.5 3.28 4.52 4.52 0 0 0 3.32 5.44 4.6 4.6 0 0 0 5.53-3.27c.1-.4.52-.65.92-.55.41.1.66.5.56.9a6.1 6.1 0 0 1-11.1 1.64 5.87 5.87 0 0 1-.7-4.52z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-audio-rw">
        <path d="M13.82 7.1a6.11 6.11 0 0 0-7.36-4.37l-.05.02-.21-.6a3.83 3.83 0 0 0-.21-.35.72.72 0 0 0-.4-.25.75.75 0 0 0-.35.01 1.8 1.8 0 0 0-.4.25c-.67.6-1.24 1.3-1.69 2.1l-.11.23a.71.71 0 0 0 .22.81l.24.15c.79.42 1.64.7 2.52.85.17.03.35.03.53 0h.02a.68.68 0 0 0 .47-.53c0-.17 0-.35-.02-.52-.04-.25-.11-.48-.17-.72a4.58 4.58 0 0 1 5.5 3.28 4.52 4.52 0 0 1-3.32 5.44A4.6 4.6 0 0 1 3.5 9.63a.76.76 0 0 0-.92-.55c-.41.1-.66.5-.56.9a6.1 6.1 0 0 0 11.1 1.64 5.88 5.88 0 0 0 .7-4.52z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-bell">
        <path d="m11.8 7.8-1.1-2.4A4.5 4.5 0 0 0 4.8 3a4.4 4.4 0 0 0-2.4 5.8l1.1 2.4c.2.4 0 .8-.4 1-.4.2-.6.6-.4 1l.2.5c.1.3.5.5.9.3l9.7-4c.4-.2.6-.6.4-1l-.2-.5c-.2-.4-.6-.6-1-.4-.3.2-.8.1-.9-.3z" />
        <circle cx={4.8} cy={3} r={1} />
        <path d="M7.8 12.9c.3.8 0 1.6-.8 1.9s-1.6 0-2-.8l2.8-1.1z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-bookmark">
        <path d="M6.96 1.5c-1.9 0-3.46.7-3.46 2.46v9.87c0 .36.32.66.71.66a.8.8 0 0 0 .35-.08l3.43-2.1 3.43 2.1c.17.09.37.12.56.06a.67.67 0 0 0 .52-.64V3.96C12.48 2.2 10.93 1.5 9.01 1.5H6.97z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-camera">
        <path fill="var(--_icn-c2)" d="M6 6h6v5H6z" />
        <path d="m11.6 4.9-.1-.1-.1-.1-.4-.9c-.2-.5-.7-.8-1.2-.8H6.2c-.5 0-1 .3-1.2.8a9 9 0 0 1-.5.9v.1l-.1.1A2.4 2.4 0 0 0 2 7.3v3.3C2 11.9 3.1 13 4.4 13h7.2c1.3 0 2.4-1.1 2.4-2.4V7.3c0-1.3-1.1-2.4-2.4-2.4zm-2.2 5c-.4.4-.8.6-1.4.6a2 2 0 0 1-1.4-.6C6.2 9.5 6 9 6 8.5s.2-1 .6-1.4.9-.6 1.4-.6 1 .2 1.4.6c.4.4.6.9.6 1.4 0 .6-.2 1.1-.6 1.4zM11.5 7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
        <circle cx={8} cy={8.5} r={1} />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-check">
        <path d="M6.5 13c-.4 0-.9-.2-1.1-.5L2.4 9c-.6-.7-.5-1.6.1-2.1.7-.6 1.6-.5 2.2.1l1.9 2.2 4.8-5.7c.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1l-6 7c-.3.4-.8.6-1.2.6z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-chevron-bottom">
        <path d="M3 6.3c0-.4.2-.8.5-1.1.6-.6 1.5-.5 2.1 0L8 7.7l2.4-2.5c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1L9 10.9c-.3.3-.7.4-1.1.4s-.8-.2-1.1-.5L3.4 7.3c-.3-.3-.4-.7-.4-1z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-chevron-right">
        <path d="M6.2 13c-.4 0-.8-.2-1.1-.5-.6-.6-.5-1.5 0-2.1L7.7 8 5.2 5.6c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0L10.9 7c.3.3.4.7.4 1.1 0 .4-.2.8-.5 1.1l-3.6 3.5c-.2.2-.6.3-1 .3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-close">
        <path d="m10.1 8 2.5-2.4a1.5 1.5 0 1 0-2.2-2.2L8 6 5.6 3.4a1.5 1.5 0 1 0-2.2 2.2L6 8l-2.5 2.4a1.5 1.5 0 1 0 2.2 2.2L8 10l2.4 2.5c.3.3.7.4 1.1.4s.8-.1 1-.4c.6-.6.6-1.6 0-2.2L10.2 8z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-comments">
        <path d="M5 12a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8.5l-2.8 2c-.3.1-.7-.1-.7-.5V12z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-discover">
        <path fill="var(--_icn-c2)" d="M4 4h8v8H4V4z" />
        <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm3.15 3.32L9.83 9.48a.53.53 0 0 1-.36.36l-4.16 1.3a.36.36 0 0 1-.46-.46l1.3-4.18a.6.6 0 0 1 .37-.36l4.17-1.3c.29-.09.54.18.46.47z" />
        <circle cx={8} cy={8} r={0.75} />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-dislike">
        <path d="M13.5 11.07a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1zm-2-1.58V5.92a3 3 0 0 0-3-3H5.72A3 3 0 0 0 3 4.68L1.7 7.53a2.18 2.18 0 0 0 1.99 3.08h3.4l-.96 3.21a.96.96 0 0 0 1.62.96l3.02-3.32a3 3 0 0 0 .74-1.97z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-edit">
        <path fill="var(--_icn-c2)" d="M10 4H7.8L6.35 5.9V7H10z" />
        <path d="M12.48 12.03H9.52c-.28 0-.52.23-.52.5s.23.5.52.5h2.96a.5.5 0 0 0 .52-.5c0-.27-.23-.5-.52-.5M11.42 6.2l-4.88 6.35c-.22.29-.55.45-.9.46l-1.95.02c-.1 0-.2-.07-.22-.17l-.44-1.93c-.08-.35 0-.72.22-1l3.46-4.51a.17.17 0 0 1 .24-.03l1.46 1.17c.09.07.22.12.36.1.29-.04.48-.3.45-.59a.6.6 0 0 0-.18-.35L7.62 4.58a.21.21 0 0 1-.03-.3l.54-.71c.51-.66 1.4-.72 2.1-.15l.83.66c.33.26.56.61.63.98.1.4 0 .8-.27 1.14" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-facebook">
        <path fill="var(--_icn-c2)" d="M6 4h6.5v10H6z" />
        <path d="M12.5 2h-9C2.7 2 2 2.7 2 3.5v9c0 .8.7 1.5 1.5 1.5H8V9.9H6.5V8H8V6.5c0-1.2 1-2.2 2.2-2.2h1.5v1.9H11c-.4 0-.8 0-.8.4V8h1.9l-.8 1.9h-1.1V14h2.2c.8 0 1.5-.7 1.5-1.5v-9c.1-.8-.6-1.5-1.4-1.5" />
      </symbol>
      <symbol viewBox="0 0 263.766 48" fill="var(--_icn-c)" id="icn-hdc">
        <path d="M74.915 39.821v-.976c1.863-.176 2.637-.888 3.955-4.219L89.277 8.179h3.182l11.505 28.355c.817 1.951 1.187 2.18 2.681 2.312v.976H90.279v-.976h2.048c1.046 0 1.863-.58 1.863-1.644 0-.712-.272-1.512-.501-2.136l-2.136-5.291h-8.596l-1.635 4.579c-.36.976-.589 1.644-.589 2.487 0 1.16.773 2.004 3.551 2.004v.976h-9.369zm12.314-21.156-3.639 9.334h7.234l-3.595-9.334zm-32.995 5.871V34.67c0 3.068 1.151 4.087 3.612 4.175v.976H41.427v-.976c2.83 0 3.938-.756 3.938-4.175V13.338c0-3.419-1.151-4.175-3.938-4.175v-.984h16.419v.976c-2.461.088-3.612 1.107-3.612 4.175v9.07h9.282v-9.062c0-3.068-1.151-4.087-3.612-4.175v-.984h16.419v.976c-2.83 0-3.938.756-3.938 4.175v21.332c0 3.419 1.107 4.175 3.938 4.175v.984h-16.42v-.976c2.461-.088 3.612-1.107 3.612-4.175V24.536h-9.281zm101.369 15.285-7.506-14.397h-.914v9.247c0 3.419 1.116 4.175 3.982 4.175v.976h-16.929v-.976c2.865 0 3.982-.756 3.982-4.175V13.338c0-3.419-1.116-4.175-3.982-4.175v-.984h16.849c7.717 0 11.541 2.936 11.541 8.666 0 4.316-2.241 6.487-5.766 7.998l6.056 11.242c.993 1.819 1.617 2.663 3.612 2.76v.976h-10.925zm-8.42-16.357c4.65 0 6.724-.976 6.724-6.355 0-5.555-1.74-6.979-6.724-6.979v13.334zm19.081 16.357v-.976c3.015 0 4.193-.756 4.193-4.175V13.338c0-3.419-1.178-4.175-4.193-4.175v-.984h27.089v8.71h-.958c-.483-4.799-2.619-6.759-7.603-6.759h-4.896v12.622c4.456 0 5.502-1.512 6.117-6.75h.958v15.373h-.958c-.615-5.247-1.661-6.75-6.117-6.662v10.846c0 1.688.352 2.312 2.189 2.312h3.85c2.883 0 6.557-.624 8.306-7.374h1.09l-1.582 9.326h-27.485zm35.985 0v-.976c3.076 0 4.28-.756 4.28-4.175V10.139c-7.137 0-8.025 1.16-8.649 6.223h-.984V8.179h28.891v8.174h-.984c-.624-5.063-1.512-6.223-8.649-6.223v24.531c0 3.419 1.204 4.175 4.28 4.175v.984h-18.185zm24.848 0 17.737-29.691h-6.082c-4.685 0-6.935 1.204-8.464 6.935h-.993l.598-8.886h26.342L238.497 37.87h7.251c3.059 0 8.06-.888 10.038-8.71h.984l-1.257 10.662h-28.416zm-123.22 0v-.976c1.863-.176 2.637-.888 3.955-4.219l10.407-26.448h3.182l11.505 28.355c.817 1.951 1.187 2.18 2.681 2.312v.976h-16.366v-.976h2.048c1.046 0 1.863-.58 1.863-1.644 0-.712-.272-1.512-.501-2.136l-2.136-5.291h-8.596l-1.635 4.579c-.36.976-.589 1.644-.589 2.487 0 1.16.773 2.004 3.551 2.004v.976h-9.369zm12.314-21.156-3.639 9.334h7.234l-3.595-9.334zM36.462 23.414c0 2.034-.384 3.942-1.151 5.726a14.894 14.894 0 0 1-3.165 4.69 14.872 14.872 0 0 1-4.69 3.165c-1.784.768-3.693 1.151-5.726 1.151-2.034 0-3.942-.383-5.726-1.151a14.86 14.86 0 0 1-4.69-3.165 14.86 14.86 0 0 1-3.165-4.69c-.768-1.784-1.151-3.692-1.151-5.726 0-2.033.383-3.942 1.151-5.726a14.872 14.872 0 0 1 3.165-4.69 14.894 14.894 0 0 1 4.69-3.165c1.784-.767 3.692-1.151 5.726-1.151 2.033 0 3.942.384 5.726 1.151a14.905 14.905 0 0 1 4.69 3.165 14.905 14.905 0 0 1 3.165 4.69c.767 1.783 1.151 3.693 1.151 5.726zm-7.079 5.007a23.78 23.78 0 0 1-.086-.748c-.02-.191-.01-.383.029-.576a2.9 2.9 0 0 1 .058-.576c.038-.191.076-.422.115-.691-.384-.23-.748-.479-1.093-.748-.345-.268-.71-.537-1.093-.806a35.147 35.147 0 0 1-1.18-.863 38.47 38.47 0 0 0-1.352-.978c-.115-.076-.221-.239-.317-.489a1.35 1.35 0 0 1-.086-.719c.076-.345.23-.633.46-.863s.479-.345.748-.345h3.798c-.729-1.918-.748-3.433-.058-4.546h-5.352c0 .192-.029.413-.086.662-.058.25-.068.566-.029.95 0 .192.029.374.086.547s.105.374.144.604c.038.192.067.403.086.633.019.23-.01.499-.086.806-.154.46-.298.806-.432 1.036-.135.23-.279.384-.432.46a339.767 339.767 0 0 0-4.143-3.05 140.21 140.21 0 0 0-1.957-1.496 59.87 59.87 0 0 1-1.496-1.151h-1.036c-.039 0-.058.02-.058.058.153.269.278.557.374.863.095.307.163.614.201.921.038.307.067.624.086.95.019.327.009.643-.029.95a25.552 25.552 0 0 1-.23 1.726 5.243 5.243 0 0 0-.086.633c-.02.23-.029.518-.029.863 0 .384.029.748.086 1.093s.105.691.144 1.036c.076.345.134.691.173 1.036.038.345.038.71 0 1.093a31.952 31.952 0 0 1-.144 1.525c-.058.48-.125.912-.201 1.295-.077.423-.154.777-.23 1.065a3.713 3.713 0 0 1-.23.662c-.039.115-.02.211.058.288h6.273c-.538-1.151-.748-2.493-.633-4.029h-2.36c-.423 0-.758-.134-1.007-.403-.25-.268-.432-.613-.547-1.036a5.18 5.18 0 0 1-.201-1.295c-.02-.479.009-.93.086-1.352.076-.652.249-1.131.518-1.439.268-.306.422-.46.46-.46l13.121 9.668c0-.038.019-.058.058-.058.038 0 .038-.019 0-.058a7.226 7.226 0 0 0-.259-.662 6.504 6.504 0 0 1-.259-.662 8.864 8.864 0 0 1-.201-.691 14.192 14.192 0 0 1-.144-.633z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-headphones">
<path d="M8.24 2h-.48A5.64 5.64 0 0 0 2 7.5v3.86c0 1.3.94 2.5 2.24 2.63A2.5 2.5 0 0 0 7 11.5v-.84c0-1.24-.83-2.4-2.04-2.62a2.53 2.53 0 0 0-.96.01V7.5C4 5.57 5.69 4 7.76 4h.48C10.3 4 12 5.57 12 7.5v.55a2.51 2.51 0 0 0-.99 0A2.6 2.6 0 0 0 9 10.63v.73c0 1.3.94 2.5 2.24 2.63A2.5 2.5 0 0 0 14 11.5v-4C14 4.47 11.41 2 8.24 2z" />
</symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-heart">
        <path fill="var(--_icn-c2)" d="M10 4h3v3h-3z" />
        <path d="M11.4 2.7c-.4-.1-.7-.2-1.1-.2a4 4 0 0 0-2.3.8c-.1 0-.1-.1-.2-.1 0-.1-.1-.2-.2-.2l-.3-.1c-.1-.1-.2-.1-.3-.2h-.1c-.4-.1-.8-.2-1.1-.2h-.7c-.2 0-.4.1-.5.1-2.2.7-3 3.1-2.4 5.1.4 1 1 2 1.8 2.8 1.2 1.1 2.4 2 3.8 2.9l.2.1.1-.1c1.4-.8 2.6-1.8 3.8-2.9.8-.8 1.4-1.7 1.8-2.8.7-2-.1-4.3-2.3-5zm1 3.5c0 .2-.2.4-.5.4-.1 0-.3-.1-.3-.2-.1-.1-.1-.2-.1-.4 0-.4-.3-.8-.6-.9-.3-.1-.4-.4-.3-.6.1-.2.4-.4.6-.3.7.4 1.2 1.1 1.2 2z" />
</symbol>
<symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-hide">
        <path d="M12.6 12.3 3.4 3h-.7c-.2.3-.2.6 0 .7l9.2 9.3h.7c.2-.3.2-.6 0-.7M13.8 7.2s-3-3.5-5.8-3.5c-.7 0-1.4.2-2 .5l1.4 1.5H8a2 2 0 0 1 2 2.5l1.8 1.9c1.2-.9 2-1.8 2-1.8.3-.3.3-.7 0-1zM8 9.7a2 2 0 0 1-2-2l-2.1-2c-1 .7-1.7 1.5-1.7 1.5-.3.4-.3.7 0 1.1 0 0 3 3.3 5.8 3.3.6 0 1 0 1.6-.3L8 9.7z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-home">
        <path d="M6.34 13.26v-1.83c0-.47.37-.85.83-.85h1.66a.8.8 0 0 1 .58.25c.16.16.24.37.24.6v1.83c0 .2.08.39.2.52a.7.7 0 0 0 .51.22h1.14c.53 0 1.04-.21 1.41-.6.38-.39.59-.9.59-1.45V6.72c0-.44-.19-.86-.52-1.14L9.12 2.4a1.74 1.74 0 0 0-2.29.04L3.06 5.58c-.34.27-.55.7-.56 1.14v5.22c0 1.14.9 2.06 2 2.06h1.11c.4 0 .71-.33.71-.73h.02z" />
      </symbol>
      <symbol viewBox="0 0 256 86" fill="var(--_icn-c)" id="icn-htz">
        <path d="M38.1 50.4c-2.8 14.8-5.2 25.2-5.3 26.1-.1.9-7.1-24.9-6.8-25.8 5.5-15.4.9-22.7-3.7-22.7H12c0-2.4.5-11-5-19h25c-6.6 17.6 2 31.7 6.1 41.4zM35.1 9c3.7 8.5 2.9 17.6-.2 25.9-.6 1.6.5 6 1.8 5.7C39.5 32.9 40.6 29 47.6 28h9.5c-1-2-5.1-8.5.1-19H35.1zm80.1 12.4c-.2-2.2-.7-8.7-3.4-12.4H62c-4.3 6.5-2.9 14.1.1 19 .1-.1 39.8 0 40 0 6.2.1 8.2 4.5 7.7 12.6-.2 3.6-2.6 9.1-4.5 11.7-.5.7 4.2 15.9 5.6 22.9 0 0 .5 0 .7-.7.9-1.9 3-11.5 3.6-17.8.6-5.6-1.4-12.3-1.7-15.7-.7-7.6 2-16.2 1.7-19.6zm74.3 16.4s-.8 7.5-4.1 15.5c-1 5-.2 8.5.9 13.3.9 4 2 5.7 3 8.5h.9c6.3-14.9 5.6-22.3.1-37.2-.1-.4-.8.1-.8-.1zM129 34.4l54.9 40.1c0-.9-2.7-8.3-3.3-12-.8-4.7-.5-5.9.5-10.4-6.5-4.3-11.6-8.3-19.8-13.8-1.1-.7-2-3.1-1.7-5.1.4-2.6 2.9-5.2 5.1-5.2H181s-5.9-9.5 0-19h-23s-.8 3.2-.6 6.4c.2 3.3 2.3 6 1 10.9-1.1 3.9-2.4 5.6-3.5 6.3C144.3 24.9 122.3 9 122.3 9h-4.4s-.4.1-.3.3c2.3 4.4 3.3 10.2 2.8 15.2-.7 6.8-1.6 7.8-1.6 13.5 0 6.2 2.2 11.4 1.8 17.6-.6 8.9-2.5 15.9-3.3 18.6-.3.9.2.8.2.8h27.1c-4.9-9.4-2.8-16-2.8-16h-9.7c-7.3.1-8-10-7.1-16.8.5-5.2 3.7-7.7 4-7.8zm114.4 6.4c-1.4-5.6-.3-8.3 2.2-13.4 1.1-2.2 1.3-8.5 1.3-9.3 0 0-.1-9.1-4.7-9.1h-55.8s-5.8 8.5.5 19h47c4.2 0 5.1 4.7 5.2 8.5 0 3.8-1.9 9.8-3 13.3-.8 2.6 3.1 15.1 5.2 25.2h.9c.3-.8 4.3-21.9 4-24.9-.2-1.7-1.8-5.2-2.8-9.3z" />
      </symbol>
<symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-like">
        <path d="M2.5 6.93a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm2 1.58v3.57a3 3 0 0 0 3 3h2.78A3 3 0 0 0 13 13.32l1.3-2.85a2.18 2.18 0 0 0-1.98-3.08h-3.4l.95-3.21a.96.96 0 0 0-1.62-.96l-3 3.32A3 3 0 0 0 4.5 8.5z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-lock">
        <path fill="var(--_icn-c2)" d="M5 8h6v4H5z" />
        <path d="M11.6 6.2v-1a3 3 0 0 0-1-2.3C9.7 2.3 8.8 2 8 2 6 2 4.5 3.4 4.4 5.2v1c-1.1.3-1.9 1.2-1.9 2.3v3c0 1.4 1.3 2.5 2.8 2.5h5.4c1.5 0 2.8-1.1 2.8-2.5v-3c0-1-.8-2-2-2.3zM10 9l-2 2.3a.5.5 0 0 1-.7 0l-1-1.1c-.2-.2-.2-.6 0-.7s.5-.2.7 0l.6.7 1.7-1.8c.1-.3.5-.3.7-.1.2.2.2.5 0 .7zm.4-3H5.6v-.8C5.6 4 6.6 3 8 3c1.3 0 2.4 1 2.4 2.2V6z" />
      </symbol>
      <symbol viewBox="0 0 16 16" id="icn-m">
        <path fill="var(--_icn-c2)" d="M4 5h8v6H4z" />
        <path d="M8 2a5.8 5.8 0 0 1 4.2 1.8 6 6 0 0 1 1.3 6.5A6 6 0 0 1 8 14a5.8 5.8 0 0 1-4.2-1.8 6 6 0 0 1-1.3-6.5A6 6 0 0 1 8 2zm3.1 8.6V5.4H8.7l-.5 2.8h-.4l-.5-2.8H4.9v5.2h1.4V6.8l1 3.8h1.4l1-3.8v3.8H11z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-mail">
        <path fill="var(--_icn-c2)" d="M3 5h10v5H3z" />
        <path d="M13.1 3.4c-.6-.6-1.3-.9-2.1-.9H5a3 3 0 0 0-3 3.1v4.8c0 1.7 1.4 3.1 3 3.1h6a3 3 0 0 0 3-3.1V5.6c0-.8-.3-1.6-.9-2.2zM12 6.5 9.2 8.7c-.3.3-.7.5-1.2.5-.4 0-.8-.2-1.1-.5L4.1 6.6v-.1c-.2-.2-.2-.5 0-.6.2-.2.4-.2.6 0L7.4 8c.4.3.9.3 1.2 0l2.7-2.2.3-.1.3.2c.2.1.2.4.1.6z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 56 12" id="icn-marker">
        <path fill="var(--_icn-c2)" d="M46 9H6V2h29l3 1h8z" />
        <path d="m50.26 9.59-.68.46c.04.2.13.29.3.15.07.22.18.4.32.6l.17.04c-.02-.22 0-.42-.26-.55.17-.1.37-.1.53-.24-.07-.18-.24-.29-.38-.46m-.9.86c-.11.06-.2.17-.31.26l.42.02c-.05-.09-.1-.17-.11-.28M35.49 1.47l.09-.07-.47.03v.02c0 .06 0 .09.02.13 0 .02.03.07.03.11l.02.11.04-.09a.39.39 0 0 1 .09-.1c.05-.05.11-.1.18-.14m.95-.02.04-.05s-.24-.04-.4-.02c-.06 0-.17.05-.17.05l.02.04c.04.09.09.15.22.15.07 0 .13-.02.18-.04l.06-.07.05-.06zm1.28.13.04-.04-.04-.03c-.18-.06-.35-.13-.53-.17l-.04-.02.02.28-.05.05.05.02c.13.13.3.13.55-.09m.46.16.03-.05-.05-.02a1.47 1.47 0 0 0-.18-.07l-.04-.02v.04l.04.31h.07a.5.5 0 0 1 .13-.2m1.06 0 .03-.04-.5.02.08.05c.06.06.15.13.2.22l.02.02.02-.02a.4.4 0 0 0 .15-.24m2.72.13c.15-.03.3.02.42-.14a.17.17 0 0 0-.09-.04l-.57.04c-.07-.06-.02-.17-.25-.15-.22.02-.15.11-.22.18-.06 0-.13.02-.2-.03l.14-.08c-.36-.03-.71-.16-.9-.16-.14 0-.54.2-.56.2l-.35.02c.15.07.26.27.4.36l.95.06c-.2-.09-.38-.22-.6-.26.1-.16.18-.05.35-.03h.07c.13 0 0-.08.04-.15.14.38.51.2.7.04l.2.3c-.1 0-.32 0-.41.04l.33.06a.53.53 0 0 1 .26-.06c0 .04-.02.08-.08.1l.37.1c.1-.1.06-.27 0-.4m11.4 3.55c0-.02-.03-.02-.07-.05l-.18-.02c-.06-.02-.09-.13-.06-.2.02-.04 0-.08-.07-.06l-.07.02c-.06.02-.02.09-.02.11.02.02-.02.04-.06.04l-.36.11c.31.16.6.11.88.05m-37.05.86h2c0-.4-.13-1.22-.94-1.22-.47 0-1.04.31-1.06 1.22m12.92 1.3c.1-.27.1-.6.1-.77-.61 0-1.2.02-1.2.61 0 .31.17.55.52.55a.71.71 0 0 0 .58-.4m10.77-1.4h1.4c0-.29-.18-.78-.7-.78-.6-.02-.72.58-.7.78m13.05 3.22c-.22.04-.6-.03-.75-.22a.25.25 0 0 0-.06.17l-.73-.17c0-.1-.02-.16-.04-.25.68.44.48.1.88-.24.64.55-.16.38.7.7m-.33-3.59-.02.03c-.06.08-.13.17-.13.3v.05l-.05-.02c-.2-.14-.46-.14-.75 0l.03.17-.33.02c-.03-.1-.2-.17-.2-.28l.37-.02-.02-.18.04.02c.03.02.07.02.1.05l.06.02a.5.5 0 0 0 .2.02c.04 0 .06 0 .08-.02.03 0 .03-.03.03-.03.02-.02.04-.06.15-.06l.44-.07zm-1.76-.22c-.33-.2-.49-.44-.86-.55.22-.06.5 0 .7.16a.19.19 0 0 0 0-.16l.69.09.1.2c-.41-.2-.41-.13-.63.26m-.69-.06-.42-.03c-.04-.08-.15-.13-.22-.2.14-.3.51.05.64.23m-1.48-1.79c.07-.4.47-.15.75-.04l-.75.04zm-2.85 2.14c-.17-.02-.2 0-.3 0-.89 0-1.02.7-1.02 1.15v1.74h-1.44V4.62h1.37v.51c.33-.53 1.06-.46 1.4-.44v1.17zM42.73 7h-2.76c0 .16-.02.34.04.49.1.29.32.53.69.53a.7.7 0 0 0 .66-.57h1.37c-.17 1.01-1.1 1.5-2.03 1.5-1.17 0-2.05-.82-2.05-2.19 0-1.39.68-2.27 2.05-2.27 1.02 0 1.57.47 1.83 1.06.16.33.2.73.2 1.46m-4.08-2.39-1.22 1.75 1.41 2.38h-1.59l-1.37-2.27 1.3-1.86h1.47zm-2.76 4.13h-1.42V2.8h1.42v5.94zm-1.81-2.9h-.31c-.89 0-1.02.72-1.02 1.16v1.74h-1.44V4.62h1.37v.51c.33-.53 1.06-.46 1.4-.44v1.17zm-3.4 2.9h-1.35v-.6s-.49.69-1.26.69c-.95 0-1.37-.56-1.37-1.28 0-1.13.97-1.55 2.63-1.46.04-.5-.14-.88-.56-.88a.55.55 0 0 0-.55.53h-1.28c.02-.2.05-.49.29-.75.3-.33.9-.5 1.59-.5.35 0 1.08.04 1.48.48.24.26.33.64.33 1.08v2.69h.04zM28.01 1.8c.03.09-.06.13-.13.16a.78.78 0 0 1-.22.04h-.02v-.02c-.02-.1.06-.13.1-.16a.79.79 0 0 1 .23-.04l.04.02zm-.7-.13c.02.07-.05.13-.1.2a.48.48 0 0 1-.1.08.35.35 0 0 0-.11.1l-.05.04-.02-.42h.38zm-1.1 7.08h-1.46V4.03L23.5 8.75h-1.4l-1.2-4.77v4.77h-1.32V2.8h2.2l1.1 3.86.94-3.86 2.38-.02.02 5.96zm-.12-7c.02.1-.06.14-.13.16a.79.79 0 0 1-.22.04h-.02v-.02c-.03-.08.06-.13.13-.15s.15-.04.24-.02zm-3.5.2-.34.03c-.02-.11-.2-.18-.2-.29l.5-.02.03.29zm-3.57 4.88h-2.76c-.02.86.3 1.48 1.1 1.48.32 0 .85-.27.91-.86H19c-.02.2-.04.55-.33.86-.18.2-.55.55-1.32.55-1.1 0-1.8-.8-1.8-2.12 0-.82.16-1.48.76-1.94a1.7 1.7 0 0 1 1.06-.31c1.57.02 1.68 1.65 1.66 2.34m-1.82-5.1-.1.03c-.14.04-.36.02-.34-.18v-.04h.05c.09-.03.15.02.22.04.02.02.04.04.06.04l.11.11m-2.1-.26c-.13.02-.17.07-.17.2l-.35.02-.03-.33c.14-.02.18-.07.18-.2l.35-.02.03.33zm-1.4-.15-.4-.05-.03-.3.33-.03.1.38zm-.32 3.17c.64-.02 1.22.22 1.44.7.07.16.18.4.18 1v2.58h-.73V6.32c0-.37-.07-1.17-.9-1.17-.56 0-.74.36-.85.55-.13.23-.13.62-.13.86v2.19h-.7V2.8h.72v2.1c.25-.33.62-.42.97-.42m-.46-2.73h-.55l-.1-.29.6-.04.05.33zM11.2 3.52H9.43v5.23h-.75V3.52H6.82v-.7h4.38v.7zM10.16.9l-.14.09a.76.76 0 0 1-.57.15l-.09-.02.05-.1c.1-.17.35-.19.57-.17l.18.05zm44.32 8.27c0-.03-.15-.14-.37-.25.24-.26.24-.4.22-.7-.03-.2-.47-.6-.53-.93-.4-.1-.71-.15-.73-.3-.02-.2.42-.5.4-.7-.03-.19-.27-.12-.3-.32v-.24l-.12.02c-.34-.02-.62-.27-.95-.27-.16 0-.3.18-.45.22l-.1-.3.15.17c.13-.22.44-.02.33-.46.09.06.18.06.26.06a.24.24 0 0 1 .14-.06c.06 0 .06-.16.09-.2.02-.04.08-.09.13-.07h.18a.17.17 0 0 1-.11-.04l.06-.09c-.04 0-.04-.13-.06-.17 0-.03 0-.03-.03-.05l-.37-.02c-.07 0-.02.04.02.04s.04.05 0 .1l-.02.01a.14.14 0 0 1-.16.03h-.26c-.07.02-.13-.05-.13-.05 0-.02 0-.02-.03-.02s-.15 0-.17-.02 0-.05.04-.07l.18-.04c.02 0 .02 0 .02-.02l-.53-.05c-.02.02-.07.02-.07.05l-.17.06c-.05.02-.11-.04-.14-.09-.02-.04-.08-.04-.13 0l-.46-.06c-.05-.05-.1-.02-.11.04l-.07.16c-.02.06-.09.08-.15.08 0 0-.42-.04-.67-.04-.15 0-.13-.2-.28-.2-.16 0-.2.11-.2.11-.03.07-.07.07-.14.05l-.22-.27c-.04-.04-.09-.04-.09.02l-.02.2c0 .07-.13.11-.17.09-.05-.02-.07-.09-.07-.15v-.18c0-.07.04-.11.1-.11l.94-.27c.06-.02.1.03.1.07l.1.15c.04.05.1.03.13 0s.04.03.06.05c.03.02.07-.02.07-.05s.04 0 .09.05l.13.1c.05.05.13.1.18.1h.06-.04s-.07-.03-.07-.1c.07-.06.23 0 .42-.04-.2-.1-.28-.35-.48-.35-.22.02-.11.11-.16.18-.06-.07-.13-.07-.15-.29-.02-.2.15-.24.2-.4.06 0 0 .18.2.14l.24-.03a1.01 1.01 0 0 1-.22-.46 9.9 9.9 0 0 1-1.64-.11c-.35-.04-.92-.4-1.14-.4-.22.03.22.18-.14.2-.46.05-.06-.2-.28-.2l-1.02.07c-.22.02-.42-.2-.64-.27-.18-.06-.42 0-.64 0-.07.07.29.14.46.2.3.11-.42-.17-1.01.25-.16-.31 0-.64-.2-.86-.2.02-.11.1-.16.17-.04-.04-.08.03-.06.05.09.15.2.3.3.48-.32.03-.54.07-.9 0 0-.24-.15-.44-.22-.68-.33.2-.57.53-.86.77l-.2-.26c-.2 0-1.3-.07-1.48-.2-.22.09-.44.15-.68.09l.22-.1c-1.02-.41-1.04.54-2.21-.37.02-.15-.44.31-.5.38l-.07-.25c-.07.05-.1.14-.12.2-.02-.08-.06-.15-.1-.24-.2.09-.3.31-.34.5-.37-.45-.97-.56-1.52-.65v.15l-.3.02-.03-.3h.1l.03-.36c-.42-.04-.97-.1-1.15-.09-.22.03-.24.11-.28.18a3.46 3.46 0 0 0-1.1-.27c-.23.03-.7.22-.9.22-.21.03-2-.2-2.95-.33-.09-.04-.09-.2-.2-.26l-.22.02.02.25c-.3.08-.82.28-1.04.3s-.42-.3-.64-.28c-.22.02-.2.17-.42.2s-.17-.03-.2-.14l-.33.03c0 .1.18.17.2.24l-.3.09c-.07-.07-.07-.1.01-.22-.1-.11-.04-.14-.26-.11-.22.02-.16.1-.22.17-.16-.06-.29-.3-.49-.3-.22.01-.55.2-.77.21s-.66-.13-.88-.1c-.22.02-.2.17-.42.2s-.42-.27-.6-.25c-.5.06-1.2.06-1.32-.11-.03-.07.02-.11.15-.24l-.35.04s-.33-.07-.44-.04c-.23.02-.3.04-.3.04-.12.07.34.15.5.27-.31.06-.51.22-.73.22-.23.02-.23-.16-.45-.14s-.02.18-.24.18c-.22.02-.15-.15-.35-.15-.49.02.13.24-.58.15 0-.07.11-.13.18-.18a.44.44 0 0 0-.37 0c-.2.1-.23.25-.45.27s-.37-.13-.5-.27c-.34-.13-1.04.47-1.06-.2-.67-.06-1.88-.3-2.1-.3-.22.02-.07.26-.29.26-.22.02-.15-.15-.26-.13 0 .11-.16.18-.27.24-.15.29-.26.29-.33.29-.47.02-.38-.53-.86-.73-.2.2-.42.2-.64.2-.22.02-.78-.11-1-.11C9.25.6 8.81.8 8.6.8c-.24.02-.4.09-.46-.13l-.87.04.03.27c-.1.06-.18.15-.4.17-.22.02-.24-.04-.33-.17.15-.07.33-.1.53-.23-.7.03-.86.2-.97.2-.23.03-.38-.13-.49-.3-.11 0-.2.17-.42.2C5 .86 5.02.69 4.8.69c-.22.02-.18.18-.4.2-.22.02-.28-.16-.5-.14l-.8.08c-.22-.02-.1.18-.35.18l-.95.04s-.11-.02-.13.2c-.02.22-.16.2-.18.42l.15 1.06c.14.02.18.2.36.26 0 .07-.07.11-.18.11.16.49.64.55.73 1.08.02.16-.09.8-.02.95.06.04.13-.09.15.13.02.22-.24.31-.22.53.02.22.2.22.27.29.04.24.13.46.22.66.1.22.04.5.1.73.16.44.14.1.23.6.07.04.44.79.46 1s-.22 0-.22.23l.02.29c.03.17.18.08.36.06.08.36.15.8.2 1.04.06.04.17.04.2.24.02.22-.18-.02-.16.18l.02.28c.02.23.24.03.42.07.44.09 1.3-.26 1.53-.26.22-.03.86.08 1.08.06.22-.02.55-.22.77-.24.22-.02.46.13.69.1s.28-.19.5-.21c.22-.02 1.09.24 1.3.22.03 0 .25-.2.38-.2.22-.02.31-.04.42.13.11 0 0-.17.22-.17l2.32-.2c.22-.02.53.1.82.26l1.48-.13c.22-.02.09-.17.3-.2.23-.02.25.16.45.14.22-.03.11-.18.33-.2.22-.03.86.26 1.08.24.22-.02.47-.22.69-.24s.75.1.97.08.38-.2.6-.22.17.03.2.16l1.5-.13c.22-.03.33.1.35.3.11 0 .02-.15.24-.17l1.4-.13c.21-.03.08.04.13.15.13-.1.26-.2.48-.22s2.32.13 2.52.11c.22-.02.2-.2.42-.2.22-.02.27-.02.2.13.22-.08.46-.02 1.5-.1.09 0 .22 0 .16.13.13.02.15-.1.2-.16 0 0 .04.02.08.13-.02-.04 0-.13.14-.15l1.06-.09c.06.07.02.18.24.16s.02-.18.24-.2c.22-.02.56.1.84.26l1.55-.13c.22-.02.29.15.37.13 1.46-.13 1.88-.09 2.1-.1.22-.03 1.08.15 1.53.2.17-.12.28-.12.48-.14.02 0 .33 0 .53.13.11-.1.07-.18.29-.2.22-.02.22.16.4.14l.97-.05-.11.09c.09.04.13.1.35.09.22-.03-.13-.16.07-.18.22-.02.26.07 1.19-.02.07 0 .2.06.35.09v-.18l-.02.02c-.44-.35.07-.24-.48-.44.15-.04.37.02.48.13a.17.17 0 0 0 .05-.1l.26.06h.04l.18.04.02.16c-.08-.07-.15-.09-.2-.11 0 .15 0 .3.03.44h.02c.09-.18.4-.35.53-.49.1.14.09.3.29.31.2.02.22-.26.4-.24.32.02.5.73 1.03 0 .13.13.11.33.16.48.17-.5.57-.37.84-.06h.1a.78.78 0 0 0 .1-.2c.2 0 .3.22.46.31l.73.02.02-.02c-.16-.07-.29-.15-.44-.18.1-.13.15-.04.3-.04h.07c.11 0 0-.07.04-.13.11.3.45.15.62.02l.2.29c-.09 0-.18 0-.26.04l.3.07h.38c.04-.1 0-.2-.04-.29.13-.02.26 0 .35-.13a.68.68 0 0 0-.5-.05c.08-.13-.07-.26.01-.4-.06-.06-.28-.02-.42-.13.1-.08.11-.2.14-.33.35.36.44.22.81.3 0 .1-.08.14-.17.19l.35.1c0-.12-.09-.26-.09-.37.22-.1.49-.06.73-.04.22.02-.07-.2.13-.18.22.03-.08.18.11.2.22.02-.1-.2.1-.17.2.02.37.22.41.41a.25.25 0 0 0 .07-.17c.2 0 .64.33.7-.02.1.02.18.08.23.17-.2.11-.42.1-.64.05l.02.15c.02.22-.18-.04-.18.18-.02.17.07.37.04.55.25.09.47.13.71.17l.38-.04v-.04c0-.07 0-.11.02-.11l.09.04.02.02c.02.02.06.02.09.05l.06.02c.07 0 .11 0 .11.02h.05l.08-.02.05-.05c.02-.04.06-.06.06-.06a.94.94 0 0 1 .25-.05l.28-.02c.07 0 .11 0 .11.02l-.06.14-.07.22.49.04c.4-.04.64-.13.86-.55-.13-.02-.16.04-.18-.18-.02-.2.16-.06.16-.26 0-.07-.02-.11-.05-.13-.22.13-.48-.14-.57.46-.13-.13-.3-.11-.46-.04-.03-.11.08-.16.15-.23-.53-.59-1.28-.1-1.9-.06.09-.24 1.06-.55 1.33-.5.28.01.73.37.97.37.02 0 .22-.1.4-.16.22-.22.17-.27.15-.57" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-menu">
        <path d="M12 13H4a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2m0-4H4a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2m0-4H4a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-microphone">
<path d="M8.1 2c1.4 0 2.6 1.2 2.6 2.6v2.8C10.7 8.8 9.5 10 8 10h-.2a2.6 2.6 0 0 1-2.6-2.6V4.6A2.8 2.8 0 0 1 8 2h.2zm4.3 4.7c.3 0 .6.3.6.6a5 5 0 0 1-4.4 5v1.2c0 .3-.3.5-.6.5a.6.6 0 0 1-.6-.5v-1.2a5 5 0 0 1-4.4-5c0-.3.3-.6.6-.6s.5.3.5.6A4 4 0 0 0 8 11.2a4 4 0 0 0 3.9-3.9c0-.3.2-.6.5-.6z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-minus">
        <path d="M12.5 9.5h-9a1.5 1.5 0 1 1 0-3h9a1.5 1.5 0 1 1 0 3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-most-viewed">
        <path fill="var(--_icn-c2)" d="M9 4h2v8H9z" />
        <path d="M4.75 5.76a1.26 1.26 0 0 1-.95.39.74.74 0 0 1-.57-.26.92.92 0 0 1-.23-.6.65.65 0 0 1 .2-.51l.21-.16.26-.15a5.31 5.31 0 0 0 .92-.79l.32-.3a1.07 1.07 0 0 1 .33-.23.4.4 0 0 1 .1-.03.8.8 0 0 1 .75.11c.13.08.21.2.27.33.06.13.1.29.12.46l.02.51v7.07c0 .18 0 .35-.02.53-.02.17-.06.32-.12.45a.78.78 0 0 1-.26.33.8.8 0 0 1-.48.12.81.81 0 0 1-.48-.12.79.79 0 0 1-.26-.33c-.06-.13-.1-.28-.11-.45l-.02-.53V5.76zm8.09-1.01a2.4 2.4 0 0 0-.42-.8 2.06 2.06 0 0 0-.57-.5 2.83 2.83 0 0 0-1.49-.42h-.2l-.35.02a2.82 2.82 0 0 0-1.15.39c-.2.12-.4.3-.57.5-.17.22-.31.48-.42.8a3.7 3.7 0 0 0-.17 1.17v4.17c0 .47.06.87.17 1.2.1.33.25.6.42.82.17.22.36.4.57.52a2.96 2.96 0 0 0 1.5.41h.2c.08 0 .2 0 .36-.02a3.08 3.08 0 0 0 1.13-.4c.2-.12.4-.29.57-.5s.3-.5.42-.83c.1-.33.16-.73.16-1.2V5.91c0-.45-.05-.84-.16-1.16zM11 10.66a1.5 1.5 0 0 1-.1.44c-.06.1-.13.2-.23.3a.6.6 0 0 1-.41.13.6.6 0 0 1-.42-.13.92.92 0 0 1-.23-.3c-.06-.13-.1-.28-.11-.44V5.91c.01-.17.05-.31.1-.44.06-.1.13-.2.24-.3a.6.6 0 0 1 .42-.14c.17 0 .3.05.4.14.1.1.18.2.23.3.06.13.1.27.11.44v4.75z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-pause">
        <path d="M5.5 14c-.8 0-1.5-.7-1.5-1.5v-9a1.5 1.5 0 1 1 3 0v9c0 .8-.7 1.5-1.5 1.5zm5 0c-.8 0-1.5-.7-1.5-1.5v-9a1.5 1.5 0 1 1 3 0v9c0 .8-.7 1.5-1.5 1.5z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-phone">
        <path d="M7.7 8.3c2.5 2.5 3-.4 4.7 1.2 1.5 1.6 2.4 1.9.5 3.9-.3.2-1.8 2.5-7.3-3-5.5-5.4-3.1-7-3-7.2 2-2 2.3-1.1 3.9.4C8 5.2 5.2 5.8 7.7 8.3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-play">
        <path d="M12.3 6.7c1 .6 1 2 0 2.6l-3.6 2.3-3.6 2.2c-1 .6-2.1-.2-2.1-1.3v-9c0-1.1 1.2-1.9 2.1-1.3l3.6 2.2 3.6 2.3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-playlist">
        <path fill="var(--_icn-c2)" d="M6 8h4v4H6z" />
        <path d="M11.3 6H4.5A2.6 2.6 0 0 0 2 8.6v2.9A2.7 2.7 0 0 0 4.7 14h6.8a2.6 2.6 0 0 0 2.5-2.6V8.5A2.7 2.7 0 0 0 11.3 6zM9.2 9h-.4c-.2 0-.5.2-.5.5v1.6c-.1.6-.6 1-1.2.9a1 1 0 0 1-.8-.8 1 1 0 0 1 1-1.2V8.7c0-.4.3-.7.7-.7h1.2c.3 0 .5.2.5.5s-.3.5-.5.5zm2-5H4.8c-.5 0-.8.3-.8.7 0 .4.3.8.8.8h6.5c.4 0 .8-.3.8-.8a.9.9 0 0 0-.9-.7zm-1-2H5.8c-.5 0-.8.3-.8.7 0 .4.3.8.8.8h4.5c.4 0 .8-.3.8-.8a.9.9 0 0 0-.9-.7z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-plus">
        <path d="M12.5 6.5h-3v-3a1.5 1.5 0 1 0-3 0v3h-3a1.5 1.5 0 1 0 0 3h3v3a1.5 1.5 0 0 0 3 0v-3h3a1.5 1.5 0 1 0 0-3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-printer">
        <path fill="var(--_icn-c2)" d="M5 3h6v3H5zM4 6.5h8v3H4zm8-.5h1v1h-1zm-7 5h6v3H5z" />
        <path d="M12 5.1V3.5c0-.8-.7-1.5-1.6-1.5H5.6C4.7 2 4 2.7 4 3.5v1.6c-1.2.3-2 1.3-2 2.5v2.9c0 1.2.9 2.1 2 2.4v.6c0 .8.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5v-.6c1.1-.3 2-1.3 2-2.5V7.5a2.7 2.7 0 0 0-2-2.4zM5 3.5c0-.3.3-.5.6-.5h4.9c.2 0 .5.2.5.5V5H5V3.5zm6 9.5v1H5v-3h6v2zm.5-4.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.2 0 .5.2.5.5s-.3.5-.5.5zm1-1.8-.2-.2.2-.2.2.2-.2.2z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-rss">
        <path d="M4 10.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2M2.5 2.5v2.1c5 0 8.9 4 9 8.9h2c0-6-5-11-11-11" />
        <path d="M2.5 6.2v2c2.9 0 5.2 2.4 5.2 5.3h2.1c0-4-3.2-7.3-7.3-7.3" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-search">
        <path d="M6.6 1.5C8 1.5 9.3 2 10.3 3a5.2 5.2 0 0 1-3.7 9c-2.8 0-5.1-2.3-5.1-5.2s2.3-5.2 5.1-5.2zm4.3 9.4c.2-.2.6-.2.8 0l2.5 2.2c.4.3.4.9 0 1.2-.2.3-.7.3-1 0l-2.3-2.5a.6.6 0 0 1 0-1z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-share">
        <path fill="var(--_icn-c2)" d="M6 6.5h4V11H6z" />
        <path d="M11.3 6.5H8.7v3.3c0 .4-.3.8-.8.8a.8.8 0 0 1-.8-.8V6.5H4.5A2.6 2.6 0 0 0 2 9.1V12a2.7 2.7 0 0 0 2.7 2.5h6.8a2.6 2.6 0 0 0 2.5-2.6V9a2.7 2.7 0 0 0-2.7-2.5z" />
        <path d="M10.3 3.5 8.5 1.7a.8.8 0 0 0-.5-.2l-.5.2-1.8 1.8c-.3.3-.3.8 0 1.1l.5.2.5-.2.5-.5v2.4h1.5v.7-3.1l.5.5c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-show">
        <path fill="var(--_icn-c2)" d="M5 5h6v5H5z" />
        <path d="M13.8 7.2s-3-3.5-5.8-3.5-5.8 3.5-5.8 3.5c-.3.4-.3.7 0 1.1 0 0 3 3.3 5.8 3.3s5.8-3.3 5.8-3.3c.3-.3.3-.7 0-1zM8 9.7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        <path d="M8 6.7a1 1 0 0 0-1 1 1 1 0 0 0 1 1A1 1 0 0 0 8.7 7a1 1 0 0 0-.7-.3z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-spotify">
        <path fill="var(--_icn-c2)" d="M3.5 5h9v6h-9z" />
        <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.8 8.7c-.1.2-.3.2-.5.1-1.5-.9-3.2-1.1-5.3-.6-.2 0-.4-.1-.4-.3 0-.2.1-.4.3-.4 2.3-.5 4.2-.3 5.8.7.1 0 .2.3.1.5zm.7-1.7c-.1.2-.4.3-.6.2a7.8 7.8 0 0 0-6-.7c-.3 0-.5-.1-.6-.3-.1-.3 0-.5.3-.6 2.2-.7 4.9-.3 6.7.8.3.1.3.4.2.6zm0-1.7c-1.9-1.1-5.1-1.3-7-.7-.2.1-.5-.1-.6-.3s.1-.7.4-.7c2.1-.7 5.6-.6 7.8.8.3.2.4.5.2.8-.1.2-.5.3-.8.1z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-star">
        <path d="M11.55 9.34a.62.62 0 0 0-.2.57l.54 2.84a.62.62 0 0 1-.27.63.68.68 0 0 1-.7.04L8.26 12.1a.7.7 0 0 0-.3-.08H7.8a.49.49 0 0 0-.16.05l-2.66 1.35a.73.73 0 0 1-.43.06.65.65 0 0 1-.53-.74l.54-2.84a.63.63 0 0 0-.2-.57L2.2 7.29a.6.6 0 0 1-.16-.65c.08-.23.28-.4.53-.43l2.98-.42a.67.67 0 0 0 .53-.35l1.31-2.6a.59.59 0 0 1 .12-.16l.06-.04a.4.4 0 0 1 .1-.08l.06-.02.1-.04h.25c.23.02.43.15.53.35l1.33 2.58c.1.2.29.33.5.36l2.98.42c.25.03.47.2.55.43a.6.6 0 0 1-.18.65l-2.24 2.05z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-twitter">
        <path d="M14.5 4.18c-.49.2-1 .34-1.53.4.55-.31.97-.8 1.17-1.4-.53.3-1.1.5-1.7.62a2.77 2.77 0 0 0-3.76-.12A2.46 2.46 0 0 0 7.9 6.1a7.69 7.69 0 0 1-5.5-2.64 2.44 2.44 0 0 0 .83 3.37c-.43 0-.84-.11-1.2-.3v.02c0 1.2.89 2.23 2.13 2.48a2.72 2.72 0 0 1-1.2.04 2.67 2.67 0 0 0 2.48 1.76 5.55 5.55 0 0 1-3.94 1.04A7.81 7.81 0 0 0 5.59 13c4.16.03 7.55-3.14 7.58-7.08v-.43c.52-.35.97-.8 1.33-1.3" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-user">
        <path d="M3 11.95C3 13.57 5.29 14 8 14c2.7 0 5-.4 5-2.04 0-1.63-2.29-2.06-5-2.06-2.7 0-5 .41-5 2.04zm5-3.6c1.84 0 3.3-1.41 3.3-3.17A3.23 3.23 0 0 0 8 2a3.23 3.23 0 0 0-3.3 3.17A3.23 3.23 0 0 0 8 8.36" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-warn">
        <rect fill="var(--_icn-c2)" x={6.5} y={5} width={3} height={9} />
        <path d="m14.82 12.42-6.02-10a.97.97 0 0 0-1.6 0l-6.02 10c-.46.67 0 1.58.8 1.58h12.04c.8 0 1.26-.91.8-1.58zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4.02a1 1 0 0 1-2 0L6.5 6a1.5 1.5 0 0 1 3 0L9 8.98z" />
      </symbol>
      <symbol viewBox="0 0 16 16" fill="var(--_icn-c)" id="icn-whattsup">
        <rect x={4} y={4} fill="var(--_icn-c2)" width={8} height={8} />
        <path d="M11.3,3c-1-0.6-2.1-1-3.3-1C4.7,2,2,4.7,2,8c0,1.3,0.4,2.5,1.1,3.5l-0.8,2.2L4.7,13c2.8,1.8,6.5,1.1,8.3-1.7 C14.8,8.5,14.1,4.8,11.3,3z M11.5,10.5L11.5,10.5c-0.2,0.4-0.7,0.8-1.2,0.8c-0.3,0.1-0.7,0.1-2.1-0.4C7,10.3,6,9.4,5.2,8.2 C4.8,7.7,4.6,7.1,4.5,6.4c0-0.6,0.2-1.1,0.6-1.5c0.2-0.1,0.4-0.2,0.6-0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.4,0.3 c0.1,0.3,0.5,1.2,0.5,1.3c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.2-0.2,0.3C6.6,7.1,6.5,7.1,6.4,7.2C6.3,7.3,6.3,7.4,6.4,7.6 c0.3,0.4,0.6,0.9,1,1.2c0.4,0.4,0.9,0.7,1.4,0.9c0.1,0.1,0.3,0,0.4-0.1C9.3,9.4,9.5,9.2,9.6,9c0.1-0.1,0.3-0.2,0.4-0.1 c0.2,0.1,1,0.5,1.2,0.6c0.2,0.1,0.3,0.1,0.3,0.2C11.6,9.9,11.6,10.2,11.5,10.5z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-zen">
        <path fill="var(--_icn-c2)" d="M6 4h4v8H6z" />
        <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm.8 8.7c0 .3-.3.5-.8.5s-.8-.2-.8-.5V5.3c0-.3.4-.5.8-.5s.8.2.8.5v5.4z" />
      </symbol>
      <symbol fill="var(--_icn-c)" viewBox="0 0 16 16" id="icn-zoom-in">
        <path fill="var(--_icn-c2)" d="M4 4h6v6H4z" />
        <path d="m13.7 12.5-1.6-1.3c-.2-.2-.6-.2-.9 0-.1.1-.2.3-.2.5s.1.4.2.5l1.4 1.6c.3.3.9.3 1.2 0 .3-.4.3-.9-.1-1.3zm-3.2-9A4.95 4.95 0 0 0 2 7c0 2.8 2.2 5 5 5a4.95 4.95 0 0 0 3.5-8.5zm-1 4h-2v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2v-2c0-.3.2-.5.5-.5s.5.2.5.5v2h2c.3 0 .5.2.5.5s-.2.5-.5.5z" />
      </symbol>
    </svg>
  );
}