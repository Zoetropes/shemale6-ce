"use strict";
/*
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <https://unlicense.org>
 */

if (window.flashvars&&(window.flashvars.video_alt_url||window.flashvars.video_url)) {
  let a=document.createElement("a");
  if (window.flashvars.video_alt_url) a.href=window.flashvars.video_alt_url; else a.href=window.flashvars.video_url;
  a.style.display="block";
  a.style.margin="0px 0px 10px 0px";
  a.style.color="rgba(255,255,255,0.6)";
  a.style.backgroundColor="rgba(32,32,32,0.6)";
  a.style.padding="9px 12px 7px 12px";
  a.style.font="bold 15px/15px Roboto, Sans-serif";
  a.style.borderRadius="4px";
  a.style.zIndex="99999";
  a.style.transition="0.2s ease";
  a.style.userSelect="none";
  a.onmouseover=function(e) {
    this.style.color="#fff";
    this.style.backgroundColor="rgba(32,32,32,0.8)";
    e.stopPropagation(); e.preventDefault();
  }
  a.onmouseout=function(e) {
    this.style.color="rgba(255,255,255,0.6)";
    this.style.backgroundColor="rgba(32,32,32,0.6)";
    e.stopPropagation(); e.preventDefault();
  }
  a.download=window.flashvars.video_id+" - "+window.flashvars.video_title+".mp4";
  a.innerHTML="DOWNLOAD (SAVE AS)";
  let vid=document.getElementsByClassName("video-container-show")[0];
  vid.insertBefore(a,vid.firstChild);
}
