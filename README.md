# Flat UI Color Picker

> Browse, filter, and copy Flat UI color codes directly inside Visual Studio Code — in HEX, RGB, HSL, or CMYK format.

---

## Features

- 🎨 **80+ curated Flat UI colors** across 11 families: Turquoise, Green, Blue, Purple, Dark, Yellow, Orange, Red, Pink, Brown, and Gray
- 🗂️ **Family sidebar** — filter colors by family with a single click; color-coded dot indicators for quick recognition
- 🔍 **Live search** — instantly filter by color name, hex value, or family name
- 📋 **One-click copy** — click any color card to copy its value straight to your clipboard
- 🔄 **Multiple format support** — switch between HEX, RGB, HSL, and CMYK with a single button press
- 🍞 **Copy toast notification** — non-intrusive confirmation shows the copied value after every copy action
- 🖥️ **Theme-aware UI** — adapts to your current VS Code light or dark theme automatically

---

## Prerequisites

| Requirement | Version |
|---|---|
| [Visual Studio Code](https://code.visualstudio.com/) | `^1.85.0` |
| Node.js *(for building from source only)* | `18.x` or later |

---

## Installation

### From a `.vsix` package (recommended)

1. Download `vscode-extension-flat-ui-color-picker-2.0.0.vsix` from the releases page (or build it yourself — see below).
2. Open VS Code.
3. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
4. Run **Extensions: Install from VSIX…**
5. Select the downloaded `.vsix` file.
6. Reload VS Code when prompted.

### Build and install from source

```bash
# 1. Clone the repository
git clone https://github.com/local-dev/vscode-extension-flat-ui-color-picker
cd vscode-extension-flat-ui-color-picker

# 2. Install dependencies
npm install

# 3. Build the production bundle
npm run package

# 4. Install the generated .vsix
code --install-extension vscode-extension-flat-ui-color-picker-2.0.0.vsix
```

---

## How to Use

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Type **Flat UI Colors: Open Color Browser** and press `Enter`.
3. The color browser panel opens in the editor area.

### Picking a color

| Action | How |
|---|---|
| **Browse all colors** | Select **All** in the left sidebar |
| **Filter by family** | Click a family name (e.g., *Blue*, *Green*) in the sidebar |
| **Search** | Type in the search box (top-right) — matches name, hex, or family |
| **Copy a color** | Click any color card — the value is copied to your clipboard |
| **Change format** | Click **HEX**, **RGB**, **HSL**, or **CMYK** in the toolbar before (or after) clicking a card |

A confirmation toast appears at the bottom-right of the panel after each copy, showing the exact value that was copied.

---

## Color Families

| Family | Colors | Sample |
|---|---|---|
| Turquoise | 7 | `#1ABC9C` Turquoise, `#16A085` Green Sea |
| Green | 7 | `#2ECC71` Emerald, `#27AE60` Nephritis |
| Blue | 7 | `#3498DB` Peter River, `#2980B9` Belize Hole |
| Purple | 7 | `#9B59B6` Amethyst, `#8E44AD` Wisteria |
| Dark | 5 | `#2C3E50` Midnight Blue, `#34495E` Wet Asphalt |
| Yellow | 6 | `#F1C40F` Sun Flower, `#F9BF3B` Golden Rod |
| Orange | 7 | `#E67E22` Carrot, `#D35400` Pumpkin |
| Red | 7 | `#E74C3C` Alizarin, `#C0392B` Pomegranate |
| Pink | 7 | `#FF69B4` Hot Pink, `#F75172` Brink Pink |
| Brown | 7 | `#795548` Brown, `#5D4037` Chocolate |
| Gray | 7 | `#ECF0F1` Clouds, `#BDC3C7` Silver |

---

## Supported Color Formats

| Format | Example output |
|---|---|
| **HEX** | `#3498DB` |
| **RGB** | `rgb(52, 152, 219)` |
| **HSL** | `hsl(204deg, 70%, 53%)` |
| **CMYK** | `cmyk(76%, 31%, 0%, 14%)` |

---

## Development

```bash
# Watch mode (auto-recompile on save)
npm run watch

# Type-check without emitting
npm run check-types

# Production build
npm run package
```

Press `F5` in VS Code to launch an **Extension Development Host** for live testing.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Make your changes and ensure `npm run check-types` passes with no errors.
3. Open a pull request with a clear description of your changes.

---

## License

[MIT](LICENSE)

---

## Popular Flat Color Picker Tools

1. [flatuicolors.com](https://flatuicolors.com)
2. [flatuicolorpicker.com](https://www.flatuicolorpicker.com)
3. [materialui.co/flatuicolors](https://materialui.co/flatuicolors)