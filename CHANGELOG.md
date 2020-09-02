# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

* Validate all class names to handle official set codes, MODO codes, and MTGJson/community fallbacks
* Replace IKO with official symbol trace
* Change xZNR to official set code and replace with symbol trace when final
* Update this changelog for better formatting 

## Versions 

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