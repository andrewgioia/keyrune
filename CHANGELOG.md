# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

* Update ONC once official, higher resolution image comes out.
* Support apparent "tri-layered" symbols, like SNC and CBL where there's a rarity layer, a fixed white layer, and a border. These are unlike the dual-layered symbols like AFR and MID.
* Validate all class names to handle official set codes, MODO codes, and MTGJson/community fallbacks
* Update this changelog for better formatting 
* Review DSK and FDN SVG files to make sure they're single layer, and update docs if needed

## Versions

### [3.16.1] 2024-12-12

#### Added

* Pioneer Masters (PIO) set symbol ([#249](https://github.com/andrewgioia/keyrune/issues/249))
* Preliminary icon for the Tarkir: Dragonstorm (TDM) set symbol; this will be replaced when the official one comes out ([#250](https://github.com/andrewgioia/keyrune/issues/250))
* Aetherdrift Commander (DRC) set symbol with inner and border glyphs ([#251](https://github.com/andrewgioia/keyrune/issues/251))
* SVGs are now up to date and the improper scale of DSK and MB2 is corrected ([#260](https://github.com/andrewgioia/keyrune/issues/260))

#### Changed

* REN and RIN are now added as set codes and class names for Renaissance and Rinascimento, respectively. Previously these were `xren` and `xrin`, which are maintained for backwards compatibility, but they now have the "official" MTGJSON/Scryfall codes.

#### Fixed

* Re-adds support for text-stroke borders by default, and manual glyph borders as an override on specific symbols. Note that .ss-border is not working well when .ss-grad is also applied, due to the way that the gradient has to be applied to the glyph (via text-clip).

### [3.16.0] 2024-10-28 Aetherdrift

#### Added

* Aetherdrift (DFT) set symbol ([#248](https://github.com/andrewgioia/keyrune/issues/248))
* Innistrad Remastered (INR) set symbol ([#248](https://github.com/andrewgioia/keyrune/issues/248))
* Foundations Commander (FDC) set symbol ([#223](https://github.com/andrewgioia/keyrune/issues/233))

#### Changed

* Commander 2016 (C16) previously used the inner rarity layer as the monochrome/default set symbol. This unfortunately lost the sword pommel and much of the set symbols character, as WOTC uses nonstandard rarity/border styles for symbol images. The border is now the default monochrome set symbol and the symbol is now a dual-layered one with rarity as a separate glyph. ([#246](https://github.com/andrewgioia/keyrune/issues/246))

#### Fixed

* Y23 and Y24 were in the font but now are documented ([#247](https://github.com/andrewgioia/keyrune/issues/247))
* Y23 alias added for YDMU
* Cheatsheet now has better icon font rendering so things don't look so dark

#### Removed

* `.ss-border` has been removed after realizing 1. it wasn't functional for non-duo symbols and 2. it wasn't the correct way to do it anyway. Better automatica border support for non-duo symbols coming soon.

### [3.15.1] 2024-10-26 DSC, Y25, J25, and come cleanup

#### Added

* Duskmourn Commander set symbol (DSC) (Uses changes from [#244](https://github.com/andrewgioia/keyrune/pull/244). There was an issue with the assets that made it easier just to manually pull them in, plus this version includes the multilayer style with inner layer handling.
* Alchemy 2025 (Y25) set symbol, with alias for Alchemy Bloomburror (YBLB) ([#231](https://github.com/andrewgioia/keyrune/issues/231))
* Jumpstart 2025 (J25) set symbol ([#236](https://github.com/andrewgioia/keyrune/issues/236)). This one suffers from most of the border adding to the set symbol itself and will be much better handled in v4, but for now we're shipping a "modified" version by default to convey the border as well as an alternate `.j25a` true to the rarity layer.

#### Fixed

* Moved FDN up to Core Sets in documentation
* BLB unicode corrected in icons documentation ([#244](https://github.com/andrewgioia/keyrune/pull/244))

### [3.15.0] 2024-08-21 FDN, DSK, and other fixes

Major thanks to @Horsty80 for the PR and patience! Thanks to @HeliumOctahelide as well for contributions.

* **Added:** Duskmourne set symbol (DSK) ([#232](https://github.com/andrewgioia/keyrune/issues/232))
* **Added:** Foundations set symbol (FND) ([#233](https://github.com/andrewgioia/keyrune/issues/233))
* **Added:** Map to MH2 retro frame set code ([#239](https://github.com/andrewgioia/keyrune/pull/239))
* **Fixed:** BLB now correctly displayed, no longer showing BLC ([#234](https://github.com/andrewgioia/keyrune/issues/234))
* **Changed:** Development dependendies in `package.json` for lessc, sass, and clean-css.
* **Added:** New contributing guide beginnings

### [3.14.1] 2024-03-04 Fixes docs for BIG, fixes .ttf for embedding

* **Fixed:** Moved BIG to Expansions in docs ([#227](https://github.com/andrewgioia/keyrune/issues/227))
* **Changed:** keyrune.ttf should have the correct font embeddability setting, need to test to confirm ([#201](https://github.com/andrewgioia/keyrune/issues/201))

### [3.14.0] 2024-03-02 Murders at Karlov Manner and the 2024 announced sets

* **Added:** Murders at Karlov Manor (MKM), MKM Commander (MKC), and Ravnica: Clue Edition (CLU) set symbols ([#223](https://github.com/andrewgioia/keyrune/issues/223))
* **Added:** Outlaws of Thunder Junction (OTJ), OTJ Commander (OTC), Breaking News (OTP), The Big Score (BIG), Bloomburrow (BLB), BLB Commander (BLC), Universes Beyond: Assassin's Creed (ACR), Modern Horizons III (MH3), and MH3 Commander (M3C) ([#225](https://github.com/andrewgioia/keyrune/issues/225))

### [3.13.1] 2023-11-21 Fixes Sass division syntax

* **Merged:** Fix for Dart Sass 2.0.0 changes to division ([PR #221](https://github.com/andrewgioia/keyrune/pull/221)); thank you [@nogweii](https://github.com/nogweii)

### [3.13.0] 2023-11-21 Lost Caverns of Ixalan sets plus supplementals

* **Added:** Lost Caverns of Ixalan (LCI), Lost Caverns of Ixalan Ccmmander (LCC), Jurassic World (REX), and Special Guests (SPG) set symbols added ([#216](https://github.com/andrewgioia/keyrune/issues/216))
* **Added:** Universes Beyond: Fallout (PIP) set symbol added ([#218](https://github.com/andrewgioia/keyrune/issues/218))
* **Changed:** Kaldheim Commander now correctly has a dual-layered symbol variant to match the printed card ([#191](https://github.com/andrewgioia/keyrune/issues/191))
* **Fixed:** CMM added to Cheatsheet, was missing ([#219](https://github.com/andrewgioia/keyrune/issues/219))

### [3.12.3] 2023-10-02 WOE supplemental sets, early 2024 products, and some alternate symbols

* **Added:** Wilds of Eldraine Enchanting Tales (WOT) set symbol ([#208](https://github.com/andrewgioia/keyrune/issues/208))
* **Added:** Alchemy 2024 (Alchemy Wilds of Eldraine) (Y24) set symbol ([#209](https://github.com/andrewgioia/keyrune/issues/209))
* **Added:** Ravnica Remastered (RVR) set symbol ([#210](https://github.com/andrewgioia/keyrune/issues/210))
* **Added:** Battle Royale Box Set alternate symbole (BR) used in Gatherer ([#213](https://github.com/andrewgioia/keyrune/issues/213))
* **Added:** Unfinity Acorn cards (UNA) alternate symbol ([#214](https://github.com/andrewgioia/keyrune/issues/214))
* **Added:** Secret Lair logo as an alternate set symbol (SLD2) ([#206](https://github.com/andrewgioia/keyrune/issues/206))
* **Changed:** Secret Lair (SLD) is now an alias for PMEI
* **Fixed:** SVG for LTR is now in the SVG directory, as well as other missing ones ([#207](https://github.com/andrewgioia/keyrune/issues/207) [#211](https://github.com/andrewgioia/keyrune/issues/211))
* **Fixed:** UNF is now in the Sass variables file, it was missing previously 

### [3.12.2] 2023-05-26 Spring 2023 updates

* **Added:** Shadows Over Innistrad (SIR) set symbol ([#202](https://github.com/andrewgioia/keyrune/issues/202))
* **Added:** Shadows of the Past (SIS) set symbol ([#202](https://github.com/andrewgioia/keyrune/issues/202))
* **Added:** Multiverse Legends (MUL) set symbol ([#202](https://github.com/andrewgioia/keyrune/issues/202))
* **Added:** Commander Masters (CMM) set symbol ([#202](https://github.com/andrewgioia/keyrune/issues/202))
* **Added:** The Lord of the Rings: Tales of Middle-Earth (LTR) set symbol ([#203](https://github.com/andrewgioia/keyrune/issues/203))
* **Added:** The Lord of the Rings: Tales of Middle-Earth Commander (LTC) set symbol ([#203](https://github.com/andrewgioia/keyrune/issues/203))
* **Added:** Explorer Anthology (EA1) set symbol ([#203](https://github.com/andrewgioia/keyrune/issues/203))
* **Added:** Wilds of Eldraine (WOE) set symbol ([#205](https://github.com/andrewgioia/keyrune/issues/205))
* **Added:** Wilds of Eldraine Commander (WOC) set symbol ([#205](https://github.com/andrewgioia/keyrune/issues/205))
* **Added:** Universes Beyond: Doctor Who (WHO) set symbol ([#205](https://github.com/andrewgioia/keyrune/issues/205))
* **Fixed:** March of the Machine spelled correctly everywhere now ([#204](https://github.com/andrewgioia/keyrune/issues/204))
* **Fixed:** Y22 cheatsheet symbol is now the correct symbol ([#200](https://github.com/andrewgioia/keyrune/issues/200))

### [3.12.1] 2023-02-04 Hotfix for missing supplementals

* **Added:** Jumpstart 2022 (J22) set symbol
* **Added:** Commander Starter Decks (SCD) set symbol; includes inner white layer
* **Added:** 30th Anniversary Edition (30A) alternate symbol; @todo draw official text symbol used on the cards

### [3.12.0] 2023-02-03 Phyrexia: All Will Be One

This was _very late_ and I apologize to everyone relying on this project. Some of these were slated for v3.11.1 but I just pushed them into v3.12.0.

* **Added:** Phyrexia: All Will Be One (ONE) and ONE Commander (ONC) set symbols ([#198](https://github.com/andrewgioia/keyrune/issues/198)). ONC awaiting official WOTC image for tracing and update.
* **Added:** March of the Machines (MOM) and MOM Commander (MOC) set symbols. Note that MOM doesn't look very good because of the size of the border on the print version; this will become much better in v4 when borders are integrated as glyphs.
* **Added:** March of the Machines: The Aftermath (MAT) set symbol ([#198](https://github.com/andrewgioia/keyrune/issues/198))
* **Added:** Dominaria Remastered (DMR) set symbol ([#194](https://github.com/andrewgioia/keyrune/issues/194))
* **Added:** Game Night: Free for All (GN3) set symbol ([#192](https://github.com/andrewgioia/keyrune/issues/192))
* **Added:** Alchemy Horizons: Baldur's Gate (HBG) set symbol ([#193](https://github.com/andrewgioia/keyrune/issues/193))
* **Added:** Alchemy: Dominaria (YDMU) set symbol (the A23 symbol) ([#196](https://github.com/andrewgioia/keyrune/issues/196))
* **Fixed:** Alchemy 2022 (A22) set symbol corrected with Beleren font for the "22." Unsure what font was used in the previous glyph or how that even happened.
* Happy birthday, James!

### [3.11.0] 2022-11-15 Brothers' War sets

* **Added:** The Brothers' War (BRO) set symbol ([#195](https://github.com/andrewgioia/keyrune/issues/195))
* **Added:** The Brothers' War Commander (BRC) set symbol ([#195](https://github.com/andrewgioia/keyrune/issues/195))
* **Added:** The Brothers' War Retro Artifacts (BRR) set symbol ([#195](https://github.com/andrewgioia/keyrune/issues/195))
* **Added:** The Brothers' War Transformers (BOT) set symbol ([#195](https://github.com/andrewgioia/keyrune/issues/195))

### [3.10.0] 2022-05-13 Summer 2022 set symbols and typo fixes

* **Added:** Dominaria United (DMU) set symbol
* **Added:** Dominaria United Commander (DMC) set symbol
* **Added:** Double Masters 2022 (2X2) set symbol
* **Added:** Universes Beyond: Warhammer 40,000 (40K) set symbol
* **Fixed:** Set code for New Capenna Commander is now NCC, not NNC
* **Fixed:** Set code for Commander Legends: Baldur's Gate corrected to CLB (thanks to @arjenbrandenburgh in [PR #187](https://github.com/andrewgioia/keyrune/pull/187))
* **Fixed:** SaSS reference to J21 is no longer AFR (thanks to @ThePieBandit in [PR #185](https://github.com/andrewgioia/keyrune/pull/185))
* **Changed:** .ss-border now uses ::marker pseudo-element for a third glyph layer; this is an experimental test for the future 4.0 release that will normalize all symbol sizes and add 1-3 layer support to correctly represent them

### [3.9.2] 2022-03-26 Commander Legends: Battle for Baldur's Gate and Streets of New Capenna Commander

* **Added:** Commander Legends: Battle for Baldur's Gate (CBL) set symbol, along with it's white insert dual-layered symbol ([#186](https://github.com/andrewgioia/keyrune/issues/186))
* **Added:** Streets of New Capenna Commander (NNC) set symbol and 2 additional dual-layered symbols as an alternate ([#184](https://github.com/andrewgioia/keyrune/issues/184))

### [3.9.1] 2022-03-25 Kamigawa Commander and Streets of New Capenna

* **Added:** Kamigawa, Neon Dynasty Commander (NEC) set symbol ([#180](https://github.com/andrewgioia/keyrune/issues/180))
* **Added:** Streets of New Capenna (SNC) set symbol ([#184](https://github.com/andrewgioia/keyrune/issues/184))

### [3.9.0] 2022-01-26 Kamigawa: Neon Dynasty, Unfinity, and Alchemy 2022

* **Added:** Kamigawa, Neon Dynasty (NEO) set symbol ([#178](https://github.com/andrewgioia/keyrune/issues/178))
* **Added:** Unfinity (UNF) set symbol ([#175](https://github.com/andrewgioia/keyrune/issues/175))
* **Added:** Alchemy 2022 (Y22) set symbol ([#176](https://github.com/andrewgioia/keyrune/issues/176))

### [3.8.4] 2021-11-12 Innistrad sets and cleanup

* **Added:** Innistrad: Midnight Hunt Commander (MIC) set symbol ([#167](https://github.com/andrewgioia/keyrune/issues/167))
* **Added:** Innistrad: Crimson Vow Commander (VOC) set symbol ([#171](https://github.com/andrewgioia/keyrune/issues/171))
* **Added:** Commander Collection: Black (CC2) set symbol ([#166](https://github.com/andrewgioia/keyrune/issues/166))
* **Fixed:** Individual SVG filenames corrected and missing images added ([#168](https://github.com/andrewgioia/keyrune/issues/168))
* **Fixed:** CDN now at latest and font has the corrected/latest version

### [3.8.3] 2021-07-31 Jumpstart: Historic Horizons

* **Added:** preliminary trace of a very low res source J21 symbol

### [3.8.2] 2021-07-15 Forgotten Realms Commander

* **Added:** Adventures in the Forgotten Realms Commander (AFC) set symbol ([#163](https://github.com/andrewgioia/keyrune/issues/163))

### [3.8.1] 2021-07-06 Adds mising SVGs and corrects CDN

* **Fixed:** added missing SVG files for recent set symbols
* **Fixed:** the @latest url scheme in the CDN wasn't working well (caching issues), assets are loaded locally now for faster visual updates after releases ([#162](https://github.com/andrewgioia/keyrune/issues/162))

### [3.8.0] 2021-07-06 Strixhaven Mystical Archives and Commander 2021

* **Added:** Strixhaven Mystical Archive (STA) set symbol ([#156](https://github.com/andrewgioia/keyrune/issues/156))
* **Added:** Commander 2021 (C21) set symbol ([#161](https://github.com/andrewgioia/keyrune/issues/161))
* **Fixed:** dual-layer typo corrected

### [3.7.2] 2021-02-19 Kaldheim Commander

* **Added:** Kaldheim Commander (KHC) ([#152](https://github.com/andrewgioia/keyrune/issues/152))
* **Fixed:** MP1 had an errant stroke in the SVG, this is removed now! ([#154](https://github.com/andrewgioia/keyrune/issues/154))

### [3.7.1] 2020-12-11 Kaladesh Remastered

* **Added:** Kaladesh Remastered (KLR) ([#151](https://github.com/andrewgioia/keyrune/issues/151))
* **Fixed:** Set codes for Kaldheim (KHM) and Strixhaven (STX) are now official ([#149](https://github.com/andrewgioia/keyrune/issues/149))

### [3.7.0] 2020-09-02 2021 symbols and new dual-layered support!

This is a big update with all of the recently announced 2021 sets (major thanks to @csuhta and @scryfall). This also begins support for the dual-layered symbols (like M21, though that hasn't been fixed yet) where the border and fill are 2 separate layers.

* **Added:** Modern Horizons 2 (MH2) ([#136](https://github.com/andrewgioia/keyrune/issues/136))
* **Added:** Zendikar Rising Expeditions (ZNE) ([#142](https://github.com/andrewgioia/keyrune/issues/142))
* **Added:** Time Spiral Remastered (TSR) ([#138](https://github.com/andrewgioia/keyrune/issues/138))
* **Added:** Kaldheim (preliminary code xKLD) ([#139](https://github.com/andrewgioia/keyrune/issues/139))
* **Added:** Dungeons & Dragons: Adventures in the Forgotten Realms (preliminary code xDND) ([#137](https://github.com/andrewgioia/keyrune/issues/137))
* **Added:** Strixhaven: School of Mages (preliminary code xSSM) ([#144](https://github.com/andrewgioia/keyrune/issues/144))
* **Added:** Innistrad Vampires (preliminary code xIN3) ([#140](https://github.com/andrewgioia/keyrune/issues/140))
* **Added:** Innistrad Werewolves (preliminary code xIN4) ([#141](https://github.com/andrewgioia/keyrune/issues/141))
* **Added:** new support for 2 dual-layered symbols, xDND and xIN4. Now if you add `.ss-duo` to these symboles they'll use the border glyph to properly represent these print layers (where the inner is the gradient/colorized portion and the border is black or white) (partly addressing [#119](https://github.com/andrewgioia/keyrune/issues/119))

### [3.6.8] 2020-08-28 Adds all missing SVGs

* **Fixed:** Forgot to add some SVGs, that folder is current now

### [3.6.7] 2020-08-28 Amonkhet Remastered, Mystery Booster

* **Added:** Arena's Amonkhet Remastered (AKR) added ([#132](https://github.com/andrewgioia/keyrune/issues/132))
* **Added:** Mystery Booster (MB1) uses Scryfall's planeswalker symbol ([#130https://github.com/andrewgioia/keyrune/issues/130]())
* **Changed:** aliases for Secret Lair sets (SLU and SLD) added to `.pmei` ([#131](https://github.com/andrewgioia/keyrune/issues/131))
* **Fixed:** Zendikar Rising set code fixed to ZNR ([#135](https://github.com/andrewgioia/keyrune/issues/135))

### [3.6.6] 2020-06-17 Core 2021, Jumpstart, Double Masters, Signature Spellbook: Chandra

* **Added:** Long overdue, sorry! Core Set 2021 (M21) and Jumpstart symbols added ([#123](https://github.com/andrewgioia/Keyrune/issues/123))
* **Added:** Signature Spellbook: Chandra (SS3) set symbol ([#124](https://github.com/andrewgioia/Keyrune/issues/124))
* **Added:** Double Masters (2XM) set symbol added ([#121](https://github.com/andrewgioia/Keyrune/issues/121))
* **Fixed:** I had the symbol (a while ago) for Jumpstart as M21 oddly, that's now fixed

### [3.6.5] 2020-04-02 Unsanctioned

* **Added:** Unsanctioned (UND) set symbol added, traced from low-ish resolution image on Gatherer ([#112](https://github.com/andrewgioia/Keyrune/issues/112))

### [3.6.4] 2020-04-02 Ikoria: Lair of Behemoths has the correct set code 

* **Changed:** xIKR is now corrected to IKO as the set code for Ikoria: Lair of Behemoths.

### [3.6.3] 2019-12-04 Judge Academy 2020 and Historic Anthology symbols 

* **Added:** Judge Academy 2020 Promo (J20) set symbol, announced today ([#110](https://github.com/andrewgioia/Keyrune/issues/110))
* **Added:** Historic Anthology (HA1) set symbol, Arena only currently; the code is unofficial ([#108](https://github.com/andrewgioia/Keyrune/issues/108))
* **Added:** new aliases for Secret Lair Drop Series (SLD) and Heroes of the Realm 2017 (HTR17), for the PMEI symbol ([#109](https://github.com/andrewgioia/Keyrune/issues/109))

### [3.6.2] 2019-10-31 Symbols for 2020 Commander products 👻

* **Added:** Ikoria: Commander Decks (C20), for release 4/24/20
* **Added:** Zendikar Rising: Commander Decks (ZNC), for release 2020 Q3
* **Added:** Commander Collection: Green (CC1), for release 2020 Q3
* **Added:** Commander Legends (CMR) and its accompanying decks (CMC), for release 2020 Q4

### [3.6.1] 2019-10-30 License revisions

* **Added:** CHANGELOG.md file added and changes removed from README.md.
* **Changed:** Fonts now issued under OFL 1.1 and package under GPL 3.0.

### [3.6.0] 2019-10-30 Unofficial symbols for 2020 main sets

* **Added:** Unofficial symbols for Theros: Beyond Death (THB), Ikoria: Lair of Behemoths (placeholder xIKR), Core 2021 (placeholder M21), Zendikar Rising (placeholder xZNR), promo Ponies: the Gathering (PTG), and Game Night 2019 (GN2).
* **Changed:** ELD updated with official symbols.

### Previous (to fix)

* v3.5.0 - Throne of Eldraine (unofficial) and Commander 2019 added; SCSS files cleaned up and tested; SVG files now distributed with project
* v3.4.3 - Magic 2020 (finally) added, sorry everyone. M19 symbol updated to M20 style it should have been.
* v3.4.2 - Signature Spellbook: Gideon added, Mirage symbol corrected
* v3.4.1 - Fixed issue with desktop version not updating (version numbers must be present in ttf on some systems)
* v3.4.0 - War of the Spark and Modern Horizons unofficial icons added, GK2 alias
* v3.3.3 - Ravnica Allegiance added (official symbol)
* v3.3.2 - Ultimate Masters icon added
* v3.3.1 - All 10 guilds added as Guild Kit symbols
* v3.3.0 - Adding Guilds of Ravnica, Game Night, and Mythic Edition. Breaking: this is now `MED` and the original conflicting Masters Edition is now `ME1`.
* v3.2.4 - Assigning pMEI to now added 2016 Heroes promo set
* v3.2.4 - Gatherer-style ABUR symbols added
* v3.2.3 - Commander 2018 added, replaced DDT with official source image
* v3.2.2 - New MTGO Arena, Signature Series: Jace, and Global Series: Jiang Yanggu & Mu Yanling symbols added
* v3.2.1 - Official Dominaria symbol replaced for DOM, drawn BBD and M19 symbols added, fixed mixing DDS in scss version
* v3.2.0 - Dominaria and Commander Anthology 2 icons drawn from low-resolution versions
* v3.1.10 - Final Duel Deck: Elves vs. Inventors added
* v3.1.9 - Official Masters 25 icon added
* v3.1.8 - New promo symbols for Sega Dreamcast cards (issue 59) and The Sorcerer's Apprentice movie cards (issue 60)
* v3.1.7 - Added the symbol used in The Duelist's "Extra Pulled" fantasy card column (issue 58)
* v3.1.6 - Added FTV: Transform and HasCon 2017 promo symbols
* v3.1.5 - Updated IMA and C17 with official hi-res versions; added FNM as an unofficial symbol (pFNM) and the heart symbol on Phoenix Heart (pHEART)
* v3.1.4 - New icons for Iconic Masters (IMA), Commander 2017 (C17), and Merfolk vs. Goblins (DDT), based on low-res version from Coming Soon
* v3.1.3 - Correcting the set code for Dragon*Con
* v3.1.2 - Added Dragon*Con promo symbol for Nalathni Dragon
* v3.1.1 - Minor corrections for versioning and updates to readme for jsDelivr
* v3.1.0 - Slew of new icons for Ixalan, Rivals of Ixalan, Explorers of Ixalan, and Unstable; corrected Hour of Devastation icon based on official release
* v3.0.3 - Adding new (correct) Archenemy: Nicol Bolas symbol with confirmed set code (e01)
* v3.0.2 - Fixing BRB path issue
* v3.0.1 - Adding IDW Promo icon and clenaing up some core set icons
* v3.0.0 - [Big update!](https://github.com/andrewgioia/Keyrune/milestone/1) Many symbols were compared and corrected to the original card version, 6 unofficial icons added, and new preview on doc site
* v2.3.0 - Adding Hour of Devastation symbol (awaiting higher resolution source)
* v2.2.3 - Adding Welcome Deck 2017 symbol
* v2.2.2 - Adding Amonkhet Invocation symbol; correcting Portal: Second Age set code and leaving alias
* v2.2.1 - Adding alias for Nemesis
* v2.2.0 - Duel Deck: Mind vs. Might added thanks to @csuhta
* v2.1.6 - Foil rarity added; corrected Kaladesh Inventions code to mps (mp1 alias remains)
* v2.1.5 - FTV: Vaults icon added (April Fools 2009 set); Archenemy: Nicol Bolas is now the same exact glyph as Archenemy
* v2.1.4 - Timeshifted rarity added
* v2.1.3 - Archenemy: Nicol Bolas added
* v2.1.2 - Magic Online Treasure Chest added, thanks to @csuhta
* v2.1.1 - Commander Anthology
* v2.1.0 - A whole slew of new promo and digital symbols thanks to @fenhl
* v2.0.1 - Xbox Media Promo symbol from original Duels of the Planeswalkers on Xbox
* v2.0.0 - Keyrune, now with sass! Thanks to @jordanbrauer
* v1.8.0 - Amonkhet icon added; re-organized Readme with new updates at top
* v1.7.2 - Added Kaladesh Inventions icon (labeled as MP1)
* v1.7.1 - Cleaned up icon files to remove any with multiple paths; fixed UNH icon
* v1.7.0 - Lots of new sets! Kaladesh, Aether Revolt, Modern Masters 2017, Planechase Anthology, Commander 2016, and Duel Decks: Nissa v. Ob Nixilis added
* v1.6.2 - Added Legendary Cube icon; unfortunately there's no official set code
* v1.6.1 - Updated EMN with the official high-res source image
* v1.6.0 - Eldritch Moon icon added (based on low-res WOTC graphic)
* v1.5.6 - Added forgotten Salvat 2005 and 2011 (inserts into MTG Encyclopedias)
* v1.5.5 - Duel Deck: Blessed vs. Cursed added
* v1.5.4 - Welcome Deck 2016
* v1.5.3 - FTV: Angels and FTV: Lore
* v1.5.2 - Conspiracy 2: Take the Crown added
* v1.5.1 - Eternal Masters added
* v1.5.0 - Oath of the Gatewatch and Shadows Over Innistrad added
* v1.4.3 - Beginning of white border add-on with .ss-border class; renamed font to Keyrune for desktop
* v1.4.2 - Commander 2015 added
* v1.4.1 - Zendikar Expeditions added
* v1.4.0 - Battle for Zendikar added
* v1.3.1 - Duel Decks: Zendikar v. Eldrazi added
* v1.3.0 - Magic Origins icon added
* v1.2.0 - Cheatsheet added to documentation site; variables changed in LESS files to be Keyrune specific
* v1.1.0 - Woff2 support added; Vintage Masters icon added
* v1.0.2 - Modern Masters 2015 added
* v1.0.1 - Tempest Remastered added (non major set version)
* v1.0.0 - public launch via /r/magicTCG! added Dragons of Tarkir (DTK)
* v0.2.0 - all fonts are fluid width now so they will scale correctly without scaled padding; fixed width class added
* v0.1.0 - initial font creation and CSS/LESS files for all sets up to Fate Reforged