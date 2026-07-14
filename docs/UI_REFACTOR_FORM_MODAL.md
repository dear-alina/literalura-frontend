<!DOCTYPE html>

<html lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Literalura - Modal de Hechizo</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;600&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "tertiary": "#49583f",
                "surface": "#fff9ef",
                "on-secondary-fixed": "#081c33",
                "background": "#fff9ef",
                "secondary": "#4e5f79",
                "primary-fixed-dim": "#ffb4a9",
                "tertiary-container": "#607156",
                "surface-container-lowest": "#ffffff",
                "on-secondary": "#ffffff",
                "error": "#ba1a1a",
                "on-primary-fixed-variant": "#83251b",
                "tertiary-fixed": "#d6e8c8",
                "secondary-container": "#cee1ff",
                "primary-fixed": "#ffdad5",
                "surface-bright": "#fff9ef",
                "surface-container": "#f3ede4",
                "on-secondary-container": "#52647d",
                "on-tertiary-container": "#e2f4d3",
                "on-tertiary": "#ffffff",
                "on-secondary-fixed-variant": "#364860",
                "on-primary-container": "#ffe9e6",
                "inverse-primary": "#ffb4a9",
                "on-tertiary-fixed": "#111f0b",
                "on-surface-variant": "#57423f",
                "primary-container": "#b5493c",
                "outline": "#8a716e",
                "on-background": "#1d1b16",
                "on-error-container": "#93000a",
                "surface-dim": "#dfd9d1",
                "charcoal-text": "#2B2320",
                "on-tertiary-fixed-variant": "#3c4b33",
                "surface-container-high": "#ede7df",
                "inverse-surface": "#32302a",
                "on-primary-fixed": "#410000",
                "tertiary-fixed-dim": "#baccad",
                "primary": "#953227",
                "error-container": "#ffdad6",
                "surface-container-highest": "#e7e2d9",
                "secondary-fixed": "#d3e4ff",
                "tan-neutral": "#C9A876",
                "secondary-fixed-dim": "#b5c8e5",
                "surface-container-low": "#f9f3ea",
                "surface-variant": "#e7e2d9",
                "surface-tint": "#a33c30",
                "on-error": "#ffffff",
                "on-primary": "#ffffff",
                "outline-variant": "#ddc0bb",
                "on-surface": "#1d1b16",
                "inverse-on-surface": "#f6f0e7"
        },
        "borderRadius": {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
        },
        "spacing": {
                "gutter": "24px",
                "unit": "8px",
                "margin-mobile": "16px",
                "margin-desktop": "48px",
                "container-max": "1120px"
        },
        "fontFamily": {
                "headline-md": [
                        "quicksand"
                ],
                "display-lg": [
                        "quicksand"
                ],
                "body-md": [
                        "vollkorn"
                ],
                "headline-lg-mobile": [
                        "quicksand"
                ],
                "label-sm": [
                        "quicksand"
                ],
                "body-lg": [
                        "vollkorn"
                ],
                "headline-lg": [
                        "quicksand"
                ],
                "label-lg": [
                        "quicksand"
                ]
        },
        "fontSize": {
                "headline-md": [
                        "24px",
                        {
                                "lineHeight": "32px",
                                "fontWeight": "600"
                        }
                ],
                "display-lg": [
                        "48px",
                        {
                                "lineHeight": "56px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ],
                "headline-lg-mobile": [
                        "28px",
                        {
                                "lineHeight": "36px",
                                "fontWeight": "700"
                        }
                ],
                "label-sm": [
                        "12px",
                        {
                                "lineHeight": "16px",
                                "fontWeight": "500"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "400"
                        }
                ],
                "headline-lg": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "fontWeight": "700"
                        }
                ],
                "label-lg": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "letterSpacing": "0.05em",
                                "fontWeight": "600"
                        }
                ]
        }
},
    },
  }
