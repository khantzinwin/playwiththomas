//ps4 and ps5 digital game list
const products = [
      { 
        name: "Alan Wake Remastered", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/alan-wake-remastered.png" 
      },

      { 
        name: "Assassin's Creed Antiquity Pack [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-antiquity-pack.png" 
      },

      { 
        name: "Assassin's Creed IV Black Flag [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-iv-black-flag.png" 
      },

      { 
        name: "Assassin's Creed Mirage", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-mirage.png" 
      },

      { 
        name: "Assassin's Creed Odyssey", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 25,000ks <br>❌ PS4AA - 25,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-odyssey.png" 
      },

      { 
        name: "Assassin's Creed Odyssey Gold Edition [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 40,000ks <br>✅ PS4AA - 40,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-odyssey-gold-edition.png" 
      },

      { 
        name: "Assassin's Creed Origins", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-origins.png" 
      },

      { 
        name: "Assassin's Creed Syndicate", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-syndicate.png" 
      },

      { 
        name: "Assassin's Creed Unity", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-unity.png" 
      },

      {  
        name: "Assassin's Creed Valhalla", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-valhalla.png" 
      },

      { 
        name: "Assassin's Creed Valhalla Complete Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 60,000ks <br>❌ PS4AA - 60,000ks <br> ✅ DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/assassin's-creed-valhalla-complete-edition.png" 
      },

      { 
        name: "A Plague Tale", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/a-plague-tale-innocence.png" 
      },

      { 
        name: "A Way Out [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/a-way-out.png" 
      },

      { 
        name: "A Way Out + It Takes Two [Hazelight Bundle]", 
        version: "<br>Version - A Way Out [PS4], It Takes Two [PS5/PS4]",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/hazelight-bundle.png" 
      },

      { 
        name: "Batman Arkham Collection", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ❌ DA - 8,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/batman-arkham-collection.png" 
      },

      { 
        name: "Battlefield V Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/battlefield-v-definitive-edition.png" 
      },

      { 
        name: "Bioshock Remastered", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/bioShock-remastered.png" 
      },

      { 
        name: "Bloodborne", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/bloodborne.png" 
      },

      { 
        name: "Bloodborne Complete Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/bloodborne-complete-edition.png" 
      },

      { 
        name: "Call of Duty Black Ops 4", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-black-ops-4.png" 
      },

      { 
        name: "Call of Duty Black Ops 6 Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 80,000ks <br>❌ PS4AA - 80,000ks <br> ❌ DA - 40,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-black-ops-6.png" 
      },

      { 
        name: "Call of Duty Black Ops Cold War Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>❌ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-black-ops-cold-war.png" 
      },

      { 
        name: "Call of Duty Modern Warfare", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-modern-warfare.png" 
      },

      { 
        name: "Call of Duty Modern Warfare II Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 60,000ks <br>❌ PS4AA - 60,000ks <br> ❌ DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-modern-warfare-ii.png" 
      },

      { 
        name: "Call of Duty Modern Warfare III Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 60,000ks <br>❌ PS4AA - 60,000ks <br> ❌ DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-modern-warfare-iii.png" 
      },

      { 
        name: "Call of Duty Vanguard Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-vanguard.png" 
      },

      { 
        name: "Call of Duty WWII Gold Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cod-wwii.png" 
      },

      { 
        name: "Civilization VII", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 120,000ks <br>✅ PS4AA - 120,000ks <br> ❌ DA - 60,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/civilization-vii.png" 
      },

      { 
        name: "Crash Bandicoot 4 It's About Time", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/crash-bandicoot-4.png" 
      },

      { 
        name: "Crash Bandicoot NSane Trilogy", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/crash-bandicoot-nsane-trilogy.png" 
      },

      { 
        name: "Crash Team Racing Nitro Fueled", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/crash-team-racing.png" 
      },

      { 
        name: "Cyberpunk 2077", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 45,000ks <br>✅ PS4AA - 45,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/cyberpunk-2077.png" 
      },

      { 
        name: "Days Gone", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/days-gone.png" 
      },

      { 
        name: "Detroit Become Human", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/detroit-become-human.png" 
      },

      { 
        name: "Demon Slayer The Hinokami Chronicles", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/demon-slayer.png" 
      },

      { 
        name: "Diablo II & III Prime Evil Collection", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/diablo-prime-evil.png" 
      },

      { 
        name: "Dying Light Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dying-light.png" 
      },

      { 
        name: "Dying Light 2 Stay Human", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dying-light-2.png" 
      },

      { 
        name: "Dynasty Warriors 9", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 25,000ks <br>✅ PS4AA - 25,000ks <br> ✅ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dynasty-warriors-9.png" 
      },

      { 
        name: "Elden Ring", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 60,000ks <br>❌ PS4AA - 60,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/elden-ring.png" 
      },

      { 
        name: "Elden Ring Nightreign", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 60,000ks <br>✅ PS4AA - 60,000ks <br> ❌ DA - 40,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/elden-ring-nightreign.png" 
      },

      { 
        name: "Far Cry 5", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/far-cry-5.png" 
      },

      { 
        name: "Far Cry 6 [sale]", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/far-cry-6.png" 
      },

      { 
        name: "Far Cry Insanity Bundle 345 [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/far-cry-insanity-bundle.png" 
      },

      { 
        name: "Far Cry New Dawn", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/far-cry-new-dawn.png" 
      },

      { 
        name: "FC 24", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 30,000ks <br>✅ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/fc-24.png" 
      },

      { 
        name: "FC 25", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 45,000ks <br>❌ PS4AA - 45,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/fc-25.png" 
      },

      { 
        name: "FIFA 22", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 10,000ks <br>✅ PS4AA - 10,000ks <br> ❌ DA - 5,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/fifa-22.png" 
      },

      { 
        name: "FIFA 23", 
        version: "<br>Version - PS5 $ PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>✅ PS4AA - 15,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/fifa-23.png" 
      },

      { 
        name: "For Honor", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 10,000ks <br>❌ PS4AA - 10,000ks <br> ❌ DA - 5,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/for-honor.png" 
      },

      { 
        name: "Ghost of Tsushima Director Cut Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/got.png" 
      },

      { 
        name: "God of War III Remastered", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gow-iii.png" 
      },

      { 
        name: "God of War", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gow.png" 
      },

      { 
        name: "God of War Ragnarok", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 45,000ks <br>❌ PS4AA - 45,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gow-ragnarok.png" 
      },

      { 
        name: "Gran Turismo 7", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 45,000ks <br>❌ PS4AA - 45,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gt7.png" 
      },

      { 
        name: "Grand Theft Auto V", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gtav.png" 
      },

      { 
        name: "Grand Theft Auto Trilogy", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>✅ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gta-trilogy.png" 
      },

      { 
        name: "Green Hell", 
        version: "<br>Version - PS4 & PS5",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/green-hell.png" 
      },

      { 
        name: "Grounded", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/grounded.png" 
      },

      { 
        name: "Guardians of the Galaxy", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/gotg.png" 
      },

      { 
        name: "Hellblade: Senua's Sacrifice", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/hellblade.png" 
      },

      { 
        name: "Hogwarts Legacy Deluxe Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/hogwarts-legacy.png" 
      },

      { 
        name: "Horizon II Forbidden West", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/horizon-ii.png" 
      },

      { 
        name: "It Takes Two", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/it-takes-two.png" 
      },

      { 
        name: "KENA Bridge of Spirits", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/kena.png" 
      },

      { 
        name: "Kingdom Come Deliverance Royal Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/kingdom-come-deliverance.png" 
      },

      { 
        name: "L.A Noire", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/la-noire.png" 
      },

      { 
        name: "LEGO Harry Potter Collection", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 10,000ks <br>❌ PS4AA - 10,000ks <br> ❌ DA - 5,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/lego-harry-potter.png" 
      },

      { 
        name: "LEGO DC Super Villains", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/lego-super-villains.png" 
      },

      { 
        name: "LEGO The Incredibles", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/lego-the-incredibles.png" 
      },

      { 
        name: "Little Nightmares Complete Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/little-nightmares-ce.png" 
      },

      { 
        name: "Little Nightmares II", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/little-nightmares-ii.png" 
      },

      { 
        name: "Lost Judgment [sale]", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 25,000ks <br>✅ PS4AA - 25,000ks <br> ✅ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/lost-judgment.png" 
      },

      { 
        name: "Mafia 1 Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mafia.png" 
      },

      { 
        name: "Mafia 2 Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mafia-2.png" 
      },

      { 
        name: "Mafia 3 Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mafia-3.png" 
      },

      { 
        name: "Mafia Trilogy", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mafia-trilogy.png" 
      },

      { 
        name: "Martha is Dead", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/martha-is-dead.png" 
      },

      { 
        name: "Marvel's Spider-Man GOTY Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>❌ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/spider-man-goty.png" 
      },

      { 
        name: "Marvel's Spider-Man Miles Morales", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/spider-man-mm.png" 
      },

      { 
        name: "Metal Gear Solid V The Phantom Pain", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mgsv-pp.png" 
      },

      { 
        name: "Metro Redux", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/metro-redux.png" 
      },

      { 
        name: "Metro Exodus", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/metro-exodus.png" 
      },

      { 
        name: "Mortal Kombat 11 Ultimate Edition [sale]", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>✅ PS4AA - 15,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mk11-ue.png" 
      },

      { 
        name: "Mortal Kombat 11 Ultimate Edition & Injustice 2 Legendary Edition [sale]", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/ultimate-fighter-bundle.png" 
      },

      { 
        name: "NFS Heat [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>✅ PS4AA - 15,000ks <br> ✅ DA - 9,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/nfs-heat.png" 
      },

      { 
        name: "Naruto Storm Trilogy", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/nintendo-switch/naruto-storm-trilogy.png" 
      },

      { 
        name: "Naruto Storm 4 Road to Boruto", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/naruto-storm-4-rtb.png" 
      },

      { 
        name: "Naruto X Boruto Ultimate Ninja Connection [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 60,000ks <br>✅ PS4AA - 60,000ks <br> ✅ DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/naruto-connections.png" 
      },

      { 
        name: "Nioh 2", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/nioh-2.png" 
      },

      { 
        name: "Nioh 2 the Remastered Complete Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>✅ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/nioh-2-remastered.png" 
      },
      
      { 
        name: "One Piece Pirate Warriors 4 [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/op4.png" 
      },

      { 
        name: "Outlast 1 & 2 Bundle", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/outlast-bundle.png" 
      },

      { 
        name: "Overcooked 2", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/overcooked-2.png" 
      },

      { 
        name: "Persona 4 Golden", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/persona-4-golden.png" 
      },

      { 
        name: "Persona 5 Royal", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>✅ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/persona-5-royal.png" 
      },

      { 
        name: "Red Dead Redemption", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/rdr.png" 
      },

      { 
        name: "Red Dead Redemption II", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/rdr2.png" 
      },

      { 
        name: "Resident Evil 2 Remake", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re2.png" 
      },

      { 
        name: "Resident Evil 3 Remake", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re3.png" 
      },

      { 
        name: "Resident Evil 456 Triple Pack", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 25,000ks <br>❌ PS4AA - 25,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re456.png" 
      },

      { 
        name: "Resident Evil 4 CLassic", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ❌ DA - 8,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re4-classic.png" 
      },

      { 
        name: "Resident Evil 4 Remake", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re4-remake.png" 
      },

      { 
        name: "Resident Evil 4 Remake Gold Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re4-remake-ge.png" 
      },

      { 
        name: "Resident Evil 7 Biohazard", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/re7.png" 
      },

      { 
        name: "Resident Evil Village Gold Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/revillage-ge.png" 
      },

      { 
        name: "Riders Republic", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/riders-republic.png" 
      },

      { 
        name: "Sekiro Shadow Die Twice GOTY Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>✅ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sekiro.png" 
      },

      { 
        name: "Shadow of Colossus", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/shadow-of-colossus.png" 
      },

      { 
        name: "SIFU", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sifu.png" 
      },

      { 
        name: "Sleeping Dogs Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sleeping-dogs.png" 
      },

      { 
        name: "Sniper Elite 4", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sniper-elite-4.png" 
      },

      { 
        name: "Sniper Elite 5", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sniper-elite-5.png" 
      },

      { 
        name: "Snow Runner", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/snow-runner.png" 
      },

      { 
        name: "Star Wars Jedi Cross Gen Digital Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>✅ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/star-wars-jedi-bundle.png" 
      },

      { 
        name: "Stranded Deep", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/stranded-deep.png" 
      },

      { 
        name: "Stray", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/stray.png" 
      },

      { 
        name: "Street Fighter 6", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 50,000ks <br>❌ PS4AA - 50,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/street-fighter-6.png" 
      },

      { 
        name: "Tekken 7 Definitive Edition", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 45,000ks <br>❌ PS4AA - 45,000ks <br> ❌ DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tekken-7-de.png" 
      },

      { 
        name: "The Callisto Protocol", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 35,000ks <br>✅ PS4AA - 35,000ks <br> ✅ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-callisto-protocol.png" 
      },

      { 
        name: "The Crew 2", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-crew-2.png" 
      },

      { 
        name: "The Crew Motorfest Standard Edition Cross Gen Bundle", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-crew-motorfest.png" 
      },

      { 
        name: "The Evil Within 2", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-evil-within-2.png" 
      },

      { 
        name: "The Last Guardian", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-last-guardian.png" 
      },

      { 
        name: "The Last of Us Remastered", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tlous-remastered.png" 
      },

      { 
        name: "The Last of US Part II", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>❌ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tlous2.png" 
      },

      { 
        name: "The Quarry Deluxe Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 25,000ks <br>❌ PS4AA - 25,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-quarry.png" 
      },

      { 
        name: "The Sinking City", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-sinking-city.png" 
      },

      { 
        name: "The Walking Dead: The Telltale Definitive Series", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 30,000ks <br>❌ PS4AA - 30,000ks <br> ❌ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-walking-dead.png" 
      },

      { 
        name: "The Witcher III Wild Hunt Complete Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/the-witcher-iii.png" 
      },

      { 
        name: "Tomb Raider Definitive Survivor Trilogy", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 35,000ks <br>❌ PS4AA - 35,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tomb-raider-trilogy.png" 
      },

      { 
        name: "Uncharted Digital Bundle [ UC 4+ Lost Legacy][sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 30,000ks <br>✅ PS4AA - 30,000ks <br> ✅ DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/uncharted-digital-bundle.png" 
      },

      { 
        name: "Uncharted Nathan Drake Collection", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/uncharted-ndc.png" 
      },

      { 
        name: "Uncharted the Lost Legacy ", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 15,000ks <br>❌ PS4AA - 15,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/uncharted-the-lost-legacy.png" 
      },

      { 
        name: "Until Dawn", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/until-dawn.png" 
      },

      { 
        name: "Watch Dogs 1 & 2 Bundle", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/watch-dogs-bundle.png" 
      },

      { 
        name: "Watch Dogs 2 [sale]", 
        version: "<br>Version - PS4",
        price: "<br> ✅ PS5AA - 20,000ks <br>✅ PS4AA - 20,000ks <br> ✅ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/watch-dogs-2.png" 
      },

      { 
        name: "Watch Dogs Legion", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/watch-dogs-legion.png" 
      },

      { 
        name: "WWE 2K24 Cross Gen Digital Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 40,000ks <br>❌ PS4AA - 40,000ks <br> ❌ DA - 20,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/wwe-2k24.png" 
      },

      { 
        name: "WWE 2K25 Cross Gen Digital Edition", 
        version: "<br>Version - PS5 & PS4",
        price: "<br> ❌ PS5AA - 90,000ks <br>✅ PS4AA - 90,000ks <br> ❌ DA - 45,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/wwe-2k25.png" 
      }
    ];

    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");

    function displayProducts(filteredProducts) {
      productList.innerHTML = "";
      filteredProducts.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <div class="product-name">${p.name}</div>
          <div class="product-version">${p.version}</div>
          <div class="product-price">${p.price}</div>
        `;
        productList.appendChild(card);
      });
    }

    // Initial render
    displayProducts(products);

    // Filter as user types
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
      displayProducts(filtered);
    });

//ps5 execlusive game list
const products2 = [
      { 
        name: "Alan Wake II", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 80,000ks <br> ❌ PS5DA - 40,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/alan-wake-ii.png" 
      },

      { 
        name: "Assassin's Creed Shadows", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 150,000ks <br> ❌ PS5DA - 75,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/ac-shadows.png" 
      },

      { 
        name: "Astro Bot", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/astro-bot.png" 
      },

      { 
        name: "A Plague Tale: Requiem", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 60,000ks <br> ✅ PS5DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/a-plague-tale-requiem.png" 
      },

      { 
        name: "Black Myth Wukong", 
        version: "<br>Version - PS5",
        price: "<br> ❌PS5AA - 120,000ks <br> ✅ PS5DA - 60,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/bmw.png" 
      },

      { 
        name: "Brothers: A Tale of Two Sons Remake", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 30,000ks <br> ✅ PS5DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/brothers-ataleoftwosons.png" 
      },

      { 
        name: "Death Stranding 2", 
        version: "<br>Version - PS5",
        price: "<br> ❌PS5AA - 200,000ks <br> ❌PS5DA - 100,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/death-stranding-2.png" 
      },

      { 
        name: "Devil May Cry 5 Special Edition", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 30,000ks <br> ❌ PS5DA - 15,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dmc5-se.png" 
      },

      { 
        name: "Dragon's Dogma 2", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dragon-dogma-ii.png" 
      },

      { 
        name: "Dynasty Warriors Origins", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 150,000ks <br> ✅ PS5DA - 75,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/dynasty-warriors-origins.png" 
      },

      { 
        name: "Final Fantasy VII Rebirth", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/ff7-rebirth.png" 
      },

      { 
        name: "Final Fantasy XVI", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/ffxvi.png" 
      },

      { 
        name: "Forza Horizon 5", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 140,000ks <br> ✅ PS5DA - 70,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/forza-horizon-5.png" 
      },

      { 
        name: "Kingdom Come Deliverance II", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 150,000ks <br> ❌ PS5DA - 75,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/kingdom-come-deliverance-ii.png" 
      },

      { 
        name: "Life is Strange Double Exposure", 
        version: "<br>Version - PS5",
        price: "<br> ✅ PS5AA - 50,000ks <br> ✅ PS5DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/life-is-strange-double-exposure.png" 
      },

      { 
        name: "Marvel's Spider-Man Remastered [sale]", 
        version: "<br>Version - PS5",
        price: "<br> ✅ PS5AA - 60,000ks <br> ✅ PS5DA - 30,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sm-remastered.png" 
      },

      { 
        name: "Marvel's Spider-Man 2", 
        version: "<br>Version - PS5",
        price: "<br> ❌PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/sm-2.png" 
      },

      { 
        name: "Monster Hunter Wilds", 
        version: "<br>Version - PS5",
        price: "<br> ❌PS5AA - 200,000ks <br> ✅PS5DA - 100,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mh-wilds.png" 
      },

      { 
        name: "Mortal Kombat 1", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 50,000ks <br> ❌ PS5DA - 25,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/mk1.png" 
      },

      { 
        name: "Rise of the Ronin", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 100,000ks <br> ✅ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/rise-of-the-ronin.png" 
      },

      { 
        name: "Silent Hill 2", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 130,000ks <br> ✅ PS5DA - 65,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/silent-hill-2.png" 
      },

      { 
        name: "Split Fiction", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 130,000ks <br> ❌ PS5DA - 65,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/split-fiction.png" 
      },

      { 
        name: "Stellar Blade", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 130,000ks <br> ✅ PS5DA - 65,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/stellar-blade.png" 
      },

      { 
        name: "Tekken 8", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 90,000ks <br> ❌ PS5DA - 45,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tekken-8.png" 
      },

      { 
        name: "The Last of Us Part I Remake", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 80,000ks <br> ❌ PS5DA - 40,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tlous1-remake.png" 
      },

      { 
        name: "The Last of Us Part II Remastered", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 100,000ks <br> ❌ PS5DA - 50,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/tlous2-remastered.png" 
      },

      { 
        name: "UFC 5", 
        version: "<br>Version - PS5",
        price: "<br> ❌ PS5AA - 90,000ks <br> ❌ PS5DA - 45,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/ufc-5.png" 
      },

      { 
        name: "Uncharted Legacy of Thieves Collection [sale]", 
        version: "<br>Version - PS5",
        price: "<br> ✅ PS5AA - 90,000ks <br> ✅ PS5DA - 45,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/uncharted-legacy-of-thieves-collection.png" 
      },

      { 
        name: "Warhammer 40,000: Space Marine 2", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 140,000ks <br> ❌ PS5DA - 70,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/space-marine-2.png" 
      },

      { 
        name: "Wuchang Fallen Feathers Deluxe Edition [Pre Order]", 
        version: "<br>Version - PS5",
        price: "<br> ✅PS5AA - 140,000ks <br> ✅ PS5DA - 70,000ks", 
        image: "https://storage.googleapis.com/pwt-img/ps4andps5/Wuchang%20Fallen%20Feathers%20(1).png" 
      }
];

const productList2 = document.getElementById("productList2");
    const searchInput2 = document.getElementById("searchInput");

    function displayProducts2(filteredProducts2) {
      productList2.innerHTML = "";
      filteredProducts2.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <div class="product-name">${p.name}</div>
          <div class="product-version">${p.version}</div>
          <div class="product-price">${p.price}</div>
        `;
        productList2.appendChild(card);
      });
    }

    // Initial render
    displayProducts2(products2);

    // Filter as user types
    searchInput2.addEventListener("input", () => {
      const keyword = searchInput2.value.toLowerCase();
      const filtered = products2.filter(p => p.name.toLowerCase().includes(keyword));
      displayProducts2(filtered);
    });



    // Back to Top Button Script Start
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }); 
        //END

    //Messenger Icon Button Start
    const messengerBtn = document.getElementById("messengerBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        messengerBtn.style.display = "block";
      } else {
        messengerBtn.style.display = "none";
      }
    });

    function openMessenger() {
      window.open('http://m.me//ThomasBBR27', '_blank');
    }
    //End

    // Hard refresh simulation: bypass browser cache on page refresh
    const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    const baseUrl = window.location.href.split('?')[0];
    window.location.replace(`${baseUrl}?v=${Date.now()}`);
  }