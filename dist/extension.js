"use strict";var p=Object.create;var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var b=(a,e)=>{for(var t in e)o(a,t,{get:e[t],enumerable:!0})},l=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of h(e))!g.call(a,i)&&i!==t&&o(a,i,{get:()=>e[i],enumerable:!(n=u(e,i))||n.enumerable});return a};var v=(a,e,t)=>(t=a!=null?p(x(a)):{},l(e||!a||!a.__esModule?o(t,"default",{value:a,enumerable:!0}):t,a)),y=a=>l(o({},"__esModule",{value:!0}),a);var B={};b(B,{activate:()=>w,deactivate:()=>k});module.exports=y(B);var r=v(require("vscode"));var d=[{family:"Turquoise",name:"Aqua Island",hex:"#A8CCB5"},{family:"Turquoise",name:"Medium Aquamarine",hex:"#66CCAB"},{family:"Turquoise",name:"Medium Turquoise",hex:"#4ECDC4"},{family:"Turquoise",name:"Turquoise",hex:"#1ABC9C"},{family:"Turquoise",name:"Green Sea",hex:"#16A085"},{family:"Turquoise",name:"Niagara",hex:"#17869E"},{family:"Turquoise",name:"Dark Cyan",hex:"#148F77"},{family:"Green",name:"Menthol",hex:"#C2F2A0"},{family:"Green",name:"Inchworm",hex:"#B1E956"},{family:"Green",name:"Eton Blue",hex:"#87D37C"},{family:"Green",name:"Emerald",hex:"#2ECC71"},{family:"Green",name:"Nephritis",hex:"#27AE60"},{family:"Green",name:"Salem",hex:"#1E8449"},{family:"Green",name:"Dark Forest",hex:"#145A32"},{family:"Blue",name:"Powder Blue",hex:"#AED6F1"},{family:"Blue",name:"Malibu",hex:"#6BB9F0"},{family:"Blue",name:"Picton Blue",hex:"#5DADE2"},{family:"Blue",name:"Peter River",hex:"#3498DB"},{family:"Blue",name:"Belize Hole",hex:"#2980B9"},{family:"Blue",name:"Jelly Bean",hex:"#2471A3"},{family:"Blue",name:"Prussian Blue",hex:"#1A5276"},{family:"Purple",name:"Lavender",hex:"#D7BDE2"},{family:"Purple",name:"Plum",hex:"#C39BD3"},{family:"Purple",name:"Soft Purple",hex:"#BE90D4"},{family:"Purple",name:"Amethyst",hex:"#9B59B6"},{family:"Purple",name:"Wisteria",hex:"#8E44AD"},{family:"Purple",name:"Seance",hex:"#7D3C98"},{family:"Purple",name:"Dark Purple",hex:"#6C3483"},{family:"Dark",name:"Cadet Blue",hex:"#4B77BE"},{family:"Dark",name:"Blue Steel",hex:"#3D566E"},{family:"Dark",name:"Wet Asphalt",hex:"#34495E"},{family:"Dark",name:"Midnight Blue",hex:"#2C3E50"},{family:"Dark",name:"Cloudburst",hex:"#1C2833"},{family:"Yellow",name:"Banana Mania",hex:"#FBE7A1"},{family:"Yellow",name:"Mustard",hex:"#FFE066"},{family:"Yellow",name:"Sun Flower",hex:"#F1C40F"},{family:"Yellow",name:"Golden Rod",hex:"#F9BF3B"},{family:"Yellow",name:"Old Gold",hex:"#D4AC0D"},{family:"Yellow",name:"Dark Gold",hex:"#B7950B"},{family:"Orange",name:"Peach",hex:"#FAD7A0"},{family:"Orange",name:"Sandy Brown",hex:"#F5CBA7"},{family:"Orange",name:"California",hex:"#F9690E"},{family:"Orange",name:"Orange",hex:"#F39C12"},{family:"Orange",name:"Carrot",hex:"#E67E22"},{family:"Orange",name:"Pumpkin",hex:"#D35400"},{family:"Orange",name:"Rust",hex:"#BA4A00"},{family:"Red",name:"Pale Pink",hex:"#FADBD8"},{family:"Red",name:"Light Coral",hex:"#F1948A"},{family:"Red",name:"Sunset Orange",hex:"#FF5733"},{family:"Red",name:"Alizarin",hex:"#E74C3C"},{family:"Red",name:"Pomegranate",hex:"#C0392B"},{family:"Red",name:"Brick",hex:"#A93226"},{family:"Red",name:"Dark Red",hex:"#922B21"},{family:"Pink",name:"Fairy Tale",hex:"#FFD6E0"},{family:"Pink",name:"Pink Lace",hex:"#FFB3C6"},{family:"Pink",name:"Flamingo",hex:"#FF85A2"},{family:"Pink",name:"Hot Pink",hex:"#FF69B4"},{family:"Pink",name:"Radical Red",hex:"#F45F74"},{family:"Pink",name:"Brink Pink",hex:"#F75172"},{family:"Pink",name:"Crimson",hex:"#DC143C"},{family:"Brown",name:"Almond",hex:"#EFCFA0"},{family:"Brown",name:"Tan",hex:"#D2996E"},{family:"Brown",name:"Caramel",hex:"#C47A3A"},{family:"Brown",name:"Sienna",hex:"#A0522D"},{family:"Brown",name:"Brown",hex:"#795548"},{family:"Brown",name:"Chocolate",hex:"#5D4037"},{family:"Brown",name:"Dark Brown",hex:"#3E2723"},{family:"Gray",name:"Clouds",hex:"#ECF0F1"},{family:"Gray",name:"Silver",hex:"#BDC3C7"},{family:"Gray",name:"Concrete",hex:"#95A5A6"},{family:"Gray",name:"Asbestos",hex:"#7F8C8D"},{family:"Gray",name:"Dark Gray",hex:"#626567"},{family:"Gray",name:"Charcoal",hex:"#424242"},{family:"Gray",name:"Almost Black",hex:"#212121"}],m=["All","Turquoise","Green","Blue","Purple","Dark","Yellow","Orange","Red","Pink","Brown","Gray"],s={All:"#9B59B6",Turquoise:"#1ABC9C",Green:"#2ECC71",Blue:"#3498DB",Purple:"#9B59B6",Dark:"#2C3E50",Yellow:"#F1C40F",Orange:"#E67E22",Red:"#E74C3C",Pink:"#F75172",Brown:"#795548",Gray:"#95A5A6"};var c=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="Content-Security-Policy"
  content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>Flat UI Colors</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root {
  --bg:       var(--vscode-editor-background, #1e1e1e);
  --bg2:      var(--vscode-sideBar-background, #252526);
  --bg3:      var(--vscode-editorGroupHeader-tabsBackground, #2d2d2d);
  --fg:       var(--vscode-editor-foreground, #d4d4d4);
  --fg-dim:   var(--vscode-descriptionForeground, #9d9d9d);
  --border:   var(--vscode-panel-border, #3c3c3c);
  --accent:   var(--vscode-button-background, #0078d4);
  --accent-fg:var(--vscode-button-foreground, #fff);
  --inp-bg:   var(--vscode-input-background, #3c3c3c);
  --hover:    var(--vscode-list-hoverBackground, #2a2d2e);
  --sel-bg:   var(--vscode-list-activeSelectionBackground, #094771);
  --sel-fg:   var(--vscode-list-activeSelectionForeground, #fff);
}

html,body { height:100%; background:var(--bg); color:var(--fg);
  font-family:var(--vscode-font-family,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif);
  font-size:13px; overflow:hidden; }

/* \u2500\u2500 APP SHELL \u2500\u2500 */
#app { display:flex; flex-direction:column; height:100vh; }

/* \u2500\u2500 TOOLBAR \u2500\u2500 */
#toolbar {
  display:flex; align-items:center; gap:10px;
  padding:8px 14px; flex-shrink:0;
  background:var(--bg2); border-bottom:1px solid var(--border);
}
#toolbar h1 { font-size:13px; font-weight:700; white-space:nowrap; margin-right:4px; }

.fmt-group {
  display:flex; gap:1px; background:var(--inp-bg); border-radius:5px; padding:2px;
}
.fmt-btn {
  padding:3px 10px; border:none; background:transparent; color:var(--fg-dim);
  cursor:pointer; border-radius:3px; font-size:11px; font-weight:700; letter-spacing:.4px;
  transition:background .12s,color .12s;
}
.fmt-btn:hover { background:var(--hover); color:var(--fg); }
.fmt-btn.active { background:var(--accent); color:var(--accent-fg); }

#search {
  margin-left:auto; padding:4px 10px; background:var(--inp-bg);
  border:1px solid var(--border); border-radius:5px; color:var(--fg);
  font-size:12px; width:180px; outline:none;
}
#search:focus { border-color:var(--accent); }
#search::placeholder { color:var(--fg-dim); }

/* \u2500\u2500 BODY \u2500\u2500 */
#content { display:flex; flex:1; overflow:hidden; }

/* \u2500\u2500 SIDEBAR \u2500\u2500 */
#sidebar {
  width:160px; flex-shrink:0; background:var(--bg2);
  border-right:1px solid var(--border); padding:6px 0;
  overflow-y:auto;
}
#sidebar::-webkit-scrollbar { width:4px; }
#sidebar::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

.fam-btn {
  width:100%; padding:7px 14px; border:none; background:transparent;
  color:var(--fg-dim); cursor:pointer; text-align:left;
  font-size:12px; font-weight:500;
  display:flex; align-items:center; gap:9px;
  transition:background .1s,color .1s;
}
.fam-btn:hover { background:var(--hover); color:var(--fg); }
.fam-btn.active { background:var(--sel-bg); color:var(--sel-fg); font-weight:600; }

.fam-dot {
  width:10px; height:10px; border-radius:50%; flex-shrink:0;
}

.fam-label { flex:1; }
.fam-count { font-size:10px; opacity:.6; }

/* \u2500\u2500 MAIN \u2500\u2500 */
#main { flex:1; overflow-y:auto; padding:16px 18px; }
#main::-webkit-scrollbar { width:6px; }
#main::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }

#count { font-size:11px; color:var(--fg-dim); margin-bottom:12px; }

#grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(145px,1fr));
  gap:10px;
}

/* \u2500\u2500 COLOR CARD \u2500\u2500 */
.card {
  border-radius:8px; overflow:hidden; cursor:pointer;
  background:var(--bg2); box-shadow:0 1px 4px rgba(0,0,0,.35);
  transition:transform .15s ease,box-shadow .15s ease;
  user-select:none;
}
.card:hover {
  transform:translateY(-3px) scale(1.025);
  box-shadow:0 8px 24px rgba(0,0,0,.45);
}
.card:active { transform:scale(.97); }

.swatch {
  height:108px; position:relative; overflow:hidden;
}

.copy-hint {
  position:absolute; inset:0;
  display:flex; align-items:center; justify-content:center;
  background:rgba(0,0,0,0); opacity:0;
  transition:opacity .15s,background .15s;
}
.card:hover .copy-hint { opacity:1; background:rgba(0,0,0,.22); }

.copy-icon {
  width:34px; height:34px; border-radius:50%;
  background:rgba(255,255,255,.92);
  display:flex; align-items:center; justify-content:center;
  font-size:15px; box-shadow:0 2px 8px rgba(0,0,0,.3);
}

.info { padding:9px 11px; border-top:1px solid rgba(128,128,128,.12); }

.cname {
  font-size:12px; font-weight:600; color:var(--fg);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  margin-bottom:3px;
}
.cval {
  font-size:10px; color:var(--fg-dim);
  font-family:var(--vscode-editor-font-family,'Courier New',monospace);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

/* \u2500\u2500 EMPTY STATE \u2500\u2500 */
#empty {
  display:none; flex-direction:column; align-items:center;
  justify-content:center; padding:60px 20px;
  color:var(--fg-dim); text-align:center; gap:8px;
}
#empty .ico { font-size:42px; }

/* \u2500\u2500 TOAST \u2500\u2500 */
#toast {
  position:fixed; bottom:20px; right:20px;
  background:var(--bg3,#333); color:var(--fg);
  padding:10px 16px; border-radius:7px;
  font-size:12px; font-weight:500;
  box-shadow:0 4px 18px rgba(0,0,0,.5);
  border-left:3px solid #2ECC71;
  display:flex; align-items:center; gap:8px;
  transform:translateY(70px); opacity:0;
  transition:transform .22s ease,opacity .22s ease;
  z-index:999; pointer-events:none; max-width:320px;
}
#toast.show { transform:translateY(0); opacity:1; }
</style>
</head>
<body>
<div id="app">

  <!-- TOOLBAR -->
  <div id="toolbar">
    <h1>&#127912; Flat UI Colors</h1>
    <div class="fmt-group">
      <button class="fmt-btn active" data-fmt="HEX">HEX</button>
      <button class="fmt-btn" data-fmt="RGB">RGB</button>
      <button class="fmt-btn" data-fmt="HSL">HSL</button>
      <button class="fmt-btn" data-fmt="CMYK">CMYK</button>
    </div>
    <input id="search" type="search" placeholder="&#128269; Search colors..." autocomplete="off" spellcheck="false" />
  </div>

  <!-- BODY -->
  <div id="content">
    <div id="sidebar"></div>
    <div id="main">
      <div id="count"></div>
      <div id="grid"></div>
      <div id="empty">
        <div class="ico">&#127912;</div>
        <div>No colors found</div>
        <small>Try a different filter or search term</small>
      </div>
    </div>
  </div>
</div>

<div id="toast"><span>&#10003;</span><span id="toast-msg">Copied!</span></div>

<script>
(function() {
  var vscode     = acquireVsCodeApi();
  var COLORS     = __COLORS_JSON__;
  var FAM_ORDER  = __FAMILY_ORDER__;
  var FAM_COLORS = __FAMILY_COLORS__;
  var state      = { fmt: 'HEX', family: 'All', search: '' };
  var toastTimer = null;

  // \u2500\u2500 COLOR CONVERSION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

  function hexToRgb(hex) {
    var m = /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex);
    return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null;
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if      (max === r) { h = ((g - b) / d + (g < b ? 6 : 0)) / 6; }
      else if (max === g) { h = ((b - r) / d + 2) / 6; }
      else                { h = ((r - g) / d + 4) / 6; }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function rgbToCmyk(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var k = 1 - Math.max(r, g, b);
    if (k === 1) { return { c: 0, m: 0, y: 0, k: 100 }; }
    return {
      c: Math.round(((1 - r - k) / (1 - k)) * 100),
      m: Math.round(((1 - g - k) / (1 - k)) * 100),
      y: Math.round(((1 - b - k) / (1 - k)) * 100),
      k: Math.round(k * 100)
    };
  }

  function fmtColor(hex, fmt) {
    var rgb = hexToRgb(hex);
    if (!rgb) { return hex; }
    if (fmt === 'HEX')  { return hex.toUpperCase(); }
    if (fmt === 'RGB')  { return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')'; }
    if (fmt === 'HSL') {
      var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      return 'hsl(' + hsl.h + 'deg, ' + hsl.s + '%, ' + hsl.l + '%)';
    }
    if (fmt === 'CMYK') {
      var cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
      return 'cmyk(' + cmyk.c + '%, ' + cmyk.m + '%, ' + cmyk.y + '%, ' + cmyk.k + '%)';
    }
    return hex;
  }

  // \u2500\u2500 SIDEBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

  function renderSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    FAM_ORDER.forEach(function(fam) {
      var cnt = fam === 'All'
        ? COLORS.length
        : COLORS.filter(function(c) { return c.family === fam; }).length;
      if (cnt === 0 && fam !== 'All') { return; }

      var btn = document.createElement('button');
      btn.className = 'fam-btn' + (state.family === fam ? ' active' : '');
      btn.dataset.fam = fam;

      var dot = document.createElement('span');
      dot.className = 'fam-dot';
      if (fam === 'All') {
        dot.style.background = 'linear-gradient(135deg,#1ABC9C 33%,#3498DB 66%,#E74C3C)';
      } else {
        dot.style.background = FAM_COLORS[fam] || '#888';
      }

      var lbl = document.createElement('span');
      lbl.className = 'fam-label';
      lbl.textContent = fam;

      var badge = document.createElement('span');
      badge.className = 'fam-count';
      badge.textContent = cnt;

      btn.appendChild(dot);
      btn.appendChild(lbl);
      btn.appendChild(badge);

      btn.addEventListener('click', function() {
        state.family = fam;
        renderAll();
      });

      sidebar.appendChild(btn);
    });
  }

  // \u2500\u2500 COLOR GRID \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

  function renderGrid() {
    var grid  = document.getElementById('grid');
    var empty = document.getElementById('empty');
    var count = document.getElementById('count');

    var filtered = COLORS;
    if (state.family !== 'All') {
      filtered = filtered.filter(function(c) { return c.family === state.family; });
    }
    if (state.search) {
      var q = state.search.toLowerCase();
      filtered = filtered.filter(function(c) {
        return c.name.toLowerCase().indexOf(q) !== -1
            || c.hex.toLowerCase().indexOf(q) !== -1
            || c.family.toLowerCase().indexOf(q) !== -1;
      });
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
      empty.style.display = 'flex';
      grid.style.display  = 'none';
      count.textContent   = '';
      return;
    }

    empty.style.display = 'none';
    grid.style.display  = 'grid';
    count.textContent   = filtered.length + (filtered.length === 1 ? ' color' : ' colors');

    filtered.forEach(function(color) {
      var card = document.createElement('div');
      card.className = 'card';
      card.title     = color.name + ' \\u2014 click to copy';

      // Swatch
      var swatch = document.createElement('div');
      swatch.className      = 'swatch';
      swatch.style.background = color.hex;

      var hint = document.createElement('div');
      hint.className = 'copy-hint';
      var ico = document.createElement('div');
      ico.className   = 'copy-icon';
      ico.textContent = '\\uD83D\\uDCCB'; // clipboard emoji
      hint.appendChild(ico);
      swatch.appendChild(hint);

      // Info
      var info = document.createElement('div');
      info.className = 'info';

      var nm = document.createElement('div');
      nm.className   = 'cname';
      nm.textContent = color.name;

      var vl = document.createElement('div');
      vl.className   = 'cval';
      vl.textContent = fmtColor(color.hex, state.fmt);

      info.appendChild(nm);
      info.appendChild(vl);
      card.appendChild(swatch);
      card.appendChild(info);

      card.addEventListener('click', function() {
        var text = fmtColor(color.hex, state.fmt);
        vscode.postMessage({ command: 'copy', text: text });
      });

      grid.appendChild(card);
    });
  }

  function renderAll() {
    renderSidebar();
    renderGrid();
  }

  // \u2500\u2500 TOAST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

  function showToast(text) {
    var toast = document.getElementById('toast');
    var msg   = document.getElementById('toast-msg');
    msg.textContent = 'Copied: ' + text;
    toast.classList.add('show');
    if (toastTimer) { clearTimeout(toastTimer); }
    toastTimer = setTimeout(function() {
      toast.classList.remove('show');
    }, 2600);
  }

  // \u2500\u2500 EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

  // clipboard result from extension host
  window.addEventListener('message', function(ev) {
    var data = ev.data;
    if (data && data.command === 'copied') { showToast(data.text); }
  });

  // format buttons
  document.querySelectorAll('.fmt-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.fmt-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.fmt = btn.dataset.fmt;
      renderGrid();
    });
  });

  // search
  document.getElementById('search').addEventListener('input', function(e) {
    state.search = e.target.value.trim();
    renderGrid();
  });

  // \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  renderAll();
})();
</script>
</body>
</html>
`;function f(){return c.replace("__COLORS_JSON__",JSON.stringify(d)).replace("__FAMILY_ORDER__",JSON.stringify(m)).replace("__FAMILY_COLORS__",JSON.stringify(s))}function w(a){let e,t=r.commands.registerCommand("flatUiColors.open",()=>{if(e){e.reveal(r.ViewColumn.One);return}e=r.window.createWebviewPanel("flatUiColors","Flat UI Colors",r.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0}),e.webview.html=f(),e.webview.onDidReceiveMessage(async n=>{n.command==="copy"&&(await r.env.clipboard.writeText(n.text),e?.webview.postMessage({command:"copied",text:n.text}))},void 0,a.subscriptions),e.onDidDispose(()=>{e=void 0},null,a.subscriptions)});a.subscriptions.push(t)}function k(){}0&&(module.exports={activate,deactivate});
