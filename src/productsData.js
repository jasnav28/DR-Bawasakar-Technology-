export const GAZETTE = '';

export const PRODUCTS = [
  { 
    brand: 'GERMINATOR', 
    specification: 'Kappaphycus alvarezii 19.5% (liquid)', 
    category: 'Seaweed Extract',
    crops: ['Apple', 'Tomato', 'Cucumber', 'Chilli'], 
    dosage: [
      '(i) Apple: Two foliar applications at 750 ml/ha', 
      '(ii) Tomato: Three foliar applications at 500 ml/ha',
      '(iii) Cucumber: Three foliar applications at 500 ml/ha',
      '(iv) Chilli: Three foliar applications at 500 ml/ha'
    ], 
    gazette: '13th August, 2025 S.O. 3741(E).', 
    composition: [
      '(i) Seaweed (Kappaphycus alvarezii) extract) per cent. by volume, minimum 19.5', 
      '(ii) Organic acid (acetic acid, citric acid and lactic acid) per cent. by volume, minimum 1.5',
      '(iii) Water per cent. by volume, maximum 79',
      '(iv) Total (per cent.) 100'
    ] 
  },
  {
    brand: 'HARMONY',
    specification: 'Seaweed (Ascophyllum nodosum) extract 99.52 % (Liquid)',
    category: 'Seaweed Extract',
    crops: ['Grapes', 'Cotton'],
    dosage: [
      '1. Grapes: Three foliar applications at 300 ml/ha',
      '2. Cotton: Three foliar applications at 300 ml/ha'
    ],
    gazette: '13th August, 2025 S.O. 3743(E)',
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract per cent. by weight, minimum 99.52',
      '(ii) Sodium metabisulphite/ potassium sorbate per cent. by weight, minimum 0.48',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'SPLENDOUR',
    specification: 'Basil oil (Eugenol) 2% (Liquid)',
    category: 'Botanical Extract',
    crops: ['Tomato'],
    dosage: [
      'Three foliar applications at 1000 ml/ha'
    ],
    gazette: '13th August, 2025 S.O. 3741(E).',
    composition: [
      '(i) Basil oil (Eugenol) per cent. weight by volume, minimum 5',
      '(ii) Tween 80 per cent. weight by volume, minimum 6',
      '(iii) Cotton seed oil per cent. weight by volume, minimum 89',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'THRIVER',
    specification: 'Mixture of Botanical extract and Seaweed extract (Liquid)',
    category: 'Mixed Formulation',
    crops: ['Chilli'],
    dosage: [
      'Three foliar applications at 625 ml/ha'
    ],
    gazette: '16th February, 2026 S.O. 876(E)',
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract per cent. by weight, minimum 1.0',
      '(ii) Camellia seed extract per cent. by weight, minimum 20',
      '(iii) Dimethyl formamide per cent. by weight, maximum 49',
      '(iv) Emulsifier (AF- 711) per cent. by weight, maximum 20',
      '(v) Water per cent. by weight, maximum 10'
    ]
  },
  {
    brand: 'RIPENER',
    specification: 'Mixture of seaweed extract and vitamin (Liquid)',
    category: 'Mixed Formulation',
    crops: ['Soybean'],
    dosage: [
      'Three foliar applications at 325 ml/ha'
    ],
    gazette: '16th February, 2026 S.O. 876(E)',
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract per cent. by weight, minimum 35',
      '(ii) Folic acid per cent. by weight, minimum 2',
      '(iii) Alkaline reagents (anyone or combination of potassium hydroxide, sodium hydroxide, dipotassium hydrogen phosphate, potassium carbonate) per cent. by weight, maximum 3',
      '(iv) Water per cent. by weight QS',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'PROTECTANT',
    specification: 'Mixture of Antioxidant and Vitamins (Powder)',
    category: 'Mixed Formulation',
    crops: ['Cotton', 'Potato'],
    dosage: [
      'Two foliar applications at 1.25 kg/ha'
    ],
    gazette: '26th May, 2025 S.O. 2346E)',
    composition: [
      '(i) Citric Acid per cent. by weight, minimum 4.5',
      '(ii) Vitamin C per cent. by weight, minimum 1.0',
      '(iii) Vitamin B1 per cent. by weight, minimum 0.2',
      '(iv) Bentonite per cent by weight, maximum 94.3',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'PRISOM',
    specification: 'Mixture of Seaweed (Ascophyllum nodosum) extract, Protein hydrolysate and botanical extract (Liquid)',
    category: 'Mixed Formulation',
    crops: ['Chilli'],
    dosage: [
      'Four foliar applications at 2000 ml/ha'
    ],
    gazette: '13th August, 2025 S.O. 3742(E)',
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract per cent. by weight 24',
      '(ii) Protein hydrolysate derived from plant sources (sugar beet root : Soy seed flour : maize kernel in ratio of 4:3:3) through chemical (sulphuric acid and lime (Calcium hydroxide) hydrolysis per cent. by weight, minimum 16',
      '(iii) Botanical (Lemon grass; leaves) extract per cent. by weight, minimum 0.9',
      '(iv) Sugar syrup (Beet sugar) per cent. by weight, minimum 20',
      '(v) Benzyl alcohol (Preservative) per cent. by weight, minimum 0.2',
      '(vi) Water percent. by weight 38.9',
      '(vii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'NUTRATONE',
    specification: 'Protein hydrolysate 20% (Plant source) (liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    crops: ['Chickpea'],
    dosage: [
      'Two foliar applications at 1500 ml/ha'
    ],
    gazette: '13th August, 2025 S.O. 3742(E)',
    composition: [
      '(i) Protein hydrolysate derived from seeds of Zea mays through hydrolysis by using alkaline protease and hydrochloric acid per cent. by weight, minimum 20',
      '(ii) Water per cent. by weight QS',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'CROP SHINER',
    specification: 'L-Pyroglutamic acid (Pidolic acid) 10 % (Liquid)',
    category: 'Biochemicals',
    crops: ['Grape'],
    dosage: [
      'Four foliar applications at 1000ml/ha'
    ],
    gazette: '13th August, 2025 S.O. 3743(E).',
    composition: [
      '(i) L-Pyroglutamic acid (Pidolic acid) per cent. by weight, minimum 10.0',
      '(ii) Organosulfur compound per cent. by weight, minimum 8.8',
      '(iii) Carboxylic acid per cent. by weight, minimum 1.0',
      '(iv) Proline derivative per cent. by weight, minimum 9.0',
      '(v) Amino alcohol (stabilizer) per cent. by weight, minimum 0.20',
      '(vi) Polyglycolide (surfactant) per cent. by weight, minimum 0.01',
      '(vii) Glycerine per cent. by weight, minimum 0.43',
      '(viii) Water per cent. by weight QS',
      '(ix) Total (per cent.) 100'
    ]
  }
];

export const SLUG_TO_BRAND = {
  'GERMINATOR': 'GERMINATOR',
  'HARMONY': 'HARMONY',
  'SPLENDOUR': 'SPLENDOUR',
  'THRIVER': 'THRIVER',
  'RIPENER': 'RIPENER',
  'PROTECTANT': 'PROTECTANT',
  'PRISOM': 'PRISOM',
  'NUTRATONE': 'NUTRATONE',
  'CROP SHINER': 'CROP SHINER'
};

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  
  const decoded = decodeURIComponent(slug).toUpperCase();
  const normalized = decoded.replace(/-/g, ' ').replace(/\+/g, ' ').trim();
  
  // Try direct match in SLUG_TO_BRAND
  if (SLUG_TO_BRAND[normalized]) return findProductByBrand(SLUG_TO_BRAND[normalized]);
  if (SLUG_TO_BRAND[decoded]) return findProductByBrand(SLUG_TO_BRAND[decoded]);

  // Try matching against brand names directly
  const found = PRODUCTS.find(p => 
    p.brand.toUpperCase() === normalized || 
    p.brand.toUpperCase().replace(/\s+/g, '') === normalized.replace(/\s+/g, '')
  );
  
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase()) || PRODUCTS[0];
}
