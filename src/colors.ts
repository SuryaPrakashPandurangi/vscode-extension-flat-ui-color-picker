export interface Color {
  family: string;
  name: string;
  hex: string;
}

export const COLOR_DATA: Color[] = [
  // TURQUOISE
  { family: 'Turquoise', name: 'Aqua Island',       hex: '#A8CCB5' },
  { family: 'Turquoise', name: 'Medium Aquamarine',  hex: '#66CCAB' },
  { family: 'Turquoise', name: 'Medium Turquoise',   hex: '#4ECDC4' },
  { family: 'Turquoise', name: 'Turquoise',          hex: '#1ABC9C' },
  { family: 'Turquoise', name: 'Green Sea',          hex: '#16A085' },
  { family: 'Turquoise', name: 'Niagara',            hex: '#17869E' },
  { family: 'Turquoise', name: 'Dark Cyan',          hex: '#148F77' },

  // GREEN
  { family: 'Green', name: 'Menthol',         hex: '#C2F2A0' },
  { family: 'Green', name: 'Inchworm',        hex: '#B1E956' },
  { family: 'Green', name: 'Eton Blue',       hex: '#87D37C' },
  { family: 'Green', name: 'Emerald',         hex: '#2ECC71' },
  { family: 'Green', name: 'Nephritis',       hex: '#27AE60' },
  { family: 'Green', name: 'Salem',           hex: '#1E8449' },
  { family: 'Green', name: 'Dark Forest',     hex: '#145A32' },

  // BLUE
  { family: 'Blue', name: 'Powder Blue',   hex: '#AED6F1' },
  { family: 'Blue', name: 'Malibu',        hex: '#6BB9F0' },
  { family: 'Blue', name: 'Picton Blue',   hex: '#5DADE2' },
  { family: 'Blue', name: 'Peter River',   hex: '#3498DB' },
  { family: 'Blue', name: 'Belize Hole',   hex: '#2980B9' },
  { family: 'Blue', name: 'Jelly Bean',    hex: '#2471A3' },
  { family: 'Blue', name: 'Prussian Blue', hex: '#1A5276' },

  // PURPLE
  { family: 'Purple', name: 'Lavender',     hex: '#D7BDE2' },
  { family: 'Purple', name: 'Plum',         hex: '#C39BD3' },
  { family: 'Purple', name: 'Soft Purple',  hex: '#BE90D4' },
  { family: 'Purple', name: 'Amethyst',     hex: '#9B59B6' },
  { family: 'Purple', name: 'Wisteria',     hex: '#8E44AD' },
  { family: 'Purple', name: 'Seance',       hex: '#7D3C98' },
  { family: 'Purple', name: 'Dark Purple',  hex: '#6C3483' },

  // DARK
  { family: 'Dark', name: 'Cadet Blue',    hex: '#4B77BE' },
  { family: 'Dark', name: 'Blue Steel',    hex: '#3D566E' },
  { family: 'Dark', name: 'Wet Asphalt',   hex: '#34495E' },
  { family: 'Dark', name: 'Midnight Blue', hex: '#2C3E50' },
  { family: 'Dark', name: 'Cloudburst',    hex: '#1C2833' },

  // YELLOW
  { family: 'Yellow', name: 'Banana Mania', hex: '#FBE7A1' },
  { family: 'Yellow', name: 'Mustard',      hex: '#FFE066' },
  { family: 'Yellow', name: 'Sun Flower',   hex: '#F1C40F' },
  { family: 'Yellow', name: 'Golden Rod',   hex: '#F9BF3B' },
  { family: 'Yellow', name: 'Old Gold',     hex: '#D4AC0D' },
  { family: 'Yellow', name: 'Dark Gold',    hex: '#B7950B' },

  // ORANGE
  { family: 'Orange', name: 'Peach',         hex: '#FAD7A0' },
  { family: 'Orange', name: 'Sandy Brown',   hex: '#F5CBA7' },
  { family: 'Orange', name: 'California',    hex: '#F9690E' },
  { family: 'Orange', name: 'Orange',        hex: '#F39C12' },
  { family: 'Orange', name: 'Carrot',        hex: '#E67E22' },
  { family: 'Orange', name: 'Pumpkin',       hex: '#D35400' },
  { family: 'Orange', name: 'Rust',          hex: '#BA4A00' },

  // RED
  { family: 'Red', name: 'Pale Pink',      hex: '#FADBD8' },
  { family: 'Red', name: 'Light Coral',    hex: '#F1948A' },
  { family: 'Red', name: 'Sunset Orange',  hex: '#FF5733' },
  { family: 'Red', name: 'Alizarin',       hex: '#E74C3C' },
  { family: 'Red', name: 'Pomegranate',    hex: '#C0392B' },
  { family: 'Red', name: 'Brick',          hex: '#A93226' },
  { family: 'Red', name: 'Dark Red',       hex: '#922B21' },

  // PINK
  { family: 'Pink', name: 'Fairy Tale',    hex: '#FFD6E0' },
  { family: 'Pink', name: 'Pink Lace',     hex: '#FFB3C6' },
  { family: 'Pink', name: 'Flamingo',      hex: '#FF85A2' },
  { family: 'Pink', name: 'Hot Pink',      hex: '#FF69B4' },
  { family: 'Pink', name: 'Radical Red',   hex: '#F45F74' },
  { family: 'Pink', name: 'Brink Pink',    hex: '#F75172' },
  { family: 'Pink', name: 'Crimson',       hex: '#DC143C' },

  // BROWN
  { family: 'Brown', name: 'Almond',      hex: '#EFCFA0' },
  { family: 'Brown', name: 'Tan',         hex: '#D2996E' },
  { family: 'Brown', name: 'Caramel',     hex: '#C47A3A' },
  { family: 'Brown', name: 'Sienna',      hex: '#A0522D' },
  { family: 'Brown', name: 'Brown',       hex: '#795548' },
  { family: 'Brown', name: 'Chocolate',   hex: '#5D4037' },
  { family: 'Brown', name: 'Dark Brown',  hex: '#3E2723' },

  // GRAY
  { family: 'Gray', name: 'Clouds',        hex: '#ECF0F1' },
  { family: 'Gray', name: 'Silver',        hex: '#BDC3C7' },
  { family: 'Gray', name: 'Concrete',      hex: '#95A5A6' },
  { family: 'Gray', name: 'Asbestos',      hex: '#7F8C8D' },
  { family: 'Gray', name: 'Dark Gray',     hex: '#626567' },
  { family: 'Gray', name: 'Charcoal',      hex: '#424242' },
  { family: 'Gray', name: 'Almost Black',  hex: '#212121' },
];

export const FAMILY_ORDER: string[] = [
  'All', 'Turquoise', 'Green', 'Blue', 'Purple',
  'Dark', 'Yellow', 'Orange', 'Red', 'Pink', 'Brown', 'Gray',
];

export const FAMILY_COLORS: Record<string, string> = {
  All:       '#9B59B6',
  Turquoise: '#1ABC9C',
  Green:     '#2ECC71',
  Blue:      '#3498DB',
  Purple:    '#9B59B6',
  Dark:      '#2C3E50',
  Yellow:    '#F1C40F',
  Orange:    '#E67E22',
  Red:       '#E74C3C',
  Pink:      '#F75172',
  Brown:     '#795548',
  Gray:      '#95A5A6',
};
