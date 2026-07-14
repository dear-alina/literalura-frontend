<!DOCTYPE html>

<html lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Literalura - Búsqueda Global</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&amp;family=Vollkorn:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#B5493C",
              "background": "#F7F1E8",
              "secondary": "#2B2320",
              "accent": "#7A8B6F"
            },
            fontFamily: {
              "display": ["Vollkorn", "serif"],
              "heading": ["Quicksand", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            boxShadow: {
              'paper': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
              'paper-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: theme('colors.background');
        }
        .organic-border {
            border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        }
    </style>
</head>
<body class="font-display text-secondary antialiased bg-background">
<!-- Shared TopNavBar Component -->
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-accent/20 px-10 py-3">
<div class="flex items-center gap-4 text-secondary">
<div class="size-8 text-primary flex items-center justify-center">
<img alt="Academic Cat Logo" class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLvFRxH3ZKBKkWqFGNr7xIOb3usiLmn2L0vWCFJSiZGZB_0ljR3i9zoM5ZgYqoPMk4UKMEyBFvXfy7G1bbwUTEogs3HPQ7U_by8KfgyuuZ8nypAMdBGOW9hffdV9IpSItJcRmSzS0UlCUBrnXrUk9ux7sBVBh6BUCgObozzkT27llyJ1GjvhPFHESyGjVMzpwp4Je_wwGkQwe88kgC-CbK53APdzpCw-S9XuyvbFz_c1sN307_-kNRxe3uA"/>
</div>
<h2 class="text-secondary text-xl font-bold leading-tight tracking-[-0.015em] font-heading">Literalura</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-secondary text-base font-medium leading-normal hover:text-primary transition-colors" href="#">Catálogo</a>
<a class="text-secondary text-base font-medium leading-normal hover:text-primary transition-colors" href="#">Autores</a>
</div>
</div>
</header>
<div class="@container flex-1 flex items-center justify-center">
<div class="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-col w-full items-center justify-center">
<!-- Mascot Image -->
<div class="w-full max-w-[400px] bg-center bg-no-repeat aspect-square bg-contain @[480px]:h-[300px] @[480px]:min-w-[300px] mb-8" data-alt="Academic reader cat wearing glasses" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr354K6psw5wYJy4j7ZIKilJc_potxCFrk1kT2BIp5KjQ5zqMGaLF_G70tyYFvLHxloOAN6QsjEsj1T2SGhCq73bwrkBvBlx01PoaT5Dc8DSzz8lSogmzA7hu3PUGnkOWgNK3In2snHfajRqiYpXOejzSngQs_WGlMMLflN88-ykkeHXTwIo9YljGB2lkaaPWr0A_p4410UQ88FAudGlaBPE5lSTTOVEU1tjtKrKCyDj22obV_vhmJ");'>
</div>
<div class="flex flex-col gap-6 @[480px]:min-w-[600px] w-full @[480px]:gap-8 items-center">
<h1 class="text-secondary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center font-heading">
                                    Literalura
                                </h1>
<label class="flex flex-col min-w-40 h-16 w-full max-w-[600px] shadow-paper hover:shadow-paper-hover transition-shadow duration-300 rounded-xl organic-border">
<div class="flex w-full flex-1 items-stretch h-full border-2 border-accent bg-white overflow-hidden organic-border">
<div class="text-accent flex border-none bg-white items-center justify-center pl-6 border-r-0" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
<img class="size-6 opacity-60" src="https://lh3.googleusercontent.com/aida/AP1WRLtqZLRqKGAUP9vYNH-aZ7DU-2ncojn7nxNp5Q95S8ZCQwJiK-4lypMCyffI1R6EiQ18ZNsD3CdMYyEn-wAkNxxrjOXlasG1cWRboM3cSBAZmDsjR5Uqu-gXo028hxU21MA5WrAFsMYJu-Nn0VmI6Mq-e9HFSQfrOYA4TY3WlLU_KF608xdHb-GKLpOJNNOEGztzwg2swLQPNtPpr5dFnU9nkoMK5hEzCWXLwDRFASX840jcS7wb2GAAXg"/>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-secondary focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-accent/70 px-4 border-r-0 pr-2 border-l-0 pl-4 text-base font-medium leading-normal" placeholder="¿Qué historia buscas hoy?" value=""/>
<div class="flex items-center justify-center border-l-0 border-none bg-white pr-2">
<button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden h-10 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] font-heading hover:-translate-y-0.5 transition-transform duration-200 active:translate-y-0 organic-border">
<span class="truncate">¡Buscar!</span>
</button>
</div>
</div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body></html>