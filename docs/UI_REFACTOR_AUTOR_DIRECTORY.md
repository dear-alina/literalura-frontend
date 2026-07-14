<!DOCTYPE html>

<html lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Literalura - Directorio de Autores</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&amp;family=Vollkorn:wght@400&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
                "inverse-on-surface": "#f6f0e7",
                "terracotta": "#b5493c",
                "cream": "#f7f1e8",
                "navy": "#2c3e56",
                "sage": "#7a8b6f"
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
  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
  .card-scalloped {
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    position: relative;
    overflow: hidden;
  }
  .card-scalloped::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 20px;
    background-size: 20px 20px;
    background-image: radial-gradient(circle at 10px 0, transparent 10px, var(--tw-colors-cream) 11px);
    z-index: 10;
  }
</style>
</head>
<body>
<div class="relative flex h-auto min-h-screen w-full flex-col bg-cream group/design-root overflow-x-hidden" style="font-family: vollkorn, serif;">
<div class="layout-container flex h-full grow flex-col">
<div class="px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-surface-variant px-10 py-3">
<div class="flex items-center gap-4 text-on-surface">
<img alt="Literalura Cat Mascot" class="size-10" src="https://lh3.googleusercontent.com/aida/AP1WRLvFRxH3ZKBKkWqFGNr7xIOb3usiLmn2L0vWCFJSiZGZB_0ljR3i9zoM5ZgYqoPMk4UKMEyBFvXfy7G1bbwUTEogs3HPQ7U_by8KfgyuuZ8nypAMdBGOW9hffdV9IpSItJcRmSzS0UlCUBrnXrUk9ux7sBVBh6BUCgObozzkT27llyJ1GjvhPFHESyGjVMzpwp4Je_wwGkQwe88kgC-CbK53APdzpCw-S9XuyvbFz_c1sN307_-kNRxe3uA"/>
<h2 class="text-on-surface text-headline-md font-headline-md">Literalura</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-on-surface text-label-lg font-label-lg" href="#">Catálogo</a>
<a class="text-on-surface text-label-lg font-label-lg" href="#">Autores</a>
</div>
</div>
</header>
<div class="flex flex-wrap justify-between gap-3 p-4">
<div class="flex min-w-72 flex-col gap-3">
<div class="flex items-center gap-4">
<img alt="Author Quill Icon" class="size-12" src="https://lh3.googleusercontent.com/aida/AP1WRLswA1dimWI4PCyv_KucfMRXUTm-zCDukJn5ZllEcIfRVpmkxM5Z3C9cjn568J6YdRFcwFTpkoctHNqefNxl9llJN3XZaLnSNDiXawhgXDk1xQfguKN48B-qZCdMVTJSn7IGtR8kn6I4zkv83qoTrNNaFsGx5t5E4zlYxUUjQIZt0grPZyQWEDtLcpv-xz74OYAlP3wCZGkU1RuZRig-pa4S2ro0DuqXUPVNNBfSd0TdBdcgqyl4ij33u8Q"/>
<p class="text-charcoal-text text-display-lg font-display-lg">Directorio de Autores</p>
</div>
<p class="text-terracotta text-body-lg font-body-lg">Explora los magos detrás de las palabras.</p>
</div>
</div>
<div class="@container">
<div class="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
<p class="text-charcoal-text text-body-md font-body-md w-full shrink-[3]">Año de vida</p>
<div class="flex h-[38px] w-full pt-1.5">
<div class="flex h-1 w-full rounded-sm pl-[60%] pr-[15%] bg-navy">
<div class="relative">
<div class="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
<div class="size-4 rounded-full border-2 border-tan-neutral bg-terracotta"></div>
<p class="text-charcoal-text text-label-sm font-label-sm">1800</p>
</div>
</div>
<div class="h-1 flex-1 rounded-sm bg-terracotta"></div>
<div class="relative">
<div class="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
<div class="size-4 rounded-full border-2 border-tan-neutral bg-terracotta"></div>
<p class="text-charcoal-text text-label-sm font-label-sm">2024</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-6 p-4" id="authors-grid">
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLu8By57P_HkYEcBvCn3ZdjI9UjRXm_GmIWB12EMVXi2ad3veCWSHW6LfFpwT1d_kjOxpzNxfN5aON682GjATEbyMxjoF-Ekhtrev3h7_KvWYinUsOpNvB0MbVsDYhffqht1ppX3lj2orVXiA_3kjIvByywYmWzQboTpS8u0DVFIpBF1zZP2LKi9Xrk375tboX9zpQpgalfVTXfhaJ2Rb3eYEp4SIbBuOYoXWYF1ph3HkU3JEhH7e_CYNJE");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Gabriel García Márquez</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1927 - 2014</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">10 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLvvNXdeOr2R_iENxD4ZTHt1hK9Q9Ccb2C4PMv5BG5IkzNgmCWr3UMUeuwLACurP2M8Ph82xN5WcJHrM8Upd0ZLudNvQG6Y0QWUce8ik-FQHJasAo3yqs-PHzGqQKSgqna11BoGEShIpJccZijeyBDQEwsiB3ofEfbpaBGnRa5fGsmSvq-wV_FDMpZWDGnxMWIPwxG3YjCXIAe2nMC5c0kOQ5F1P3vRvDDjff3RQD2BkJQmhOe09FdITvvQ");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">J.K. Rowling</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1965 - Presente</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">7 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLtuBf7WvhKquxcH9YWv3NLx60zI1B4os8T73wTE0ljwsPoi0bgENwrLuWPyN9WfIKX73_uRI1ifVnJO17aPDjgFFq51I9zlsSXE7-XVTZGlX-UZIDuJj-ZFnCKCPWdn1z_imWj7mEHgnr0fkRfkVW0F5FgO-u9MdrUGEWw47VsW9lZwzVCW0AUwUKMZyDSv30lJo1Qxb8MM3xGme7S0F5DzP7-4jowM8I5d2S0bzWfklmD7QlIbkrefLjQ");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Jane Austen</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1775 - 1817</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">5 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLteIjPfmScRiFqIDKj2QfurrqCQ0QqlYSW1fz9ZY9wVLyT-f_UVy6fQOn9GDFmWu2EHut_itzFiCj1_wr3ZT7W7jhnrlS_2aVunXp5RQeBNQYXipN28URBEJo9RrTldn9Nh9sQ60nuO1FCcLvMtiAuTG-7WcPboAkeI1MhCJCySEYqHIzikR3ae-OmO2nxoYTfF9lhpRR_ZbwjM2G9e1HANxIlFjeIdlbCcTFp_Mhjl3abgJvPSxxYq0cI");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Edgar Allan Poe</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1809 - 1849</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">8 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLvjQ_ETJpZTWhczTs1uJrqHNuWqe_C-s-dPsXhEQpFEQfvFjpH1J6BwqKDGdzacvzige3zeG1R0acy6jPFcoD1X3pnCAyYkl7X0UqmnRgC24EEeOYIzaQo-QmIm8r7rl7m1Zx3-R4PHhbkGButAnd5l3xYhIHzPQq7KgRNefAhHeV3YYFmAad25QyXcJnFAfubOY-I5cNXoJzGxCZo4S-9MHoT60MkoJWVg5J8Ov0w6k3CmO6Ak1UQmlq0");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Isabel Allende</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1942 - Presente</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">4 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLtNozDbaNmAros8cjQ0pn5Wd8ivbTKij5qK5IUGt5X6IKONFtfw0Ftj_n-_39_1UdwyZ_TwQRpAq4A1ZNcyAEYEG-2NCCoDr0EWB3H3OoSGmu5YYKgxGHsqSRQE5ibIB7ETy2Q-s8kl6Q9PzdxK4m5JKtpN_mX3JxT-YIGrmI-26rVT2hev6VwUiK5fhY7_pQ8Ij5GPQcJS9tjZxGzBljwybxSRCu5GYjLt7Mbupl00y_YxMm_2sSkzGlc");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Jorge Luis Borges</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1899 - 1986</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">6 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLumezsAqse8G7fOnP-HSSTvWk2szw4THtQi4s9TXdS2BmQy77LysBb500clJbUwoeDT-dqosybWxSsgpnM5XGMYW4W-5wD6t7oIyoT3d5LG7Bv17zHxVsgDr8gwsEoLPLp5ZgxlgsAZ2cTbiJBBlZkSfxmlEQWyUpQn3GtW5i26j0eRopMgsljHYMYZ2F73ffLC3DZvmNIB2qBVAvE3l1zyH9PZif7osuicz37nVMSJq27MJAvcf7nXqIM");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">Agatha Christie</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1890 - 1976</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">12 libros</span>
</div>
</div>
<div class="flex flex-col gap-3 pb-3 card-scalloped bg-white p-3 rounded-xl shadow-md border border-tan-neutral/30">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" data-alt="A beautifully painted portrait of a classical author, rendered in a whimsical, pastel-infused storybook illustration style. The author is depicted in a cozy, magical library setting with soft, glowing light. The color palette features delicate pinks, lavenders, and off-whites, creating a soothing, enchanting mood. The overall aesthetic is highly detailed, playful, and reminiscent of modern fairy tales." style='background-image: url("https://lh3.googleusercontent.com/aida/AP1WRLvOhtmEEn458UQ3kK9pSaNYCpuz2RhVk5Bs8meT1GfMoui6RBIn4hrUA6vn-QOcNxFPJaj4jyDlvQB1M5nQRKERBEZtBU-Qz5CZZ_Q9PtswNu_Pr36kP9h8pNSHe2hPUF_Tn72edxj3WQLXeMsiqvaKgcUnUOwawGc2qTO30iqD68nkQapct0JEdDClnalomIXlpWuxac-Q8Ws3jW7Bv0STBpAk8stE0Z4pOvdgUAn7yjt46Jb_qkq3GQ");'></div>
<div>
<p class="text-charcoal-text text-body-md font-headline-md font-bold">J.R.R. Tolkien</p>
<p class="text-terracotta text-label-sm font-label-sm mt-1">1892 - 1973</p>
<span class="inline-block mt-2 bg-sage text-white text-xs px-2 py-1 rounded-full font-label-sm">4 libros</span>
</div>
</div>
</div>
<footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
<p class="text-terracotta text-body-md font-body-md">© 2024 Literalura. Un cuento de hadas moderno.</p>
</footer>
</div>
</div>
</div>
</div>
</body></html>