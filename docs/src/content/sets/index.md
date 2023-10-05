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

<section id="icon-menu" class="mt-12 flex flex-row flex-justify-between w-wide">
    <div class="flex flex-row flex-justify-start w-full">
        <menu id="icon-rarity" class="flex flex-row group">
            <li>
                <input type="radio" name="rarity" value="common" id="rarity_common" data-class="ss-rarity-common" autocomplete="off" checked>
                <label for="rarity_common" class="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 480 480" fill="#000">
                        <path d="M76.084 233.472c32.743.6 66.086 9.848 90.981 31.943 38.842 32.943 56.938 85.032 59.388 134.772-41.791 2.449-81.733-20.196-106.478-52.889-24.995-32.893-38.142-73.285-43.891-113.826zM314.734 263.465c24.395-21.245 57.239-29.043 88.932-29.293-7.549 55.138-30.794 112.026-77.384 145.319-20.696 15.847-47.24 21.446-72.885 20.546 2-50.889 20.246-104.078 61.337-136.572z"/>
                        <path d="M0 326.652c27.944-5.799 58.338-8.798 85.932-.5 15.647 16.247 26.045 37.043 43.191 51.99 16.797 16.746 39.642 24.444 61.137 33.243-51.089 2.049-105.328-6.299-147.519-37.143C25.095 361.895 11.498 344.749 0 326.652zM396.517 325.453c27.245-7.149 55.939-4.15 83.483-.5-13.047 29.693-40.492 50.339-68.486 65.036-38.292 16.997-80.883 24.245-122.724 22.295 25.345-11.547 52.889-21.595 71.185-43.69 13.197-13.498 20.696-32.594 36.542-43.141zM240.411 67.406c9.095 113.171 14.161 127.959 17.311 136.752 4.164.275 8.331.546 12.486.949 2.058-5.379 1.543-5.816 4.128-16.599 5.504-22.959 10.206-85.849 10.992-90.052 4.049 30.719 6.02 49.969 8.808 69.137 1.288 8.797 2.705 17.584 4.594 26.299 1.275 5.692 2.635 11.404 4.932 16.855 3.865 1.043 7.7 2.188 11.416 3.595 1.164-2.36 2.04-4.825 2.864-7.293 2.077-6.414 3.516-12.974 4.775-19.545 7.193-45.814 7.357-49.301 8.517-52.438 7.511 64.209 9.074 81.156 10.495 98.112-10.891 3.646-21.19 8.651-30.606 14.706-12.598 8.107-23.565 18.13-32.655 29.309a145.967 145.967 0 0 0-22.363 38.106c-6.77 17.051-10.589 34.923-12.65 52.876-.666 5.513-1.076 11.045-1.709 16.558-.23 1.472-.27 3.025-1.072 4.365h-.396c-.735-.991-.78-2.215-.987-3.346-.486-3.658-.756-7.335-1.137-11.002-.957-9.885-2.317-19.748-4.403-29.5-3.423-15.951-8.598-31.704-16.674-46.322-9.236-16.766-21.947-32.137-37.875-44.403a137.479 137.479 0 0 0-40.031-21.355c2.022-23.601 4.16-47.2 6.637-70.769 3.795-27.076 3.918-27.058 3.979-27.048 3.582 19.723 4.793 30.573 6.572 41.585 1.416 8.825 3.013 17.644 5.445 26.301 1.095 3.764 2.288 7.526 4.025 11.105 3.716-1.417 7.594-2.43 11.422-3.605 1.391-.426 1.498-.045 3.408-10.445 4.93-26.846 14.804-103.264 14.935-101.92 7.466 76.397 9.956 86.065 11.82 95.266.838 3.884 1.787 7.703 3.289 11.437 4.156-.331 8.311-.668 12.475-.913 3.117-8.667 4.899-15.997 6.008-25.038 9.434-76.926 11.085-113.454 11.225-111.72z"/>
                    </svg>
                </label>
            </li>
            <li>
                <input type="radio" name="rarity" value="uncommon" id="rarity_uncommon" data-class="ss-rarity-uncommon" autocomplete="off">
                <label for="rarity_uncommon" class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 480 480" fill="#707883">
                        <path d="M76.084 233.472c32.743.6 66.086 9.848 90.981 31.943 38.842 32.943 56.938 85.032 59.388 134.772-41.791 2.449-81.733-20.196-106.478-52.889-24.995-32.893-38.142-73.285-43.891-113.826zM314.734 263.465c24.395-21.245 57.239-29.043 88.932-29.293-7.549 55.138-30.794 112.026-77.384 145.319-20.696 15.847-47.24 21.446-72.885 20.546 2-50.889 20.246-104.078 61.337-136.572z"/>
                        <path d="M0 326.652c27.944-5.799 58.338-8.798 85.932-.5 15.647 16.247 26.045 37.043 43.191 51.99 16.797 16.746 39.642 24.444 61.137 33.243-51.089 2.049-105.328-6.299-147.519-37.143C25.095 361.895 11.498 344.749 0 326.652zM396.517 325.453c27.245-7.149 55.939-4.15 83.483-.5-13.047 29.693-40.492 50.339-68.486 65.036-38.292 16.997-80.883 24.245-122.724 22.295 25.345-11.547 52.889-21.595 71.185-43.69 13.197-13.498 20.696-32.594 36.542-43.141zM240.411 67.406c9.095 113.171 14.161 127.959 17.311 136.752 4.164.275 8.331.546 12.486.949 2.058-5.379 1.543-5.816 4.128-16.599 5.504-22.959 10.206-85.849 10.992-90.052 4.049 30.719 6.02 49.969 8.808 69.137 1.288 8.797 2.705 17.584 4.594 26.299 1.275 5.692 2.635 11.404 4.932 16.855 3.865 1.043 7.7 2.188 11.416 3.595 1.164-2.36 2.04-4.825 2.864-7.293 2.077-6.414 3.516-12.974 4.775-19.545 7.193-45.814 7.357-49.301 8.517-52.438 7.511 64.209 9.074 81.156 10.495 98.112-10.891 3.646-21.19 8.651-30.606 14.706-12.598 8.107-23.565 18.13-32.655 29.309a145.967 145.967 0 0 0-22.363 38.106c-6.77 17.051-10.589 34.923-12.65 52.876-.666 5.513-1.076 11.045-1.709 16.558-.23 1.472-.27 3.025-1.072 4.365h-.396c-.735-.991-.78-2.215-.987-3.346-.486-3.658-.756-7.335-1.137-11.002-.957-9.885-2.317-19.748-4.403-29.5-3.423-15.951-8.598-31.704-16.674-46.322-9.236-16.766-21.947-32.137-37.875-44.403a137.479 137.479 0 0 0-40.031-21.355c2.022-23.601 4.16-47.2 6.637-70.769 3.795-27.076 3.918-27.058 3.979-27.048 3.582 19.723 4.793 30.573 6.572 41.585 1.416 8.825 3.013 17.644 5.445 26.301 1.095 3.764 2.288 7.526 4.025 11.105 3.716-1.417 7.594-2.43 11.422-3.605 1.391-.426 1.498-.045 3.408-10.445 4.93-26.846 14.804-103.264 14.935-101.92 7.466 76.397 9.956 86.065 11.82 95.266.838 3.884 1.787 7.703 3.289 11.437 4.156-.331 8.311-.668 12.475-.913 3.117-8.667 4.899-15.997 6.008-25.038 9.434-76.926 11.085-113.454 11.225-111.72z"/>
                    </svg>
                </label>
            </li>
            <li>
                <input type="radio" name="rarity" value="rare" id="rarity_rare" data-class="ss-rarity-rare" autocomplete="off">
                <label for="rarity_rare" class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 480 480" fill="#b7a066">
                        <path d="M76.084 233.472c32.743.6 66.086 9.848 90.981 31.943 38.842 32.943 56.938 85.032 59.388 134.772-41.791 2.449-81.733-20.196-106.478-52.889-24.995-32.893-38.142-73.285-43.891-113.826zM314.734 263.465c24.395-21.245 57.239-29.043 88.932-29.293-7.549 55.138-30.794 112.026-77.384 145.319-20.696 15.847-47.24 21.446-72.885 20.546 2-50.889 20.246-104.078 61.337-136.572z"/>
                        <path d="M0 326.652c27.944-5.799 58.338-8.798 85.932-.5 15.647 16.247 26.045 37.043 43.191 51.99 16.797 16.746 39.642 24.444 61.137 33.243-51.089 2.049-105.328-6.299-147.519-37.143C25.095 361.895 11.498 344.749 0 326.652zM396.517 325.453c27.245-7.149 55.939-4.15 83.483-.5-13.047 29.693-40.492 50.339-68.486 65.036-38.292 16.997-80.883 24.245-122.724 22.295 25.345-11.547 52.889-21.595 71.185-43.69 13.197-13.498 20.696-32.594 36.542-43.141zM240.411 67.406c9.095 113.171 14.161 127.959 17.311 136.752 4.164.275 8.331.546 12.486.949 2.058-5.379 1.543-5.816 4.128-16.599 5.504-22.959 10.206-85.849 10.992-90.052 4.049 30.719 6.02 49.969 8.808 69.137 1.288 8.797 2.705 17.584 4.594 26.299 1.275 5.692 2.635 11.404 4.932 16.855 3.865 1.043 7.7 2.188 11.416 3.595 1.164-2.36 2.04-4.825 2.864-7.293 2.077-6.414 3.516-12.974 4.775-19.545 7.193-45.814 7.357-49.301 8.517-52.438 7.511 64.209 9.074 81.156 10.495 98.112-10.891 3.646-21.19 8.651-30.606 14.706-12.598 8.107-23.565 18.13-32.655 29.309a145.967 145.967 0 0 0-22.363 38.106c-6.77 17.051-10.589 34.923-12.65 52.876-.666 5.513-1.076 11.045-1.709 16.558-.23 1.472-.27 3.025-1.072 4.365h-.396c-.735-.991-.78-2.215-.987-3.346-.486-3.658-.756-7.335-1.137-11.002-.957-9.885-2.317-19.748-4.403-29.5-3.423-15.951-8.598-31.704-16.674-46.322-9.236-16.766-21.947-32.137-37.875-44.403a137.479 137.479 0 0 0-40.031-21.355c2.022-23.601 4.16-47.2 6.637-70.769 3.795-27.076 3.918-27.058 3.979-27.048 3.582 19.723 4.793 30.573 6.572 41.585 1.416 8.825 3.013 17.644 5.445 26.301 1.095 3.764 2.288 7.526 4.025 11.105 3.716-1.417 7.594-2.43 11.422-3.605 1.391-.426 1.498-.045 3.408-10.445 4.93-26.846 14.804-103.264 14.935-101.92 7.466 76.397 9.956 86.065 11.82 95.266.838 3.884 1.787 7.703 3.289 11.437 4.156-.331 8.311-.668 12.475-.913 3.117-8.667 4.899-15.997 6.008-25.038 9.434-76.926 11.085-113.454 11.225-111.72z"/>
                    </svg>
                </label>
            </li>
            <li>
                <input type="radio" name="rarity" value="mythic" id="rarity_mythic" data-class="ss-rarity-mythic" autocomplete="off">
                <label for="rarity_mythic" class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 480 480" fill="#bf4427">
                        <path d="M76.084 233.472c32.743.6 66.086 9.848 90.981 31.943 38.842 32.943 56.938 85.032 59.388 134.772-41.791 2.449-81.733-20.196-106.478-52.889-24.995-32.893-38.142-73.285-43.891-113.826zM314.734 263.465c24.395-21.245 57.239-29.043 88.932-29.293-7.549 55.138-30.794 112.026-77.384 145.319-20.696 15.847-47.24 21.446-72.885 20.546 2-50.889 20.246-104.078 61.337-136.572z"/>
                        <path d="M0 326.652c27.944-5.799 58.338-8.798 85.932-.5 15.647 16.247 26.045 37.043 43.191 51.99 16.797 16.746 39.642 24.444 61.137 33.243-51.089 2.049-105.328-6.299-147.519-37.143C25.095 361.895 11.498 344.749 0 326.652zM396.517 325.453c27.245-7.149 55.939-4.15 83.483-.5-13.047 29.693-40.492 50.339-68.486 65.036-38.292 16.997-80.883 24.245-122.724 22.295 25.345-11.547 52.889-21.595 71.185-43.69 13.197-13.498 20.696-32.594 36.542-43.141zM240.411 67.406c9.095 113.171 14.161 127.959 17.311 136.752 4.164.275 8.331.546 12.486.949 2.058-5.379 1.543-5.816 4.128-16.599 5.504-22.959 10.206-85.849 10.992-90.052 4.049 30.719 6.02 49.969 8.808 69.137 1.288 8.797 2.705 17.584 4.594 26.299 1.275 5.692 2.635 11.404 4.932 16.855 3.865 1.043 7.7 2.188 11.416 3.595 1.164-2.36 2.04-4.825 2.864-7.293 2.077-6.414 3.516-12.974 4.775-19.545 7.193-45.814 7.357-49.301 8.517-52.438 7.511 64.209 9.074 81.156 10.495 98.112-10.891 3.646-21.19 8.651-30.606 14.706-12.598 8.107-23.565 18.13-32.655 29.309a145.967 145.967 0 0 0-22.363 38.106c-6.77 17.051-10.589 34.923-12.65 52.876-.666 5.513-1.076 11.045-1.709 16.558-.23 1.472-.27 3.025-1.072 4.365h-.396c-.735-.991-.78-2.215-.987-3.346-.486-3.658-.756-7.335-1.137-11.002-.957-9.885-2.317-19.748-4.403-29.5-3.423-15.951-8.598-31.704-16.674-46.322-9.236-16.766-21.947-32.137-37.875-44.403a137.479 137.479 0 0 0-40.031-21.355c2.022-23.601 4.16-47.2 6.637-70.769 3.795-27.076 3.918-27.058 3.979-27.048 3.582 19.723 4.793 30.573 6.572 41.585 1.416 8.825 3.013 17.644 5.445 26.301 1.095 3.764 2.288 7.526 4.025 11.105 3.716-1.417 7.594-2.43 11.422-3.605 1.391-.426 1.498-.045 3.408-10.445 4.93-26.846 14.804-103.264 14.935-101.92 7.466 76.397 9.956 86.065 11.82 95.266.838 3.884 1.787 7.703 3.289 11.437 4.156-.331 8.311-.668 12.475-.913 3.117-8.667 4.899-15.997 6.008-25.038 9.434-76.926 11.085-113.454 11.225-111.72z"/>
                    </svg>
                </label>
            </li>
            <li>
                <input type="radio" name="rarity" value="foil" id="rarity_foil" data-class="ss-rarity-foil" autocomplete="off">
                <label for="rarity_foil" class="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 480 480" fill="#00afc9" class="foil">
                        <path d="M76.084 233.472c32.743.6 66.086 9.848 90.981 31.943 38.842 32.943 56.938 85.032 59.388 134.772-41.791 2.449-81.733-20.196-106.478-52.889-24.995-32.893-38.142-73.285-43.891-113.826zM314.734 263.465c24.395-21.245 57.239-29.043 88.932-29.293-7.549 55.138-30.794 112.026-77.384 145.319-20.696 15.847-47.24 21.446-72.885 20.546 2-50.889 20.246-104.078 61.337-136.572z"/>
                        <path d="M0 326.652c27.944-5.799 58.338-8.798 85.932-.5 15.647 16.247 26.045 37.043 43.191 51.99 16.797 16.746 39.642 24.444 61.137 33.243-51.089 2.049-105.328-6.299-147.519-37.143C25.095 361.895 11.498 344.749 0 326.652zM396.517 325.453c27.245-7.149 55.939-4.15 83.483-.5-13.047 29.693-40.492 50.339-68.486 65.036-38.292 16.997-80.883 24.245-122.724 22.295 25.345-11.547 52.889-21.595 71.185-43.69 13.197-13.498 20.696-32.594 36.542-43.141zM240.411 67.406c9.095 113.171 14.161 127.959 17.311 136.752 4.164.275 8.331.546 12.486.949 2.058-5.379 1.543-5.816 4.128-16.599 5.504-22.959 10.206-85.849 10.992-90.052 4.049 30.719 6.02 49.969 8.808 69.137 1.288 8.797 2.705 17.584 4.594 26.299 1.275 5.692 2.635 11.404 4.932 16.855 3.865 1.043 7.7 2.188 11.416 3.595 1.164-2.36 2.04-4.825 2.864-7.293 2.077-6.414 3.516-12.974 4.775-19.545 7.193-45.814 7.357-49.301 8.517-52.438 7.511 64.209 9.074 81.156 10.495 98.112-10.891 3.646-21.19 8.651-30.606 14.706-12.598 8.107-23.565 18.13-32.655 29.309a145.967 145.967 0 0 0-22.363 38.106c-6.77 17.051-10.589 34.923-12.65 52.876-.666 5.513-1.076 11.045-1.709 16.558-.23 1.472-.27 3.025-1.072 4.365h-.396c-.735-.991-.78-2.215-.987-3.346-.486-3.658-.756-7.335-1.137-11.002-.957-9.885-2.317-19.748-4.403-29.5-3.423-15.951-8.598-31.704-16.674-46.322-9.236-16.766-21.947-32.137-37.875-44.403a137.479 137.479 0 0 0-40.031-21.355c2.022-23.601 4.16-47.2 6.637-70.769 3.795-27.076 3.918-27.058 3.979-27.048 3.582 19.723 4.793 30.573 6.572 41.585 1.416 8.825 3.013 17.644 5.445 26.301 1.095 3.764 2.288 7.526 4.025 11.105 3.716-1.417 7.594-2.43 11.422-3.605 1.391-.426 1.498-.045 3.408-10.445 4.93-26.846 14.804-103.264 14.935-101.92 7.466 76.397 9.956 86.065 11.82 95.266.838 3.884 1.787 7.703 3.289 11.437 4.156-.331 8.311-.668 12.475-.913 3.117-8.667 4.899-15.997 6.008-25.038 9.434-76.926 11.085-113.454 11.225-111.72z"/>
                    </svg>
                </label>
            </li>
        </menu>
        <menu id="icon-extras" class="hidden md:flex flex-row">
            <li>
                <input type="checkbox" name="border" value="border" id="extras_border" data-class="ss-border" autocomplete="off">
                <label for="extras_border" class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                </label>
            </li>
            <li>
                <input type="checkbox" name="inner" value="inner" id="extras_inner" data-class="ss-inner" autocomplete="off">
                <label for="extras_inner" class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                </label>
            </li>
            <li>
                <input type="checkbox" name="gradient" value="gradient" id="extras_gradient" data-class="ss-rarity-gradient" autocomplete="off" disabled="disabled">
                <label for="extras_gradient" class="disabled" disabled="disabled">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5.5,3.5 L19.5,3.5 C20.605,3.5 21.5,4.395 21.5,5.5 L21.5,19.5 C21.5,20.605 20.605,21.5 19.5,21.5 L5.5,21.5 C4.395,21.5 3.5,20.605 3.5,19.5 L3.5,5.5 C3.5,4.395 4.395,3.5 5.5,3.5 z"></path>
                        <path d="M16.344,21.5 L21.5,16.344"></path>
                        <path d="M12.344,21.5 L21.5,12.344"></path>
                        <path d="M7.344,21.5 L21.5,7.344"></path>
                        <path d="M3.656,18.188 L18.344,3.5"></path>
                    </svg>
                </label>
            </li>
        </menu>
    </div>
    <div class="hidden md:flex flex-row flex-justify-end">
        <menu id="icon-transparent" class="flex flex-row">
            <li>
                <input type="checkbox" name="transparent" value="true" id="transparent" autocomplete="off" checked>
                <label for="transparent" class="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,2 C20.657,2 22,3.343 22,5 L22,19 C22,20.657 20.657,22 19,22 L5,22 C3.343,22 2,20.657 2,19 L2,5 C2,3.343 3.343,2 5,2 L19,2 z M4,14.667 L9.333,14.667 L9.333,20 L14.667,20 L14.667,14.667 L20,14.667 L20,9.333 L14.667,9.333 L14.667,4 L9.333,4 L9.333,9.333 L4,9.333 L4,14.667 z M14.667,9.333 L14.667,14.667 L9.333,14.667 L9.333,9.333 L14.667,9.333 z"></path>
                    </svg>
                </label>
            </li>
        </menu>
        <menu id="icon-density" class="flex flex-row group">
            <li>
                <input type="radio" name="density" value="roomy" id="size_roomy" autocomplete="off" checked>
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
                <input type="radio" name="density" value="normal" id="size_normal" autocomplete="off">
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
                <input type="radio" name="density" value="dense" id="size_dense" autocomplete="off">
                <label for="size_dense" class="right">
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
        </menu>
    </div>
</section>

<section id="results" class="bg-content mt-8 pt-8 pb-16 flex flex-col flex-align-center">
    <div id="icons" class="w-wide" data-density="roomy">
        {{% icons %}}
    </div>
</section>