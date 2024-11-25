const palettes = {
    "rose": {
        title: "Ecoshade - Rose Palette",
        colors: [
            "#FFB6C1", "#FFA6C9", "#FF69B4", "#FF007F", "#C71585",
            "#DC143C", "#B22222", "#8B0000", "#A52A2A", "#8B4513",
            "#D2B48C", "#FF6347", "#FF1493", "#DB7093", "#FFC0CB", "#FFE4E1"
        ]
    },
    "sun": {
        title: "EcoShade - Sun Palette",
        colors: [
            "#FFD700", "#FFA500", "#FFB347", "#FF7F50", "#FF6347",
            "#FF4500", "#FF8C00", "#DB7093", "#CD5C5C", "#FFDAB9",
            "#FFFACD", "#FF69B4", "#FFA07A", "#FFEFD5", "#FFEC8B", "#FFE4B5"
        ]
    },
    "peacock": {
        title: "EcoShade - Peacock Palette",
        colors: [
            "#1C6BA0", "#0F52BA", "#4169E1", "#6A5ACD", "#6F00FF",
            "#9A0EEA", "#8A2BE2", "#00A86B", "#50C878", "#40E0D0",
            "#2E8B57", "#006994", "#4682B4", "#6495ED", "#87CEFA", "#B0E0E6"
        ]
    },
    "banana": {
        title: "EcoShade - Banana Tree Palette",
        colors: [
            "#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#A4C639",
            "#9ACD32", "#556B2F", "#6B8E23", "#8B5A2B", "#8B4513",
            "#A0522D", "#8FBC8F", "#98FB98", "#ADFF2F", "#BDB76B", "#FAFAD2"
        ]
    },
    "salamander": {
        title: "EcoShade - Salamander Palette",
        colors: [
            "#FF4500", "#E25822", "#B22222", "#D2691E", "#A0522D",
            "#8B4513", "#CD5C5C", "#8B0000", "#FFA07A", "#FF6347",
            "#FF7F50", "#4B5320", "#A52A2A", "#D3A687", "#E9967A", "#BC8F8F"
        ]
    },
    "sea": {
        title: "EcoShade - Under the Sea Palette",
        colors: [
            "#FA6A1B", "#FF7A31", "#F4A261", "#FFB347", "#FFD700",
            "#2A9D8F", "#00A896", "#02C39A", "#264653", "#009CBD",
            "#9B5DE5", "#E674A5", "#87CEEB", "#B0E0E6", "#48D1CC", "#00CED1"
        ]
    },
    "bee-eater": {
        title: "EcoShade - Bee-Eater Palette",
        colors: [
            "#F2CB8B", "#FFCC69", "#FFD17D", "#F56C5B", "#FF6347",
            "#C55A45", "#6C8E4A", "#009F5D", "#5AB4FF", "#86C8BC",
            "#91B8D8", "#FF8C69", "#FFD1DC", "#FFEFD5", "#FFF5EE", "#E6E6FA"
        ]
    },
    "autumn": {
        title: "EcoShade - Autumn Palette",
        colors: [
            "#FF4500", "#FF8C00", "#FFD700", "#FFB347", "#D2691E",
            "#B22222", "#CD5C5C", "#8B4513", "#B87333", "#8B0000",
            "#FFA07A", "#FF6347", "#FA8072", "#FFE4C4", "#FFDEAD", "#FFEBCD"
        ]
    },
    "adrift": {
        title: "EcoShade - Adrift Palette",
        colors: [
            "#1B263B", "#415A77", "#778DA9", "#E0E1DD", "#F9C74F",
            "#F4A261", "#E59866", "#C6DCE4", "#6C567B", "#9A8C98",
            "#C3B299", "#F1FAEE", "#A8DADC", "#D3D3D3", "#FFFAF0", "#FFF5EE"
        ]
    },
    "peace": {
        title: "EcoShade - Peace Palette",
        colors: [
            "#264653", "#457B9D", "#A8DADC", "#F1FAEE", "#F4A261",
            "#E76F51", "#84A59D", "#F6BD60", "#FFD670", "#B2A4FF",
            "#FFA07A", "#6C6F76", "#FFDAB9", "#FFFACD", "#E0FFFF", "#F5F5F5"
        ]
    },
    "rainforest": {
        title: "EcoShade - Rainforest Palette",
        colors: [
            "#1B3B2A", "#2A6041", "#4F9D69", "#84C18D", "#A7D9A1",
            "#558B6E", "#355834", "#4F772D", "#A3C9A8", "#9B9B84",
            "#355E3B", "#B7D5A5", "#98FB98", "#A9DFBF", "#7DCEA0", "#82E0AA"
        ]
    },
    "mountainstream": {
        title: "EcoShade - Mountain Stream Palette",
        colors: [
            "#2C6E91", "#4BA3C3", "#76D0E8", "#8BC6EC", "#A9E9F8",
            "#A8CED0", "#639AA2", "#8DB9C5", "#557A83", "#346B75",
            "#2A4B60", "#C3E0E8", "#B0E0E6", "#AFEEEE", "#ADD8E6", "#87CEFA"
        ]
    },
    "butterfly": {
        title: "EcoShade - Butterfly Palette",
        colors: [
            "#778DA9", "#415A77", "#1B263B", "#C6DCE4", "#E0E1DD",
            "#E59866", "#F9C74F", "#577590", "#9A8C98", "#6C567B",
            "#8D99AE", "#F2CB8B", "#F5DEB3", "#FDF5E6", "#FAEBD7", "#EEDC82"
        ]
    },
    "dragonfly": {
        title: "EcoShade - Dragonfly Palette",
        colors: [
            "#264653", "#1D3557", "#457B9D", "#A8DADC", "#F1FAEE",
            "#E63946", "#E76F51", "#F4A261", "#D62828", "#3A86FF",
            "#D9B44A", "#3B5998", "#FFF8DC", "#FFDAB9", "#FFE4B5", "#FFEBCD"
        ]
    },
    "guppy": {
        title: "EcoShade - Guppy Palette",
        colors: [
            "#2B2D42", "#EF233C", "#F15BB5", "#9B5DE5", "#6A0572",
            "#FF4D6D", "#FFD166", "#FF7F11", "#F4A261", "#00BBF9",
            "#00F5D4", "#FFB6C1", "#FADADD", "#FFC0CB", "#F8B195", "#F67280"
        ]
    }
};



