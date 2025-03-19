//load bleets
const messages = [
  ["@sarahboptician", "Could someone please give me directions to my happy place"],
  ["@zachdealba", "Me, some bubble wrap, a bottle of rum. I'd say I got myself a party."],
  ["@sophiephair", "I'm starting to think spending $30,000 on a liberal arts degree was a mistake"],
  ["@biggavin88", "no way that hot english royal got totally busted for weed in LS!!!"],
  ["@deeptammiboo", "Y duz luv hav 2 bee so compliK8ed?"],
  ["@TraceyDeSanta", "Please stop sending me toys. I don't do that stuff on cam."],
  ["@fifibroker2", "Sum fuckin' birthday this is. Thats it im goin sullybat."],
  ["@purfectbeckki", "I've dropped 10 pounds. Yay for me."],
  ["@TraceyDeSanta", "@JimmyDS infantile genitalia is real medical condition so you should totally use the handicapped parking space"],
  ["@eddieeddieeddie", "Am I the only one who thinks hair lips are funny?"],
  ["@WillieLoveFist", "About to get gobbled by this lassie after the show when some tosser smacks me in the gob and robs my gold tooth. Last time we tour America."],
  ["@graceofdog", "Is it too much to ask for friends who don't suck?"],
  ["@LesterC", "Badger Communications will rue the day they ever dropped my wifi connection."],
  ["@licklephilo83", "Walked in on my mom and dad having sex. My dad was receiving. I'll never lock them in the eye again"],
  ["@Brucie_K", "Still lots of FREE copies of my 2012 workout calendar up for grabs. Don't be shy bitchz!"],
  ["@CloeParker", "They've run out of champagne in first class. I'm never flying commercial again."],
  ["@maybenever1O", "Why would anyone want to steal Tyler Dixon's clothes? He's only famous for being a shit backing dancer with a crack habit who married Cloe Parker (and then divorced her like a week later)"],
  ["@lillianmose", "@aarontemple stop phoning me!!!! what part of \"id rather get a root canal than lay eyes on you again\" don't you understand????"],
  ["@neilgolightly", "My son Lozzyklingers, born 11.29am at 6.9 pounds. Cool name huh? Found it on www.yournewbabysname.com"],
  ["@odelmunk", "I'm in jail and they totally forgot to confiscate my phone!"],
  ["@TylerDixon", "Just when you think you got used to all the fame and adulation an obsessed fan breaks into your home and steals your clothes ;} #tylersworld #mycrazycelebritylife"],
  ["@JunkEnergyDrink", "Kids need energy too. Don't be the nerd with the juice box. You're old enough to make your own mind up. Fit in. Rock out. Jack up your life."],
  ["@BarryForWeed", "The big pharmaceutical companies are blocking legalization! The government shouldn't be allowed to make our lifestyle choices for us!"],
  ["@sammydumbell22", "That girl born without a face. I'd hit it. You don't look at the mantelpiece when you're stoking the fire ;)"],
  ["@PremiumDeluxeMotorsport", "There is problem with customer service hotline please stop calling it"],
  ["@tammycukgud", "@jerryvanek I just ate a peanut that reminded me of your dick. Go to hell you cheating bastard."],
  ["@PirateMusicStore", "Arrrr! Pirate Music locations closing throughout the country — 50% off all cds. Those are discs with music on it."],
  ["@MirandaCowan", "You‘re only as young as the man in your bed and the hormones in your system."],
  ["@londonyoyofreak", "I'm appalled by this media stunt the Americans have pulled on Princess Georgina! Drugs? What absolute rubbish! Leave our royal family alone!"],
  ["@BillAnthony", "Play the color, play the smell, play the truth. I brought the truth to Othello in the Park. And that same truth is with me when I play a super villain who wears his underwear outside his pants."],
  ["@karenpoochluva", "If it wasn't for my pets I'd be a friendless virgin."],
  ["@JimmyBoston", "Cris Fromage is actually like a really cool guy + religion does not come up when we hang #bros"],
  ["@AppropriateAssociates", "BFFs by the hour. Surround yourself with winners for a change with our professional party guests. www.AppropriateAssociates.com"],
  ["@RoccoPelosi", "Pardon my French, but just when you think there might still be some respect and class in this business it goes and fucks you. Being an agent to the stars isn't all champagne and blowjubs let me tell you."],
  ["@LesterC", "I've said it belore and I'll say it again, luddites - antivirus software is to IT security what a ripped condom is to safe sex"],
  ["@DIGIFARM", "New characters available in the Digifarm store! Now your father can have a daughter that he pimps out when crop yields are low! #Don'tLoseTheFarm"],
  ["@jaysonbugler", "You know your life's bad when you have a small penis but you're too poor to overcompensate for it #liberalartsgraduate"],
  ["@henrysmithethe4th", "It's an outrage! The police threw Sebastian off a bridge and took our cars! Daddy's so buying me a Grotti now. #lspd #police brutality #reversesnobbery"],
  ["@CrisFormage", "Not only does questioning kill you, it also kills everyone you love. It means you do not love them and you wish them to die. #epsilon www.epsllonprogram.com"],
  ["@think4urselv", "My new drinking game — every time someone asks me at the family party when I'm getting a job I take a shot."],
  ["@BruceSpade", "Don Percival and everyone at Merryweather are my heroes. Finally, foreign policy is in the right hands #celebrities"],
  ["@luvgunsandi6", "Kern-ann I wanna make u hole. Will u marry me?"],
  ["@SteveHainesFIB", "If the camera adds 5 pounds I must be really ripped right now. #theunderbellyofparadise"],
  ["@tacobrendan_who", "I leave the van for 2 minutes to do a shit and get a parking ticket then on the way home I see 3 sportscars racing on the Senora Freeway at like 120mph and nobody doing anything. My karma's screwed."],
  ["@ToeShoes", "Forget high heels — nothing says sexy like Toe Shoes. Shoes for Toes and Twats. #toeshoes www.toeshoesusa.com"],
  ["@BrudeSpade", "Has anyone got a line on some ethically sourced low carbon footprint cocaine? #doingmybit"],
  ["@carsnpipes_pedro", "all that money stollen from security spending for healthcare and now an iaa truck been hijacked thank you again liberal for fucking america"],
  ["@Honkers", "Counterfeit Tits! Tonight only at Honkersl Well actually every night. Come have some counterfeit conversation with a real live girl. Ask for Destiny Sparkle and her blue ball special."],
  ["@richie_howII", "If only I loved her as much as I lied to her. #weddingday #secondthoughts"],
  ["@DrFriedlander", "Remember: high self-esteem is often a mask for low self-esteem. In my patients, that is."],
  ["@mackinit2009", "Armored car hit. Police shootout on streets of East Los Santos. This is like the 90s all over again."],
  ["@MarthaTerm", "Why'd I do tar? When you've got a crack head mom telling jokes about your struggles with puberty on national tv, you need something to calm your nerves."],
  ["@gemmaonceboy", "Drinking whiskey out of the bottle with a crazy straw while shitting on my bed. But I can still bleet so seein where the night takes me for now."],
  ["@YourDeadFamily", "The real reason you're so fucked up might lie in your genes. Trace back generations of daddy issues at www.yourdeadfamily.com"],
  ["@brianaleatherDD", "To the asshole at work who keeps stealing my sandwiches, today's wasn't peanut butter."],
  ["@AntonBeaudelaire", "Having a #MELTDOWN #meltdown"],
  ["@geraldinok6", "We tell everyone we have the greatest military on earth but we can't stop some hoods stealing helicopters from an army base on home soil? Pathetic. The world is laughing at us, President Lawton!!"],
  ["@rockford_captain67", "First the overcooked duck breast, now thanks to some terrorists blowing up a boat at the Port of South Los Santos the Yacht Club wants to install an xray machine. What next...women in the clubhouse?"],
  ["@PunkMeUp", "It's been 4 hours and the dentist's still isn't answering my calls...well screw him. I gotta go get a pizza too. Ohhh pizzaaaa"]
]

const user1 = document.getElementById("user1");
const bleet1 = document.getElementById("bleet1");
const user2 = document.getElementById("user2");
const bleet2 = document.getElementById("bleet2");

function loadBleets(){
  let post1,post2;
  while(post1 == post2){
    post1 = messages[Math.floor(Math.random() * messages.length)]
    post2 = messages[Math.floor(Math.random() * messages.length)]
  }

  user1.textContent = post1[0];
  bleet1.textContent = post1[1];
  user2.textContent = post2[0];
  bleet2.textContent = post2[1];
}

loadBleets();