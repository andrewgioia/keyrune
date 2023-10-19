---
title: Set Icons
description: "Complete Magic: the Gathering set symbol icon font"
modal: true
---

<aside>
    <form id="search" action="/sets" method="get" class="mt-8 flex flex-col flex-align-center">
        <div class="input-wrapper w-full relative flex flex-row">
            <input id="icon-filter" name="q" type="text" value="" placeholder="Search for a set symbol...">
            <button class="button hidden md:block" type="submit">
                Search
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clear hidden search-link" data-q="">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>
        <span class="flex flex-row flex-align-center flex-justify-between w-full mt-4">
            <span class="search-left">Version {{% data/version %}} contains {{% data/count %}} <span class="hidden sm:inline">unique</span> icons.</span>
            <span class="search-right hidden md:inline pr-8">Try <a href="?q=leg" class="search-link" data-q="leg">LEG</a> or <a href="?q=dragon" class="search-link" data-q="dragon">Dragon</a> or <a href="?q=is:old" class="search-link" data-q="is:old">is:old</a>!</span>
        </span>
    </form>
</aside>

<section id="icon-menu" class="mt-6 pt-6 pb-8 flex flex-justify-center">
    <div class="w-wide flex flex-row flex-justify-between">
        <h2 class="hidden">Set symbol preview controls</h2>
        <div class="flex flex-row flex-justify-start w-full">
            <menu id="icon-rarity" class="flex flex-row group">
                <li>
                    <input type="radio" name="rarity" value="common" id="rarity_common" data-class="ss-rarity-common" checked>
                    <label for="rarity_common" class="left">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" fill="#000">
                            <path d="M0 16.33a8.86 8.86 0 0 1 4.3-.02c.78.81 1.3 1.85 2.16 2.6.84.84 1.98 1.22 3.05 1.66-2.55.1-5.26-.31-7.37-1.86A8.2 8.2 0 0 1 0 16.33Zm24-.08c-.65 1.48-2.02 2.52-3.42 3.25a13.64 13.64 0 0 1-6.14 1.12c1.27-.58 2.64-1.08 3.56-2.19.66-.67 1.03-1.63 1.83-2.16 1.36-.35 2.8-.2 4.17-.02ZM3.8 11.68c1.64.03 3.3.49 4.55 1.6 1.95 1.64 2.85 4.24 2.97 6.73A6.4 6.4 0 0 1 6 17.37a12.17 12.17 0 0 1-2.2-5.7Zm5.98-6.76c.37 3.82.5 4.3.6 4.76.03.2.08.39.15.58l.63-.05a6 6 0 0 0 .3-1.25c.47-3.85.55-5.68.56-5.59.46 5.66.7 6.4.87 6.84l.62.05c.1-.27.08-.3.2-.83.28-1.15.52-4.3.56-4.5.2 1.53.3 2.5.44 3.45.06.44.13.88.23 1.32.06.28.13.57.24.84.2.05.39.1.57.18.06-.12.1-.24.15-.37.1-.32.17-.64.24-.97.36-2.3.36-2.47.42-2.63.38 3.21.46 4.06.53 4.91a6.9 6.9 0 0 0-3.17 2.2 7.31 7.31 0 0 0-1.12 1.9c-.33.86-.52 1.75-.63 2.65l-.08.83c-.01.07-.02.15-.06.22h-.02a.33.33 0 0 1-.04-.17c-.03-.18-.04-.37-.06-.55-.05-.5-.12-.99-.22-1.48a8.43 8.43 0 0 0-.84-2.31 7.17 7.17 0 0 0-3.9-3.29c.11-1.18.54-4.9.54-4.9.18 1 .24 1.54.33 2.09.07.44.15.88.27 1.31.05.2.12.38.2.56l.57-.18c.07-.02.08 0 .17-.52.25-1.32.73-5.04.75-5.1Zm5.96 8.26a6.78 6.78 0 0 1 4.44-1.47c-.37 2.76-1.54 5.6-3.87 7.27A5.64 5.64 0 0 1 12.67 20c.1-2.54 1.01-5.2 3.07-6.82Z"/>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="rarity" value="uncommon" id="rarity_uncommon" data-class="ss-rarity-uncommon">
                    <label for="rarity_uncommon" class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" fill="#707883">
                            <path d="M0 16.33a8.86 8.86 0 0 1 4.3-.02c.78.81 1.3 1.85 2.16 2.6.84.84 1.98 1.22 3.05 1.66-2.55.1-5.26-.31-7.37-1.86A8.2 8.2 0 0 1 0 16.33Zm24-.08c-.65 1.48-2.02 2.52-3.42 3.25a13.64 13.64 0 0 1-6.14 1.12c1.27-.58 2.64-1.08 3.56-2.19.66-.67 1.03-1.63 1.83-2.16 1.36-.35 2.8-.2 4.17-.02ZM3.8 11.68c1.64.03 3.3.49 4.55 1.6 1.95 1.64 2.85 4.24 2.97 6.73A6.4 6.4 0 0 1 6 17.37a12.17 12.17 0 0 1-2.2-5.7Zm5.98-6.76c.37 3.82.5 4.3.6 4.76.03.2.08.39.15.58l.63-.05a6 6 0 0 0 .3-1.25c.47-3.85.55-5.68.56-5.59.46 5.66.7 6.4.87 6.84l.62.05c.1-.27.08-.3.2-.83.28-1.15.52-4.3.56-4.5.2 1.53.3 2.5.44 3.45.06.44.13.88.23 1.32.06.28.13.57.24.84.2.05.39.1.57.18.06-.12.1-.24.15-.37.1-.32.17-.64.24-.97.36-2.3.36-2.47.42-2.63.38 3.21.46 4.06.53 4.91a6.9 6.9 0 0 0-3.17 2.2 7.31 7.31 0 0 0-1.12 1.9c-.33.86-.52 1.75-.63 2.65l-.08.83c-.01.07-.02.15-.06.22h-.02a.33.33 0 0 1-.04-.17c-.03-.18-.04-.37-.06-.55-.05-.5-.12-.99-.22-1.48a8.43 8.43 0 0 0-.84-2.31 7.17 7.17 0 0 0-3.9-3.29c.11-1.18.54-4.9.54-4.9.18 1 .24 1.54.33 2.09.07.44.15.88.27 1.31.05.2.12.38.2.56l.57-.18c.07-.02.08 0 .17-.52.25-1.32.73-5.04.75-5.1Zm5.96 8.26a6.78 6.78 0 0 1 4.44-1.47c-.37 2.76-1.54 5.6-3.87 7.27A5.64 5.64 0 0 1 12.67 20c.1-2.54 1.01-5.2 3.07-6.82Z"/>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="rarity" value="rare" id="rarity_rare" data-class="ss-rarity-rare">
                    <label for="rarity_rare" class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" fill="#b7a066">
                            <path d="M0 16.33a8.86 8.86 0 0 1 4.3-.02c.78.81 1.3 1.85 2.16 2.6.84.84 1.98 1.22 3.05 1.66-2.55.1-5.26-.31-7.37-1.86A8.2 8.2 0 0 1 0 16.33Zm24-.08c-.65 1.48-2.02 2.52-3.42 3.25a13.64 13.64 0 0 1-6.14 1.12c1.27-.58 2.64-1.08 3.56-2.19.66-.67 1.03-1.63 1.83-2.16 1.36-.35 2.8-.2 4.17-.02ZM3.8 11.68c1.64.03 3.3.49 4.55 1.6 1.95 1.64 2.85 4.24 2.97 6.73A6.4 6.4 0 0 1 6 17.37a12.17 12.17 0 0 1-2.2-5.7Zm5.98-6.76c.37 3.82.5 4.3.6 4.76.03.2.08.39.15.58l.63-.05a6 6 0 0 0 .3-1.25c.47-3.85.55-5.68.56-5.59.46 5.66.7 6.4.87 6.84l.62.05c.1-.27.08-.3.2-.83.28-1.15.52-4.3.56-4.5.2 1.53.3 2.5.44 3.45.06.44.13.88.23 1.32.06.28.13.57.24.84.2.05.39.1.57.18.06-.12.1-.24.15-.37.1-.32.17-.64.24-.97.36-2.3.36-2.47.42-2.63.38 3.21.46 4.06.53 4.91a6.9 6.9 0 0 0-3.17 2.2 7.31 7.31 0 0 0-1.12 1.9c-.33.86-.52 1.75-.63 2.65l-.08.83c-.01.07-.02.15-.06.22h-.02a.33.33 0 0 1-.04-.17c-.03-.18-.04-.37-.06-.55-.05-.5-.12-.99-.22-1.48a8.43 8.43 0 0 0-.84-2.31 7.17 7.17 0 0 0-3.9-3.29c.11-1.18.54-4.9.54-4.9.18 1 .24 1.54.33 2.09.07.44.15.88.27 1.31.05.2.12.38.2.56l.57-.18c.07-.02.08 0 .17-.52.25-1.32.73-5.04.75-5.1Zm5.96 8.26a6.78 6.78 0 0 1 4.44-1.47c-.37 2.76-1.54 5.6-3.87 7.27A5.64 5.64 0 0 1 12.67 20c.1-2.54 1.01-5.2 3.07-6.82Z"/>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="rarity" value="mythic" id="rarity_mythic" data-class="ss-rarity-mythic">
                    <label for="rarity_mythic" class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" fill="#bf4427">
                            <path d="M0 16.33a8.86 8.86 0 0 1 4.3-.02c.78.81 1.3 1.85 2.16 2.6.84.84 1.98 1.22 3.05 1.66-2.55.1-5.26-.31-7.37-1.86A8.2 8.2 0 0 1 0 16.33Zm24-.08c-.65 1.48-2.02 2.52-3.42 3.25a13.64 13.64 0 0 1-6.14 1.12c1.27-.58 2.64-1.08 3.56-2.19.66-.67 1.03-1.63 1.83-2.16 1.36-.35 2.8-.2 4.17-.02ZM3.8 11.68c1.64.03 3.3.49 4.55 1.6 1.95 1.64 2.85 4.24 2.97 6.73A6.4 6.4 0 0 1 6 17.37a12.17 12.17 0 0 1-2.2-5.7Zm5.98-6.76c.37 3.82.5 4.3.6 4.76.03.2.08.39.15.58l.63-.05a6 6 0 0 0 .3-1.25c.47-3.85.55-5.68.56-5.59.46 5.66.7 6.4.87 6.84l.62.05c.1-.27.08-.3.2-.83.28-1.15.52-4.3.56-4.5.2 1.53.3 2.5.44 3.45.06.44.13.88.23 1.32.06.28.13.57.24.84.2.05.39.1.57.18.06-.12.1-.24.15-.37.1-.32.17-.64.24-.97.36-2.3.36-2.47.42-2.63.38 3.21.46 4.06.53 4.91a6.9 6.9 0 0 0-3.17 2.2 7.31 7.31 0 0 0-1.12 1.9c-.33.86-.52 1.75-.63 2.65l-.08.83c-.01.07-.02.15-.06.22h-.02a.33.33 0 0 1-.04-.17c-.03-.18-.04-.37-.06-.55-.05-.5-.12-.99-.22-1.48a8.43 8.43 0 0 0-.84-2.31 7.17 7.17 0 0 0-3.9-3.29c.11-1.18.54-4.9.54-4.9.18 1 .24 1.54.33 2.09.07.44.15.88.27 1.31.05.2.12.38.2.56l.57-.18c.07-.02.08 0 .17-.52.25-1.32.73-5.04.75-5.1Zm5.96 8.26a6.78 6.78 0 0 1 4.44-1.47c-.37 2.76-1.54 5.6-3.87 7.27A5.64 5.64 0 0 1 12.67 20c.1-2.54 1.01-5.2 3.07-6.82Z"/>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="rarity" value="foil" id="rarity_foil" data-class="ss-rarity-foil">
                    <label for="rarity_foil" class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" fill="#00afc9">
                            <path d="M0 16.33a8.86 8.86 0 0 1 4.3-.02c.78.81 1.3 1.85 2.16 2.6.84.84 1.98 1.22 3.05 1.66-2.55.1-5.26-.31-7.37-1.86A8.2 8.2 0 0 1 0 16.33Zm24-.08c-.65 1.48-2.02 2.52-3.42 3.25a13.64 13.64 0 0 1-6.14 1.12c1.27-.58 2.64-1.08 3.56-2.19.66-.67 1.03-1.63 1.83-2.16 1.36-.35 2.8-.2 4.17-.02ZM3.8 11.68c1.64.03 3.3.49 4.55 1.6 1.95 1.64 2.85 4.24 2.97 6.73A6.4 6.4 0 0 1 6 17.37a12.17 12.17 0 0 1-2.2-5.7Zm5.98-6.76c.37 3.82.5 4.3.6 4.76.03.2.08.39.15.58l.63-.05a6 6 0 0 0 .3-1.25c.47-3.85.55-5.68.56-5.59.46 5.66.7 6.4.87 6.84l.62.05c.1-.27.08-.3.2-.83.28-1.15.52-4.3.56-4.5.2 1.53.3 2.5.44 3.45.06.44.13.88.23 1.32.06.28.13.57.24.84.2.05.39.1.57.18.06-.12.1-.24.15-.37.1-.32.17-.64.24-.97.36-2.3.36-2.47.42-2.63.38 3.21.46 4.06.53 4.91a6.9 6.9 0 0 0-3.17 2.2 7.31 7.31 0 0 0-1.12 1.9c-.33.86-.52 1.75-.63 2.65l-.08.83c-.01.07-.02.15-.06.22h-.02a.33.33 0 0 1-.04-.17c-.03-.18-.04-.37-.06-.55-.05-.5-.12-.99-.22-1.48a8.43 8.43 0 0 0-.84-2.31 7.17 7.17 0 0 0-3.9-3.29c.11-1.18.54-4.9.54-4.9.18 1 .24 1.54.33 2.09.07.44.15.88.27 1.31.05.2.12.38.2.56l.57-.18c.07-.02.08 0 .17-.52.25-1.32.73-5.04.75-5.1Zm5.96 8.26a6.78 6.78 0 0 1 4.44-1.47c-.37 2.76-1.54 5.6-3.87 7.27A5.64 5.64 0 0 1 12.67 20c.1-2.54 1.01-5.2 3.07-6.82Z"/>
                        </svg>
                    </label>
                </li>
            </menu>
            <menu id="icon-extras" class="hidden md:flex flex-row">
                <li>
                    <input type="checkbox" name="border" value="border" id="extras_border" data-class="ss-border" checked>
                    <label for="extras_border" class="tooltip-wrapper mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <sup class="tooltip">Border</sup>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="inner" value="inner" id="extras_inner" data-class="ss-inner" checked>
                    <label for="extras_inner" class="tooltip-wrapper mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <sup class="tooltip">Inner</sup>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="gradient" value="gradient" id="extras_gradient" data-class="ss-rarity-gradient" disabled="disabled">
                    <label for="extras_gradient" class="tooltip-wrapper disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5.5,3.5 L19.5,3.5 C20.605,3.5 21.5,4.395 21.5,5.5 L21.5,19.5 C21.5,20.605 20.605,21.5 19.5,21.5 L5.5,21.5 C4.395,21.5 3.5,20.605 3.5,19.5 L3.5,5.5 C3.5,4.395 4.395,3.5 5.5,3.5 z"></path>
                            <path d="M16.344,21.5 L21.5,16.344"></path>
                            <path d="M12.344,21.5 L21.5,12.344"></path>
                            <path d="M7.344,21.5 L21.5,7.344"></path>
                            <path d="M3.656,18.188 L18.344,3.5"></path>
                        </svg>
                        <sup class="tooltip">Foil</sup>
                    </label>
                </li>
            </menu>
        </div>
        <div class="hidden md:flex flex-row flex-justify-end">
            <menu id="icon-transparent" class="flex flex-row">
                <li>
                    <input type="checkbox" name="transparent" value="true" id="transparent">
                    <label for="transparent" class="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19,2 C20.657,2 22,3.343 22,5 L22,19 C22,20.657 20.657,22 19,22 L5,22 C3.343,22 2,20.657 2,19 L2,5 C2,3.343 3.343,2 5,2 L19,2 z M4,14.667 L9.333,14.667 L9.333,20 L14.667,20 L14.667,14.667 L20,14.667 L20,9.333 L14.667,9.333 L14.667,4 L9.333,4 L9.333,9.333 L4,9.333 L4,14.667 z M14.667,9.333 L14.667,14.667 L9.333,14.667 L9.333,9.333 L14.667,9.333 z"></path>
                        </svg>
                    </label>
                </li>
            </menu>
            <menu id="icon-density" class="flex flex-row group">
                <li>
                    <input type="radio" name="density" value="roomy" id="size_roomy" checked>
                    <label for="size_roomy" class="left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="density" value="normal" id="size_normal">
                    <label for="size_normal" class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="3" y1="15" x2="21" y2="15"></line>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                            <line x1="15" y1="3" x2="15" y2="21"></line>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="density" value="dense" id="size_dense">
                    <label for="size_dense" class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" name="density" value="icon" id="size_icon">
                    <label for="size_icon" class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="5" r="1"/>
                            <circle cx="19" cy="5" r="1"/>
                            <circle cx="5" cy="5" r="1"/>
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="19" cy="12" r="1"/>
                            <circle cx="5" cy="12" r="1"/>
                            <circle cx="12" cy="19" r="1"/>
                            <circle cx="19" cy="19" r="1"/>
                            <circle cx="5" cy="19" r="1"/>
                        </svg>
                    </label>
                </li>
            </menu>
        </div>
    </div>
</section>

<section id="results" class="bg-content pt-8 pb-16 flex flex-col flex-align-center">
    <div id="icons" class="w-wide" data-density="roomy">{{% icons %}}</div>
</section>