function generatePalette(paletteKey) {
    const palette = palettes[paletteKey];
    if (!palette) return;

    document.getElementById('palette-title').textContent = palette.title;

    const colorGrid = document.getElementById('color-grid');
    colorGrid.innerHTML = '';
    palette.colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.setAttribute('data-color', color);
        swatch.setAttribute('onclick', `copyToClipboard('${color}')`);

        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.setAttribute('data-hex', color);
        swatch.appendChild(colorDiv);
        colorGrid.appendChild(swatch);
    });
}

let soundEnabled = true;

if (localStorage.getItem('soundEnabled') !== null) {
    soundEnabled = localStorage.getItem('soundEnabled') === 'true';
    updateSoundToggleButton();
}

function updateSoundToggleButton() {
    const soundToggleButton = document.getElementById('sound-toggle');
    soundToggleButton.textContent = soundEnabled ? 'Sound: On' : 'Sound: Off';
}

document.getElementById('sound-toggle').addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    updateSoundToggleButton();
});

function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
        if (soundEnabled) {
            const clickSound = document.getElementById('click-sound');
            clickSound.currentTime = 0;
            clickSound.play();
        }
        showToast(`Copied ${color} to clipboard!`);
    }).catch(() => {
        showToast('Failed to copy color');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 1000);
}

const urlParams = new URLSearchParams(window.location.search);
const paletteKey = urlParams.get('palette') || 'adrift';
generatePalette(paletteKey);


function generatePalette(paletteKey) {
    const palette = palettes[paletteKey];
    if (!palette) return;

    document.getElementById('palette-title').textContent = palette.title;

    // Update the document title
    document.title = `EcoShade | ${palette.title.replace('EcoShade -','')}`;

    const colorGrid = document.getElementById('color-grid');
    colorGrid.innerHTML = '';
    palette.colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.setAttribute('data-color', color);
        swatch.setAttribute('onclick', `copyToClipboard('${color}')`);

        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.setAttribute('data-hex', color);
        swatch.appendChild(colorDiv);
        colorGrid.appendChild(swatch);
    });
}