</script>
<style>
        @keyframes elastic-spring {
            0% { transform: scale(0.8); opacity: 0; }
            40% { transform: scale(1.05); opacity: 1; }
            70% { transform: scale(0.98); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-spring {
            animation: elastic-spring 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .organic-border {
            border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
        }
    </style>
</head>
<body class="bg-background font-headline-md min-h-screen text-charcoal-text antialiased relative">
<!-- Mock Content to show background blur -->
<div class="p-8 max-w-5xl mx-auto space-y-6 opacity-40 pointer-events-none">
<div class="h-12 bg-white rounded-lg shadow-sm w-1/3"></div>
<div class="grid grid-cols-3 gap-6">
<div class="h-64 bg-white rounded-lg shadow-sm"></div>
<div class="h-64 bg-white rounded-lg shadow-sm"></div>
<div class="h-64 bg-white rounded-lg shadow-sm"></div>
</div>
</div>
<!-- Modal Backdrop -->
<div class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 bg-charcoal-text/40">
<!-- Modal Container -->
<div class="w-full max-w-[500px] bg-[#FDFBF7] shadow-2xl p-8 relative animate-spring border-4 border-tan-neutral organic-border">
<!-- Close Button -->
<button aria-label="Cerrar modal" class="absolute top-4 right-4 text-outline hover:text-charcoal-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded-full p-1" id="close-modal-btn">
<span class="material-symbols-outlined text-2xl">close</span>
</button>
<!-- Header -->
<div class="text-center mb-8">
<img alt="Gato escribiendo" class="w-24 h-24 mx-auto mb-4" src="https://lh3.googleusercontent.com/aida/AP1WRLsfc1YxT6mFVUsmCfPryNmGLcr7rMg1VVjn_04uwIlromHpraHdgqm8dZvuOw06TBpXyylRS2kqQxpaIfmkACNe2i4rIRpH-eeZy2KTUn8LUIwInSGrh8yypMj2yKxUwO2f5Eeg8kVQfJ5pJJLT5DnqCxEkbEzpf7dB3JHwccBjB-3vT_19QK9LMVJmsEXXRFCshiQ7JJLSxUAc7-vfDV5To4wg8dxILQc2MPze1hf8_bgkcmYo4oSymdM"/><div class="w-32 h-44 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border-2 border-[#C9A876] transition-transform duration-300 hover:scale-105"><img alt="Portada del libro" class="w-full h-full object-cover" id="cover-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmGCV2EfQ3IwxIDiyzZwfidH6cz-iKMVG7m7A63wiLMFK7kyFkIoLfx0ZeHfxdEpLKR1GwWXb5A4nnNbZXL7sucJPgDe8lFdDzeMNcJZwSfAlailA-roX62i7LjmCGoe5bcxTbwaEs5MAUvvrlIVCfaBXPplV0O4cRuuYfrMstEfAxsippq9CVb6SSR9dza4PrR1zrh8z3rcWLEhNGGMGAAOy9x4AFPdeCKoWq5H0if6TAP6S46xXC"/></div>
<h2 class="text-2xl font-bold text-charcoal-text">Detalles del Hechizo</h2>
<p class="text-outline mt-1 text-sm font-medium">Prepara los detalles de tu nueva historia.</p>
</div>
<!-- Form -->
<form class="space-y-6"><!-- Informative Presentation Block -->
<div class="text-center space-y-2 mb-6">
<h1 class="text-2xl font-bold font-headline-md text-charcoal-text" id="title-input">Título del Libro</h1>
<div class="flex items-center justify-center gap-4 text-sm text-outline font-medium">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg">person</span>
<span id="author-input">Nombre del Autor</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg">language</span>
<span id="language-select">Idioma</span>
</div>
</div>
</div>
<!-- Note Input (Kept) -->
<div>
<label class="block text-sm font-bold text-charcoal-text mb-2">Nota Personal / Reseña del Hechizo</label>
<textarea class="w-full organic-border p-3 focus:ring-2 focus:ring-primary-container outline-none border-2 border-tan-neutral bg-surface-container-lowest shadow-sm" id="note-input" placeholder="Escribe aquí tus impresiones sobre este libro..." rows="4"></textarea>
</div>
<!-- Submit Button (Kept with ID) -->
<div class="pt-4">
<button class="w-full bg-primary-container text-white font-bold text-lg py-4 hover:bg-primary focus:ring-4 focus:ring-primary-fixed transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group organic-border border-2 border-primary-container" id="save-btn" type="button">
<span class="material-symbols-outlined">edit_note</span>
    Guardar Nota
  </button>
</div></form>
</div>
</div>
</body></html>